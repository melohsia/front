const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

//promises-aplus-tests ./Promise/Promise.js
const resolvePromise = (promise2, x, resolve, reject) => {
    if( promise2 === x ) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'));
    }
    let called;
    if((typeof x === 'object' && x != null) || typeof x === 'function'){
        try {
            let then = x.then;
            if(typeof then === 'function'){
                //当前有then方法 认为是一个promise对象
                then.call(x, y => {
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject);
                },r => {
                    if (called) return;
                    called = true;
                    reject(r)
                })
            }else{
                //x是一个普通对象，直接成功即可
                resolve(x);
            }
        } catch (error) {
            if (called) return;
            called = true;
            reject(error);
        }
    }else{
        //不是对象也不是函数，普通的值，直接resolve成功即可
        resolve(x);
    }
};

class Promise {
    constructor(executor) {
        this.status = PENDING;
        //成功的值
        this.value = undefined;
        //失败的理由
        this.reason = undefined;
        //成功的回调函数数组
        this.onResolvedCallbacks = [];
        //失败的回调函数数组
        this.onRejectedCallbacks = [];

        let resolve = (value) => {

            if(value instanceof Promise) {
                return value.then(resolve, reject)
            }

            if(this.status === PENDING) {
                this.value = value
                this.status = FULFILLED
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }

        let reject = (reason) => {
            if(this.status === PENDING) {
                this.reason = reason
                this.status = REJECTED
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        //默认执行器会立即执行
        try {
            executor(resolve, reject); 
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
        //因为错误的值要让后面访问到，所以这里也要跑出个错误，不然会在之后 then 的 resolve 中捕获
        onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
        let promise2 = new Promise((resolve, reject) => {
            if(this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        //根据X的值 => promise状态
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            }
            if(this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason);
                        //根据X的值 => promise状态
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            }
            if(this.status === PENDING) {
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try{
                            let x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject)
                        }catch(error){
                            reject(error)
                        }
                    }, 0)
                })
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try{
                            let x = onRejected(this.reason);
                            resolvePromise(promise2, x, resolve, reject)
                        }catch(error){
                            reject(error)
                        }
                    }, 0)
                })
            }
            
        })

        return promise2
    }
    /**
     * 方法返回一个以给定值解析后的Promise 对象。
     * 如果该值为promise，返回这个promise；
     * 如果这个值是thenable（即带有"then" 方法)），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
     * 否则返回的promise将以此值完成。此函数将类promise对象的多层嵌套展平。
     */
    static resolve (value){
        if(value instanceof Promise) return value;
        return new Promise(resolve => resolve(value))
    }

    /**
     * 方法返回一个带有拒绝原因的Promise对象。
     */
    static reject (reason){
        return new Promise((resolve, reject) => reject(reason))
    }


    static all = (values) => {
        if(!Array.isArray(values)){
            const type = typeof values
            return new TypeError(`TypeError: ${type} ${values} is not iterable`)
        }
        return new Promise((resolve, reject) => {
            let res = []
            let orderIndex = 0
            const processData = (value, index) => {
                res[index] = value
                orderIndex++
                if(orderIndex === values.length){
                    resolve(res)
                }
            }

            values.forEach((promise, index) => {
                if(promise instanceof Promise) {
                    promise.then(value => {
                        processData(value, index)
                    }, reject)
                }else{
                    processData(promise, index)
                }
            })
        })
    }

    static race = (promises) => {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                let val = promises[i];
                if (val && typeof val.then === 'function') {
                  val.then(resolve, reject);
                } else { // 普通值
                  resolve(val)
                }
              }
            // for(let p of promises){
            //     Promise.resolve(p).then(value => {
            //         resolve(value)
            //     }, reason => {
            //         reject(reason)
            //     })
            // }
        })
    }
}

/**
 * 返回一个Promise，并且处理拒绝的情况。
 * 它的行为与调用Promise.prototype.then(undefined, onRejected) 相同。 
 * 就相当于一个没有成功的 then
 */
Promise.prototype.catch = (errCallback) => {
    return this.then(null, errCallback)
}

/**
 * 返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。
 * 在finally之后，还可以继续then。并且会将值原封不动的传递给后面的then
 * 
 * MyPromise.resolve(callback())的意义：等待promise执行完成
 * 这个写法其实涉及到一个finally()的使用细节，
 * finally()如果return了一个reject状态的Promise，将会改变当前Promise的状态，
 * 这个MyPromise.resolve就用于改变Promise状态，
 * 在finally()没有返回reject态Promise或throw错误的情况下，去掉MyPromise.resolve也是一样的（
 */
Promise.prototype.finally = (callback) => {
    return this.then(value => {
        return  Promise.resolve(callback()).then(() => value)
    }, reason => {
        return Promise.resolve(callback()).then(() => {throw reason})
    })
}

Promise.defer = Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve,reject)=>{
        dfd.resolve = resolve;
        dfd.reject = reject;
    })
    return dfd;
  }

module.exports = Promise;
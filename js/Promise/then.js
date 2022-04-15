const Promise = require('./Promise')

// const p = new Promise((resolve, reject) => {
//   resolve(1000)
// })
// Promise.prototype.finally = (callback) => {
//   return p.then(value => {
//       return Promise.resolve(callback()).then(() => value)
//   }, reason => {
//       return Promise.resolve(callback()).then(() => {throw reason})
//   })
// }

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok1');
  }, 2000);
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok2');
  }, 1000);
})

Promise.race([1,2,3,p1,p2]).then(data => {
  console.log('resolve', data);
}, err => {
  console.log('reject', err);
})
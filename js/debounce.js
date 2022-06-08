/**
 * 当持续触发一个事件时，在n秒内，事件没有再次触发，此时才会执行回调；
 * 如果n秒内，又触发了事件，就重新计时
 */

function debounce (fn, delay) {
    let timer = null;
    return function (...args) {
        //防抖重在清零 clearTimeout(timer)
        //原理：每当触发时，清除上一个定时器，不管是否已经执行。
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
}

// 节流，顾名思义，控制水的流量。控制事件发生的频率，如控制为1s发生一次，甚至1分钟发生一次。
function throttle (fn, delay) {
    let timer = null;
    return function (...args) {
        if(timer) return
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay)
    }
}

const test = () => {
    console.log('heihei')
}
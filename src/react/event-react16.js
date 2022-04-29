import React, { useEffect } from 'react';


const Event16 = () => {

    useEffect(() => {
        
        function dispatchEvent(event){
            const paths = [];
            let current = event.target;
            while(current){
                paths.push(current);
                current = current.parentNode;
            }
            //模拟捕获和冒泡
            for(let i = paths.length - 1; i >= 0; i--){
                const clickCapture = paths[i].onClickCapture;
                clickCapture && clickCapture();
            }
            for(let i = 0; i < paths.length; i++){
                const click = paths[i].onClick;
                click && click();
            }
        }

        const parentNode = document.getElementById('parentNode');
        const childNode = document.getElementById('childNode');

        parentNode.addEventListener('click', () => {
            console.log('父元素原生捕获');
        }, true)
        parentNode.addEventListener('click', () => {
            console.log('父元素原生冒泡');
        })
        parentNode.onClick=() => {
            console.log(`父元素React事件冒泡`);
        }
        parentNode.onClick=() => {
            console.log(`父元素React事件冒泡`);
        }
        parentNode.onClickCapture=() => {
            console.log(`父元素React事件捕获`);
        }

        childNode.addEventListener('click', () => {
            console.log('子元素原生捕获');
        }, true)
        childNode.addEventListener('click', () => {
            console.log('子元素原生冒泡');
        })
        childNode.onClick=() => {
            console.log(`子元素React事件冒泡`);
        }
        childNode.onClickCapture=() => {
            console.log(`子元素React事件捕获`);
        }

        document.addEventListener('click', dispatchEvent);
        
        document.addEventListener('click', () => {
            console.log('document原生捕获');
        }, true)
        
        document.addEventListener('click', () => {
            console.log('document原生冒泡');
        })
    }, [])

    return (
        <div id='parentNode'>
                <button id='childNode'>Click me</button>
        </div>
    )
}

export default Event16

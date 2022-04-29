import React, { useEffect } from 'react';


const Event17 = () => {

    useEffect(() => {
        
        function dispatchEvent(event, useCapture){
            const paths = [];
            let current = event.target;
            while(current){
                paths.push(current);
                current = current.parentNode;
            }
            if(useCapture){
                //模拟捕获和冒泡
                for(let i = paths.length - 1; i >= 0; i--){
                    const clickCapture = paths[i].onClickCapture;
                    clickCapture && clickCapture();
                }
            }else{
                for(let i = 0; i < paths.length; i++){
                    const click = paths[i].onClick;
                    click && click();
                }
            }
        }

        const root = document.getElementById('root');
        //react捕获
        root.addEventListener('click', (event) => {
            dispatchEvent(event, true)
        }, true)
        //冒泡
        root.addEventListener('click', (event) => {
            dispatchEvent(event, false)
        })
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
    }, [])

    return (
        <div id='root'>
            <div id='parentNode'>
                <button id='childNode'>Click me</button>
            </div>
        </div>
    )
}

export default Event17

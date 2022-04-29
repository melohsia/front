//1.定义JSX
let style = { color: 'green', border: '1px solid red', margin: '5px' }
// let virtualDom = (
//     <div key='A' style={style}>A
//         <div key='B1' style={style}>B1</div>
//         <div key='B2' style={style}>B2</div>
//     </div>
// )

let virtualDom = {
    type: 'div',
    key: 'A',
    props: {
        style,
        children: [
            { type: 'div', key: 'B1',props: { style, children: [] } },
            { type: 'div', key: 'B2',props: { style, children: [] } },
        ]
    }
}

//表示正在处理中的Fiber
let workInprogress;
const TAG_ROOT = 'TAG_ROOT';
const TAG_HOST = 'TAG_HOST';
const Placement = 'Placement';

function workLoop () {
    while(workInprogress){
        workInprogress = performUnitOfWork(workInprogress); //完成后返回下一个任务
    }
    console.log(rootFiber);
    commitRoot(rootFiber);
}

let root = document.getElementById('root');
//fiber
let rootFiber = {
    tag: TAG_ROOT,//Fiber类型
    key: 'ROOT',//唯一标识
    stateNode: root,//Fiber对应真是的Dom节点
    props: {children: [virtualDom]}
}

function commitRoot(rootFiber) {
    let currentEffect = rootFiber.firstEffect;
    while(currentEffect){
        let flags = currentEffect.flags;
        switch(flags){
            case Placement:
                    commitPlacement(currentEffect);
                break;
            default:
                break
        }
        currentEffect = currentEffect.nextEffect;
    }
}

function commitPlacement(currentEffect) {
    let parent = currentEffect.return;
    parent.appendChild(currentEffect.stateNode);
}

function performUnitOfWork(workInprogress){
    beginWork(workInprogress);
    //创建完子fiber以后，若有子Fiber，则返回子fiber，构建子fiber的子fiber
    if(workInprogress.child){
        return workInprogress.child;
    }
    //构建兄弟
    while(workInprogress){
        completeUnitOfWork(workInprogress);
        if(workInprogress.sibling){
            return workInprogress.sibling
        }
        //没有兄弟，找父节点的兄弟节点
        workInprogress = workInprogress.return
    }
}

function completeUnitOfWork (workInprogress) {
    console.log('completeUnitOfWork', workInprogress.key);
    let stateNode;//真实Dom
    switch(workInprogress.tag){
        case TAG_HOST:
            stateNode = createStateNode(workInprogress);
            break
        default:
            break;
    }
    //在完成工作的单元的时候要判断当前的fiber节点有没有对应的DOM操作
    makeEffectList(workInprogress);
}

function makeEffectList(completeWork){
    let returnFiber = completeWork.return; 
    if(returnFiber){
        if(!returnFiber.firstEffect){
            returnFiber.firstEffect = completeWork.firstEffect;
        }
        if(completeWork.lastEffect){
            if(returnFiber.lastEffect){
                returnFiber.lastEffect.nextEffect = completeWork.firstEffect;
            }
            returnFiber.lastEffect = completeWork.lastEffect;
        }
        if(completeWork.flags){
            if(returnFiber.lastEffect){
                returnFiber.lastEffect.nextEffect = completeWork;
            }else{
                returnFiber.firstEffect = completeWork;
            }
            returnFiber.lastEffect = completeWork;
        }
    }
}

function createStateNode(fiber){
    if(fiber.tag === TAG_HOST){
        let stateNode = document.createElement(fiber.type);
        fiber.stateNode = stateNode;
    }
    return fiber.stateNode;
}

//根据当前Fiber和虚拟Dom构建fiber树
function beginWork(workInprogress){
    console.log('beginWork', workInprogress.key)
    let nextChildren = workInprogress.props.children;
    return reconcileChildren(workInprogress, nextChildren);

}

//根据父fiber和子虚拟dom数组，构建当前returnFiber的子Fiber树
function reconcileChildren(returnFiber, nextChildren){
    let previousNewFiber;
    let fistChildFiber;
    for(let i = 0; i < nextChildren.length; i++){
        let newFiber = createFiber(nextChildren[i]);
        newFiber.flags = Placement;
        newFiber.return = returnFiber;
        if(!fistChildFiber){
            fistChildFiber = newFiber;
        }else{
            previousNewFiber.sibling = newFiber;
        }
        previousNewFiber = newFiber;
    }
    returnFiber.child = fistChildFiber;
    return fistChildFiber;
}

function createFiber(element){
    return {
        tag: TAG_HOST,
        type: element.type,
        key: element.key,
        props: element.props,
    }
}

//当前正在执行的工作单元
workInprogress = rootFiber;
workLoop();

export {
    workLoop
}
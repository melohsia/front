// import Event16 from './react/event-react16';
// import Event17 from './react/event-react17';
// import { workLoop } from './react/render/main'
import './App.css';

function App() {
  let style = { color: 'green', border: '1px solid red', margin: '5px' }
  // workLoop();

  const debounce = (fn, delay) => {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay);
    }
  }

  const throttle = (fn, delay) => {
    let timer = null;
    return function (...args) {
        if(timer) return
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, delay)
    }
  }

  const handleClick = () => {
    console.log('点击A')
  }

  const handleClickLater = debounce(handleClick, 1000)
  const handleClickThrottle = throttle(handleClick, 2000)

  let virtualDom = (
      <div key='A' style={style} onClick={handleClickThrottle}>A1
          <div key='B1' style={style}>B11</div>
          <div key='B2' style={style}>B22</div>
      </div>
  )
  return virtualDom;

  // const XSSDom = {
  //   "ref":null,
  //   "type":"div",
  //   "props":{
  //       "dangerouslySetInnerHTML":{
  //           "__html":"<img src=\"empty.png\" onerror =\"alert('xss')\"/>"
  //       }
  //   }
  // };
  // return XSSDom;

//   const Link = ({
//     target
//   }) => (
//     <a style={{ cursor: 'pointer' }} href={target}>点击</a>
//   )
  
//   return (
//     <Link target='javascript:alert("xss href")' />
//   )
}

export default App;

// import Event16 from './react/event-react16';
// import Event17 from './react/event-react17';
import { workLoop } from './react/render/main'
import './App.css';

function App() {
  let style = { color: 'green', border: '1px solid red', margin: '5px' }
  workLoop();
  let virtualDom = (
      <div key='A' style={style}>A1
          <div key='B1' style={style}>B11</div>
          <div key='B2' style={style}>B22</div>
      </div>
  )
  return virtualDom;
}

export default App;

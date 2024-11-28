// import logo from './logo.svg';
// import './App.css';
// import './index.css';

// React project
import Main from './Main.jsx';
import { BrowserRouter } from "react-router-dom";

// For createPortal
// import ReactDOM from 'react-dom';

// For class component style
// import React from 'react';


// For functional component style using ref 
// import { useRef } from 'react';

// Functional component style for Clock component
// Functional component style for createPortal
// import { useState, useEffect } from 'react';

// React project 
function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Main />
    </BrowserRouter>
  );
}

// React call function FancyBorder with 
// props.color = blue and
// props.children = <h1 className="Dialog-title">.... All included in FancyBorder
// Also called the Clock component (class component or functional component)
// function App() {
//   return ( 
//     <>
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         Welcome
//       </h1>
//       <p className="Dialog-message">
//         Thank you for visiting our spacecraft!
//       </p>
//     </FancyBorder>
//     {/* Defined class component and functional component for <Clock /> */}
//     <Clock />
//     </>
//   );
// }

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

// Class component style for Clock component
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date(), count: 0};

//     // 要自己 bind this
//     this.tick = this.tick.bind(this);
//   }

//   // 當元件被顯示到 DOM 後，React 會 call componentDidMount() lifecycle method
//   componentDidMount() {
//     // 我們啟動一個 timer 每秒鐘會自動更新時間
//     // timerID is not a special property but the setInterval is standard javascript function
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   // This method is called after the component updates
//   componentDidUpdate(prevProps, prevState) { 
//      console.log('Component updated'); 
//   }

//   // 當元件要從 DOM 中被移除 (remove) 前 React 會 call componentWillUnmount() lifecycle method
//   componentWillUnmount() {
//     // 做些資源清理的動作清掉 timer, the clearInterval is standard javascript function
//     clearInterval(this.timerID);
//   }

//   tick() {
//     // 我們用 setState() 來更新 State 資料
//     // React 會偵測到 State 的更新，call render() 重繪畫面
//     this.setState( { date: new Date() });
//   }

//   // Method to update state
//   // 用 Class Fields (類別屬性) 語法和 ES6 的 Arrow function 讓 this 被自動綁定
//   incrementCount = () => { this.setState( (prevState) => ({ count: prevState.count + 1 }) ); };

//   render() {
//     return (
//       // Fragmentation using <> and </>
//       <>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         <p>Count: {this.state.count}</p> 
//         <button onClick={this.incrementCount}>Increment</button>
//       </>
//     );
//   }
// }

// Functional component style for Clock component
// const Clock = () => {

//   // useState hook to manage the count state
//   const [date, setDate] = useState(new Date());
//   const [count, setCount] = useState(0);

//   // useEffect hook to perform side effects
//   // The second parameter in useEffect is not strictly required. 
//   // This parameter is an array of dependencies that tells React when to re-run the effect
//   // If you omit it, the effect will run after every render, which can lead to performance issues.
//   // Dependency array: useEffect runs when 'count' changes

//   useEffect(() => { document.title = `Count: ${count}`; }, [count]); 
  
//   useEffect(() => {
//     const timerID = setInterval(() => setDate(new Date()), 1000);

//     // The return statement in useEffect is used to specify a cleanup function.
//     // This cleanup function is executed when the component unmounts or 
//     // before the effect runs again if the dependencies have changed. 
//     // It's essential for managing side effects and preventing memory leaks.
//     return () => clearInterval(timerID);
//   }, []);

//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {date.toLocaleTimeString()}.</h2>
//       <p>Current count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// };


// For createPortal (created div with #modal-root in /public/index.html)
// const modalRoot = document.getElementById('modal-root');

// Class component style for createPortal
// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     // 因為我們想要每個 modal 都是獨立分開的
//     // 所以每個 modal 都建立一個自己的 DOM container
//     this.el = document.createElement('div');
//   }

//   componentDidMount() {
//     // 元件 mount 時，將 container 放到 #modal-root 元素中
//     modalRoot.appendChild(this.el);
//   }

//   componentWillUnmount() {
//     // 元件 unmount 時，移除 container
//     modalRoot.removeChild(this.el);
//   }

//   render() {
//     // 運用 Portal 功能，將 React 元素 render 到指定的 DOM element
//     return ReactDOM.createPortal(
//       this.props.children,
//       // 第二個參數指定元件要掛載到這個 DOM element this.el
//       this.el,
//     );
//   }
// }

// Class component style for createPortal
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showModal: false};

//     this.handleShow = this.handleShow.bind(this);
//     this.handleHide = this.handleHide.bind(this);
//   }

//   handleShow() {
//     this.setState({showModal: true});
//   }

//   handleHide() {
//     this.setState({showModal: false});
//   }

//   render() {
//     // 點按鈕來出現 modal
//     const modal = this.state.showModal ? (
//       <Modal>
//         <div className="modal">
//           我是被渲染到 #modal-container 的 modal
//           <button onClick={this.handleHide}>關掉 modal</button>
//         </div>
//       </Modal>
//     ) : null;

//     return (
//       <div className="app">
//         <button onClick={this.handleShow}>打開 modal</button>
//         {modal}
//       </div>
//     );
//   }
// }

// Functional component style for createPortal
// const Modal = ({ children }) => {
//   const el = document.createElement('div');

//   useEffect(() => {
//     // const modalRoot = document.getElementById('modal-root');
//     modalRoot.appendChild(el);
//     // console.log(children);

//     return () => {
//       modalRoot.removeChild(el);
//     };
//   }, [el, children]);

//   return ReactDOM.createPortal( children, el );

//   // If want to exclude the div and directly present the children content under #modal-root
//   // return ReactDOM.createPortal( children, modalRoot );
// };

// Functional component style for createPortal
// const App = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleShow = () => setShowModal(true);
//   const handleHide = () => setShowModal(false);

//   return (
//     <div>
//       <button onClick={handleShow}>Show Modal</button>
//       {showModal && (
//         <Modal>
//           <div className="modal">
//             <p>This is a modal!</p>
//             <button onClick={handleHide}>Close Modal</button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// class component style for using ref
// class CustomTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.focusTextInput = this.focusTextInput.bind(this);
//   }

//   // 按鈕 onClick 事件處理函示
//   focusTextInput() {
//     // this.textInput 指向輸入框 DOM 元素
//     // 執行 focus() DOM API 來聚焦游標
//     this.textInput.focus();
//   }

//   render() {
//     // 用 ref callback function 將輸入框的參照 (reference) 存到元件實例的 this.textInput 屬性上
//     return (
//       <div>
//         <input
//           type="text"
//           // In the example, this.textInput is not explicitly defined in the constructor, 
//           // but it is dynamically assigned using a ref callback function. 
//           // React handles this assignment during the rendering process.
//           ref={(input) => { this.textInput = input; }} />
//         <br /><br />
//         <input
//           type="button"
//           value="點我 focus 輸入欄位"
//           onClick={this.focusTextInput}
//         />
//       </div>
//     );
//   }
// }

// class component style for using ref
// class App extends React.Component {
//   // 當元件掛載到 DOM 時
//   // 執行 CustomTextInput 元件的 focusTextInput() 方法 focus 欄位
//   componentDidMount() {
//     this.textInput.focusTextInput();
//   }

//   render() {
//     // 將 CustomTextInput 元件的 reference 存到 this.textInput
//     return (
//       <CustomTextInput
//         ref={(input) => { this.textInput = input; }} />
//     );
//   }
// }


// functional component style for using ref
// function App() {
//   const textInput = useRef(null);

//   const focusTextInput = () => {
//     if (textInput.current) {
//       textInput.current.focus();
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         ref={textInput}
//       />
//       <br /><br />
//       <input
//         type="button"
//         value="點我 focus 輸入欄位"
//         onClick={focusTextInput}
//       />
//     </div>
//   );
// }



export default App;

// import logo from './logo.svg';
// import './App.css';
// import './index.css';
import Main from './Main.jsx';
// import AboutUs from './components/AboutUs.jsx'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Main />
    </BrowserRouter>
  );
}

export default App;

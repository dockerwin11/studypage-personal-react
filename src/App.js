// import logo from './logo.svg';
// import './App.css';
<<<<<<< HEAD
=======
// import './index.css';
>>>>>>> 6e21f047b9379e9e81a7a6ac8e60194126608061
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

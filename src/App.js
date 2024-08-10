// import logo from './logo.svg';
import './style/App.css';
import Login from "./pages/Login";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;

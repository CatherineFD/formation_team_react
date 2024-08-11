import './style/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {useContext, useEffect} from "react";
import {UserContext} from "./context/UserContext";

function App() {
    const {isAuth, getUsername, getPassword, login} = useContext(UserContext);

    useEffect(() => {
        if (isAuth) {
            login(getUsername, getPassword);
        }
    }, [isAuth, getUsername, getPassword ]);

  return (
    <div className="App">

            <Navbar/>
            <AppRouter/>

    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserProvider} from "./context/UserContext";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <UserProvider>
              <App />
          </UserProvider>
      </BrowserRouter>
  </React.StrictMode>
);
// reportWebVitals();

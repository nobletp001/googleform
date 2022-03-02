import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { StateProvider } from './stateProvider';
import reducer, { initialState } from './reducer';
ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
    
    
      <StateProvider initialState={initialState}
        reducer={reducer}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


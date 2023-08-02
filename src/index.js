import React from 'react';
import { hydrate, render } from "react-dom";
import './index.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import {BrowserRouter as Route } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route>
      <App/>
    </Route>
  </React.StrictMode>
);

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <Route>
//       <App />
//     </Route>
  
//   , rootElement);
// } else {
//   render(<Route>
//     <App />
//   </Route>, rootElement);
// }
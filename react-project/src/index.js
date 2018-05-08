import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import { BrowserRouter as Router } from "react-router-dom";

import registerServiceWorker from './registerServiceWorker';
/** Importing boostrap **/
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router>
    <App />
</Router>, document.getElementById('root'));
registerServiceWorker();

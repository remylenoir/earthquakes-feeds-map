import React from 'react';
import ReactDOM from 'react-dom';

// App components
import App from './App';

// App store
import Store from './Store';

// App style
import './stylesheets/main.scss';

// App services
import * as serviceWorker from './services/serviceWorker';

const Index = () => (
  <Store>
    <App />
  </Store>
);

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

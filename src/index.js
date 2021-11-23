import { createElement as r } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(r(App, null), document.getElementById('root'));
registerServiceWorker();

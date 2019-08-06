import React from 'react';
import ReactDOM from 'react-dom';
import App from './page';
import * as serviceWorker from './serviceWorker';
import './asset/style/style.less'; 
import './asset/iconfont/iconfont.css';
import './asset/iconfont/iconfont.js';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 大哥啊， 你这目录结构看得我老头想哭
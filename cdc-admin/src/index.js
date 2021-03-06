import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Livro from './Livros';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
     <Router>
			<Switch>
				<Route exact path="/" component={App}/>
				<Route path="/livro" component={Livro}/>
				<Route path="/home" component={Home}/>
			</Switch>
	  </Router>,
     document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

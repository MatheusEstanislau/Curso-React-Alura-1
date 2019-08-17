import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import { Link } from 'react-router-dom';
import LivroBox from './Livro';

class Livro extends Component {
	render() {
		return (
			<div id="layout">
				<a href="#menu" id="menuLink" className="menu-link">
					<span></span>
				</a>
				<div id="menu">
					<div className="pure-menu">
						<a className="pure-menu-heading" href="/">Company</a>
						<ul className="pure-menu-list">
							<Link to="/home" className="pure-menu-link">
								<li className="pure-menu-item">Home</li>
							</Link>
							<Link to="/" className="pure-menu-link">
								<li className="pure-menu-item">Autor</li>
							</Link>
							<Link to="/livro" className="pure-menu-link">
								<li className="pure-menu-item">Livro</li>
							</Link>
						</ul>
					</div>
				</div>
				<div id="main">
					<div className="content" id="content">
						<LivroBox/>
					</div>
				</div>
			</div>
		);
	}
}

export default Livro;

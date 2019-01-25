import * as React from 'react';
import Logo from '../img/logo-white.svg';
import './NavBar.scss';

class NavBar extends React.Component {
	public render() {
		return (
			<div className="Navbar-container">
				<div className="Navbar">
					<div className="Navbar-logo">
						<img src={Logo} alt="Logo company" className="Navbar-logo-img"/>
					</div>
					<nav>
						<ul className="Navbar-menu">
							<li className="Navbar-menu-item">Projects</li>
							<li className="Navbar-menu-item">My Tasks</li>
							<li className="Navbar-menu-item">Sign in</li>
							<li className="Navbar-menu-item">Sign Out</li>
							<li className="Navbar-menu-item outstandingColor">Registration</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default NavBar;

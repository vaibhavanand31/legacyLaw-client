import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Footer, LeftSidenav, RightSidenav } from './Components/Common';
import Logo from './logo_transparent.png';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header logo={Logo} />
				<LeftSidenav />
				<RightSidenav />
				<Footer />
			</Fragment>
		);
	}
}

export default App;

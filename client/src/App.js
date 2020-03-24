import React, { Component } from 'react';
import './App.css';
import Logo from './logo_transparent.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/ServiceAddress';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Common/Header/Header';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact>
						<Header logo={Logo} />
						<Home />
					</Route>
					<Route path="/about-us" exact>
						<Header logo={Logo} />
						<AboutUs />
					</Route>
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;

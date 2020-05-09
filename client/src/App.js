import React, { Component } from 'react';
import './App.css';
import Logo from './logo_transparent.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
	Home,
	AboutUs,
	NotFound,
	Header,
	Footer,
	News,
	Events,
	Articles,
	ClientTools,
	EmploymentApplication,
	Advocates,
	Advocate,
	Expertise
} from './Components';

class App extends Component {
	render() {
		return (
			<Router>
				<Header logo={Logo} />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/about-us" exact>
						<AboutUs />
					</Route>
					<Route path="/bulletin/news" exact>
						<News />
					</Route>
					<Route path="/bulletin/news/:heading" exact>
						<News />
					</Route>
					<Route path="/bulletin/events" exact>
						<Events />
					</Route>
					<Route path="/bulletin/articles" exact>
						<Articles />
					</Route>
					<Route path="/bulletin/articles/:title" exact>
						<Articles />
					</Route>
					<Route path="/client-tools" exact>
						<ClientTools />
					</Route>
					<Route path="/hr/career" exact>
						<EmploymentApplication />
					</Route>
					<Route path="/advocates" exact>
						<Advocates />
					</Route>
					<Route path="/advocate/:name" exact>
						<Advocate />
					</Route>
					<Route path="/expertise" exact>
						<Expertise />
					</Route>
					<Route path="*" component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;

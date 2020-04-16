import React, { Component } from 'react';
import './App.css';
import Logo from './logo_transparent.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
	Home,
	ServiceAddress,
	NotFound,
	Header,
	Footer,
	News,
	Events,
	Articles,
	Appointment,
	ContactUs,
	Testimonial,
	EmploymentApplication,
	Advocates,
	Advocate,
	PracticingArea
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
						<ServiceAddress />
					</Route>
					<Route path="/bulletin/news" exact>
						<News />
					</Route>
					<Route path="/bulletin/events" exact>
						<Events />
					</Route>
					<Route path="/bulletin/articles" exact>
						<Articles />
					</Route>
					<Route path="/client/appointment" exact>
						<Appointment />
					</Route>
					<Route path="/client/contact-us" exact>
						<ContactUs />
					</Route>
					<Route path="/client/testimonial" exact>
						<Testimonial />
					</Route>
					<Route path="/hr/employment-application" exact>
						<EmploymentApplication />
					</Route>
					<Route path="/advocates" exact>
						<Advocates />
					</Route>
					<Route path="/advocate/:name" exact>
						<Advocate />
					</Route>
					<Route path="/practicing-area" exact>
						<PracticingArea />
					</Route>
					<Route path="*" component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;

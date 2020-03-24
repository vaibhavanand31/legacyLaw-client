import React, { Component } from 'react';
import './App.css';
import Logo from './logo_transparent.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
	Home,
	ServiceAddress,
	NotFound,
	Header,
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
				<Switch>
					<Route path="/" exact>
						<Header logo={Logo} />
						<Home />
					</Route>
					<Route path="/about-us" exact>
						<Header logo={Logo} />
						<ServiceAddress />
					</Route>
					<Route path="/bulletin/news" exact>
						<Header logo={Logo} />
						<News />
					</Route>
					<Route path="/bulletin/events" exact>
						<Header logo={Logo} />
						<Events />
					</Route>
					<Route path="/bulletin/articles" exact>
						<Header logo={Logo} />
						<Articles />
					</Route>
					<Route path="/client/appointment" exact>
						<Header logo={Logo} />
						<Appointment />
					</Route>
					<Route path="/client/contact-us" exact>
						<Header logo={Logo} />
						<ContactUs />
					</Route>
					<Route path="/client/testimonial" exact>
						<Header logo={Logo} />
						<Testimonial />
					</Route>
					<Route path="/hr/employment-application" exact>
						<Header logo={Logo} />
						<EmploymentApplication />
					</Route>
					<Route path="/advocates" exact>
						<Header logo={Logo} />
						<Advocates />
					</Route>
					<Route path="/advocate/:name" exact>
						<Header logo={Logo} />
						<Advocate />
					</Route>
					<Route path="/practicing-area" exact>
						<Header logo={Logo} />
						<PracticingArea />
					</Route>
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;

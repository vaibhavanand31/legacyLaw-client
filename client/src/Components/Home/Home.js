import React from 'react';
import { Hidden } from '@material-ui/core';

import ArticleMainSmDown from './ArticleMainSmDown';
import ArticleMainSmUp from './ArticleMainSmUp';
import People from './People';
import LatestNews from './LatestNews';
import ContactUs from './ContactUs';
import LatestArticles from './LatestArticles';
import Career from './Career';

function Home() {
	return (
		<div>
			<Hidden smDown>
				<ArticleMainSmDown />
				<People />
				<LatestNews />
				<ContactUs />
				<LatestArticles />
				<Career />
			</Hidden>
			<Hidden mdUp>
				<ArticleMainSmUp />
				<People />
				<LatestNews />
				<ContactUs />
				<LatestArticles />
				<Career />
			</Hidden>
		</div>
	);
}

export default Home;

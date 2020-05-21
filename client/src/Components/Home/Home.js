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
			<Hidden mdDown>
				<ArticleMainSmDown />
			</Hidden>
			<Hidden lgUp>
				<ArticleMainSmUp />
			</Hidden>
			<People />
			<LatestNews />
			<ContactUs />
			<LatestArticles />
			<Career />
		</div>
	);
}

export default Home;

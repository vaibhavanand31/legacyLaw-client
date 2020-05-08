import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './bulletin.module.css';
import NewsCard from './NewsCard';
import NewsSelected from './NewsSelected';

function News() {
	const news = [ 1, 2, 3, 4, 5, 6, 7 ];
	return (
		<div>
			<NewsSelected />
			<div className={styles.moreCards}>
				<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
					{news.map((news) => (
						<Grid item key={news}>
							<NewsCard />
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default News;

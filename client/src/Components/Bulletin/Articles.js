import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './bulletin.module.css';
import ArticleCard from './ArticleCard';
import ArticleSelected from './ArticleSelected';

function Articles() {
	const news = [ 1, 2, 3, 4, 5, 6, 7 ];
	return (
		<div>
			<ArticleSelected />
			<div className={styles.moreCards}>
				<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
					{news.map((news) => (
						<Grid item key={news}>
							<ArticleCard />
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default Articles;

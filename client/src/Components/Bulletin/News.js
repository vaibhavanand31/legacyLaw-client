import React, { useState, useEffect, useMemo, useContext } from 'react';
import { Grid } from '@material-ui/core';
import styles from './bulletin.module.css';
import NewsCard from './NewsCard';
import NewsSelected from './NewsSelected';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
import { BackendUrl } from '../../App';

function News() {
	const baseUrl = useContext(BackendUrl);
	const [ news, setNews ] = useState([]);
	const match = useRouteMatch();
	const heading = match.params.heading;

	useEffect(
		() => {
			axios
				.get(`${baseUrl}/bulletin/news/`)
				.then((res) => {
					if (res.status === 200) {
						setNews(res.data.results);
					} else {
						console.log('data fetch error');
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		[ baseUrl ]
	);

	const allNews = useMemo(
		() => {
			return news;
		},
		[ news ]
	);

	return (
		<div>
			<NewsSelected heading={heading} />
			<div className={styles.moreCards}>
				<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
					{allNews.map((latestNews) => (
						<Grid xs={12} sm={6} align="center" item key={latestNews.id}>
							<NewsCard latestNews={latestNews} />
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default News;

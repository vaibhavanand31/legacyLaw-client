import React, { useState, useEffect, useMemo, useContext } from 'react';
import { Grid } from '@material-ui/core';
import styles from './bulletin.module.css';
import ArticleCard from './ArticleCard';
import ArticleSelected from './ArticleSelected';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
import { BackendUrl } from '../../App';

function Articles() {
	const baseUrl = useContext(BackendUrl);
	const [ article, setArticle ] = useState([]);
	const match = useRouteMatch();
	const title = match.params.title;

	useEffect(
		() => {
			axios
				.get(`${baseUrl}/bulletin/article/`)
				.then((res) => {
					if (res.status === 200) {
						setArticle(res.data.results);
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

	const allArticle = useMemo(
		() => {
			return article;
		},
		[ article ]
	);
	return (
		<div>
			<ArticleSelected title={title} />
			<div className={styles.moreCards}>
				<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
					{allArticle.map((article) => (
						<Grid item key={article.id}>
							<ArticleCard article={article} />
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
}

export default Articles;

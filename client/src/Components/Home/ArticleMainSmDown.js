import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import styles from './home.module.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ArticleMainSmDown() {
	const history = useHistory();
	const [ mainArticle, setMainArticle ] = useState({});

	useEffect(() => {
		axios
			.get('http://127.0.0.1:8000/bulletin/news/?page=1&page_size=1')
			.then((res) => {
				if (res.status === 200) {
					setMainArticle(res.data.results[0]);
				} else {
					console.log('error geting data from sever.');
				}
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<Grid className={styles.mainArticle} container direction="row" justify="center" alignItems="center">
			<Grid container className={styles.content} direction="column">
				<Grid item className={styles.contentHeading}>
					<Typography variant="h2">{mainArticle.heading ? mainArticle.heading : ''}</Typography>
				</Grid>
				<Grid item className={styles.contentSubHeading}>
					<Typography variant="h5">{mainArticle.sub_heading ? mainArticle.sub_heading : ''}</Typography>
				</Grid>
				<Grid item container className={styles.contentDescription}>
					<Typography variant="subtitle1">
						{mainArticle.content ? `${mainArticle.content.substring(0, 250)}...` : ''}
					</Typography>
				</Grid>
				<Grid item className={styles.exporeButton}>
					<Button
						variant="outlined"
						color="primary"
						onClick={() => history.push(`bulletin/news/${mainArticle.heading ? mainArticle.heading : ''}`)}
					>
						Explore More
					</Button>
				</Grid>
			</Grid>
			<Grid item>
				<img
					className={styles.image}
					alt="Main Article"
					src={mainArticle.news_image ? mainArticle.news_image : ''}
				/>
			</Grid>
		</Grid>
	);
}

export default ArticleMainSmDown;

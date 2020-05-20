import React, { useState, useEffect, useContext } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import styles from './home.module.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BackendUrl } from '../../App';

function ArticleMainSmUp() {
	const baseUrl = useContext(BackendUrl);
	const history = useHistory();
	const [ mainArticle, setMainArticle ] = useState({});

	useEffect(
		() => {
			axios
				.get(`${baseUrl}/bulletin/news/?page=1&page_size=1`)
				.then((res) => {
					if (res.status === 200) {
						setMainArticle(res.data.results[0]);
					} else {
						console.log('error geting data from sever.');
					}
				})
				.catch((error) => console.log(error));
		},
		[ baseUrl ]
	);
	return (
		<Grid
			className={styles.mainArticle}
			style={{
				backgroundImage: `url(${mainArticle.news_image ? mainArticle.news_image : ''})`
			}}
			container
			direction="row"
			justify="center"
			alignItems="center"
		>
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
						variant="contained"
						color="default"
						onClick={() => history.push(`bulletin/news/${mainArticle.heading ? mainArticle.heading : ''}`)}
					>
						Explore More
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default ArticleMainSmUp;

import React, { useState, useEffect, useContext } from 'react';
import {
	Container,
	Button,
	// TextField,
	Grid,
	Typography,
	makeStyles,
	Hidden,
	IconButton,
	Tooltip
} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import styles from './home.module.css';
import { useHistory } from 'react-router-dom';
import ArticleCard from '../Bulletin/ArticleCard';
import Axios from 'axios';
import { BackendUrl } from '../../App';

const useStyles = makeStyles(() => ({
	latesNewsGridContainer: { padding: '20px 0px' },
	latesNewsGridItem: { padding: '10px 0px' },
	latestCard: { maxWidth: 345 },
	latestCardMedia: { height: 140 }
}));

function LatestArticles() {
	const baseUrl = useContext(BackendUrl);
	const classes = useStyles();
	const [ articles, setArticles ] = useState([]);
	const history = useHistory();

	useEffect(
		() => {
			Axios.get(`${baseUrl}/bulletin/article/?page=1&&page_size=4`)
				.then((response) => {
					if (response.status === 200) {
						setArticles(response.data.results);
					} else {
						console.log('fetch data error');
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		[ baseUrl ]
	);

	return (
		<Container className={styles.latestNews}>
			<Typography variant="h4">
				Latest Articles
				<Hidden smUp>
					<Tooltip title="Browse all news">
						<IconButton
							aria-label="All"
							fontSize="inherit"
							onClick={() => {
								history.push('/bulletin/articles');
							}}
						>
							<ArrowRightAltIcon />
						</IconButton>
					</Tooltip>
				</Hidden>
			</Typography>
			<Grid
				className={classes.latesNewsGridContainer}
				container
				direcction="row"
				justify="space-around"
				alignItems="center"
			>
				<Grid className={classes.latesNewsGridItem} item>
					{/* <TextField id="outlined-search" label="Search field" type="search" variant="outlined" /> */}
				</Grid>
				<Hidden xsDown>
					<Grid className={classes.latesNewsGridItem} item>
						<Button
							color="primary"
							onClick={() => {
								history.push('/bulletin/articles');
							}}
						>
							<Typography variant="button" display="block">
								Browse all Articles
							</Typography>
							<ArrowRightAltIcon />
						</Button>
					</Grid>
				</Hidden>
			</Grid>
			<div className={styles.latestNewsCards}>
				<Grid container justifu="center" spacing={3}>
					{articles.map((article) => (
						<Grid xs={12} sm={6} align="center" item key={article.id}>
							<ArticleCard article={article} />
						</Grid>
					))}
				</Grid>
			</div>
		</Container>
	);
}

export default LatestArticles;

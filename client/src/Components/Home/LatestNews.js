import React, { useState, useEffect, useContext } from 'react';
import {
	Container,
	Button,
	TextField,
	Grid,
	Typography,
	makeStyles,
	Hidden,
	IconButton,
	Tooltip
} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import NewsCard from '../Bulletin/NewsCard';
import styles from './home.module.css';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { BackendUrl } from '../../App';

const useStyles = makeStyles(() => ({
	latesNewsGridContainer: { padding: '20px 0px' },
	latesNewsGridItem: { padding: '10px 0px' },
	latestCard: { maxWidth: 345 },
	latestCardMedia: { height: 140 }
}));

function LatestNews() {
	const baseUrl = useContext(BackendUrl);
	const classes = useStyles();
	const history = useHistory();
	const [ news, setNews ] = useState([]);

	useEffect(
		() => {
			Axios.get(`${baseUrl}/bulletin/news/?page=1&&page_size=4`)
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

	return (
		<Container className={styles.latestNews}>
			<Typography variant="h4">
				Latest News
				<Hidden smUp>
					<Tooltip title="Browse all news">
						<IconButton
							aria-label="All"
							fontSize="inherit"
							onClick={() => {
								history.push('/bulletin/news');
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
								history.push('/bulletin/news');
							}}
						>
							<Typography variant="button" display="block">
								Browse all News
							</Typography>
							<ArrowRightAltIcon />
						</Button>
					</Grid>
				</Hidden>
			</Grid>
			<div className={styles.latestNewsCards}>
				<Grid container justifu="center" spacing={3}>
					{news.map((latestNews) => (
						<Grid xs={12} sm={6} align="center" item key={latestNews.id}>
							<NewsCard latestNews={latestNews} />
						</Grid>
					))}
				</Grid>
			</div>
		</Container>
	);
}

export default LatestNews;

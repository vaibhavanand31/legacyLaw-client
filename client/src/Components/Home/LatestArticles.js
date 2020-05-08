import React from 'react';
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
import styles from './home.module.css';
import { useHistory } from 'react-router-dom';
import ArticleCard from '../Bulletin/ArticleCard';

const useStyles = makeStyles(() => ({
	latesNewsGridContainer: { padding: '20px 0px' },
	latesNewsGridItem: { padding: '10px 0px' },
	latestCard: { maxWidth: 345 },
	latestCardMedia: { height: 140 }
}));

function LatestArticles() {
	const classes = useStyles();
	const latestNews = [ 1, 2, 3, 4 ];
	const history = useHistory();
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
					<TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
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
					{latestNews.map((news) => (
						<Grid xs={12} sm={6} align="center" item key={news}>
							<ArticleCard />
						</Grid>
					))}
				</Grid>
			</div>
		</Container>
	);
}

export default LatestArticles;

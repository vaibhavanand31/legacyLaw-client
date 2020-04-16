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
import LatestCard from './LatestCard';

const useStyles = makeStyles(() => ({
	latesNewsGridContainer: { padding: '20px 0px' },
	latesNewsGridItem: { padding: '10px 0px' },
	latestCard: { maxWidth: 345 },
	latestCardMedia: { height: 140 }
}));

function LatestNews() {
	const classes = useStyles();
	const latestNews = [ 1, 2, 3, 4 ];

	return (
		<Container className={styles.latestNews}>
			<Typography variant="h4">
				Latest News
				<Hidden smUp>
					<Tooltip title="Browse all news">
						<IconButton aria-label="All" fontSize="inherit">
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
						<Button href="#" color="primary">
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
					{latestNews.map((news) => (
						<Grid xs={12} sm={6} align="center" item key={news}>
							<LatestCard />
						</Grid>
					))}
				</Grid>
			</div>
		</Container>
	);
}

export default LatestNews;

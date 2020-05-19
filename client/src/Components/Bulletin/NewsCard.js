import React from 'react';
import {
	Button,
	Card,
	CardActionArea,
	CardMedia,
	Typography,
	CardContent,
	CardActions,
	makeStyles
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	latestCard: { maxWidth: 345 },
	latestCardMedia: { height: 140 }
}));

function NewsCard(latestNews) {
	const classes = useStyles();
	const history = useHistory();
	console.log('News card rendered');
	return (
		<Card className={classes.latestCard}>
			<CardActionArea>
				<CardMedia
					className={classes.latestCardMedia}
					component="img"
					alt={latestNews.latestNews.heading ? latestNews.latestNews.heading : 'Latest News'}
					height="140"
					image={`${latestNews.latestNews.news_image
						? latestNews.latestNews.news_image
						: require('../../images/bulletin-news.jpg')} `}
					title={latestNews.latestNews.heading ? latestNews.latestNews.heading : 'Latest News'}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{latestNews.latestNews.heading ? latestNews.latestNews.heading : ''}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{latestNews.latestNews.sub_heading ? latestNews.latestNews.sub_heading : ''}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					size="small"
					color="primary"
					onClick={() => {
						history.push(
							`/bulletin/news/${latestNews.latestNews.heading ? latestNews.latestNews.heading : ''}`
						);
					}}
				>
					Read More
				</Button>
			</CardActions>
		</Card>
	);
}

export default React.memo(NewsCard);

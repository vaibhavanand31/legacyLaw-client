import React from 'react';
import {
	Button,
	Card,
	CardActionArea,
	CardMedia,
	Typography,
	CardContent,
	CardActions,
	makeStyles,
	Grid
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
	FacebookIcon,
	FacebookShareButton,
	LinkedinShareButton,
	LinkedinIcon,
	WhatsappShareButton,
	WhatsappIcon
} from 'react-share';

const useStyles = makeStyles(() => ({
	latestCard: { maxWidth: 345 },
	latestCardMedia: { height: 140 }
}));

function NewsCard(latestNews) {
	const classes = useStyles();
	const history = useHistory();
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
				<Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
					<Grid item>
						<Button
							size="small"
							color="primary"
							onClick={() => {
								history.push(
									`/bulletin/news/${latestNews.latestNews.heading
										? latestNews.latestNews.heading
										: ''}`
								);
							}}
						>
							Read Full Story
						</Button>
					</Grid>
					<Grid item>
						<FacebookShareButton
							style={{ padding: '0px 5px' }}
							quote={latestNews.latestNews.heading}
							url={`https://thelegacylaw.com/bulletin/news/${latestNews.latestNews.heading}`}
						>
							<FacebookIcon size={30} round={true} />
						</FacebookShareButton>
						<LinkedinShareButton
							style={{ padding: '0px 5px' }}
							title={latestNews.latestNews.heading}
							summary={latestNews.latestNews.sub_heading}
							url={`https://thelegacylaw.com/bulletin/news/${latestNews.latestNews.heading}`}
						>
							<LinkedinIcon size={30} round={true} />
						</LinkedinShareButton>
						<WhatsappShareButton
							style={{ padding: '0px 5px' }}
							title={latestNews.latestNews.heading}
							url={`https://thelegacylaw.com/bulletin/news/${latestNews.latestNews.heading}`}
						>
							<WhatsappIcon size={30} round={true} />
						</WhatsappShareButton>
					</Grid>
				</Grid>
			</CardActions>
		</Card>
	);
}

export default React.memo(NewsCard);

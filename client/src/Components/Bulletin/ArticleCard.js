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

function ArticleCard(article) {
	const classes = useStyles();
	const history = useHistory();
	return (
		<Card className={classes.latestCard}>
			<CardActionArea>
				<CardMedia
					className={classes.latestCardMedia}
					component="img"
					alt={article.article.title ? article.article.title : 'title'}
					height="140"
					image={`${article.article.article_image
						? article.article.article_image
						: require('../../images/bulletin-article.jpg')}`}
					title={article.article.title ? article.article.title : 'title'}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{article.article.title ? article.article.title : ''}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{article.article.writer ? article.article.writer : ''}
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
									`/bulletin/articles/${article.article.title ? article.article.title : ''}`
								);
							}}
						>
							Explore More
						</Button>
					</Grid>
					<Grid item>
						<FacebookShareButton
							style={{ padding: '0px 5px' }}
							quote={article.article.title}
							url={`https://thelegacylaw.com/bulletin/articles/${article.article.title}`}
						>
							<FacebookIcon size={30} round={true} />
						</FacebookShareButton>
						<LinkedinShareButton
							style={{ padding: '0px 5px' }}
							title={article.article.title}
							summary={article.article.title}
							url={`https://thelegacylaw.com/bulletin/articles/${article.article.title}`}
						>
							<LinkedinIcon size={30} round={true} />
						</LinkedinShareButton>
						<WhatsappShareButton
							style={{ padding: '0px 5px' }}
							title={article.article.title}
							url={`https://thelegacylaw.com/bulletin/articles/${article.article.title}`}
						>
							<WhatsappIcon size={30} round={true} />
						</WhatsappShareButton>
					</Grid>
				</Grid>
			</CardActions>
		</Card>
	);
}

export default ArticleCard;

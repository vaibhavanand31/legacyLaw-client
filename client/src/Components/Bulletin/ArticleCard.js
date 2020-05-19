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
				<Button
					size="small"
					color="primary"
					onClick={() => {
						history.push(`/bulletin/articles/${article.article.title ? article.article.title : ''}`);
					}}
				>
					Read More
				</Button>
			</CardActions>
		</Card>
	);
}

export default ArticleCard;

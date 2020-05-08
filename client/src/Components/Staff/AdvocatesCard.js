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

function AdvocatesCard() {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Card className={classes.latestCard}>
			<CardActionArea>
				<CardMedia
					className={classes.latestCardMedia}
					component="img"
					alt="Contemplative Reptile"
					height="140"
					image={require('../../images/bulletin-article.jpg')}
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Lizard
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
						continents except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					size="small"
					color="primary"
					onClick={() => {
						history.push('/advocate/slug-name');
					}}
				>
					View Profile
				</Button>
			</CardActions>
		</Card>
	);
}
export default AdvocatesCard;

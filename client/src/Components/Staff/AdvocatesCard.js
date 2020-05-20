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
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	latestCard: { maxWidth: 345 },
	latestCardMedia: {
		height: '300px'
	}
}));

function AdvocatesCard(people) {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Card className={classes.latestCard}>
			<CardActionArea>
				<CardMedia
					className={classes.latestCardMedia}
					component="img"
					alt="Partner and Associate"
					image={
						people.people.display_picture ? (
							people.people.display_picture
						) : (
							require('../../images/people.png')
						)
					}
					title="Partner and Associate"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{people.people.first_name ? people.people.first_name : ''}{' '}
						{people.people.last_name ? people.people.last_name : ''}
					</Typography>
					<Typography variant="subtitle2" color="textPrimary" style={{ textDecoration: 'uppercase' }}>
						{people.people.designation ? people.people.designation : ''}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{people.people.short_description ? people.people.short_description : ''}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					size="small"
					color="primary"
					onClick={() => {
						history.push(`/advocate/${people.people.slug_field ? people.people.slug_field : ''}`);
					}}
				>
					View Profile <ArrowRightAlt />
				</Button>
			</CardActions>
		</Card>
	);
}
export default AdvocatesCard;

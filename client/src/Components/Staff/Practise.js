import React from 'react';
import {
	ExpansionPanel,
	ExpansionPanelSummary,
	Typography,
	ExpansionPanelDetails,
	Grid,
	Divider,
	makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((props) => ({
	divider: {
		marginTop: '10px',
		marginBottom: '10px'
	},
	practiseExpansionPanel: {
		backgroundColor: 'transparent',
		'&:hover': {
			backgroundColor: '#d6d6d6'
		}
	}
}));

function Practise(practiseArea) {
	const classes = useStyles();
	const specializations = [
		{ id: 1, specialization: practiseArea.practiseArea.specialization_1 },
		{ id: 2, specialization: practiseArea.practiseArea.specialization_2 },
		{ id: 3, specialization: practiseArea.practiseArea.specialization_3 },
		{ id: 4, specialization: practiseArea.practiseArea.specialization_4 },
		{ id: 5, specialization: practiseArea.practiseArea.specialization_5 },
		{ id: 6, specialization: practiseArea.practiseArea.specialization_6 },
		{ id: 7, specialization: practiseArea.practiseArea.specialization_7 },
		{ id: 8, specialization: practiseArea.practiseArea.specialization_8 },
		{ id: 9, specialization: practiseArea.practiseArea.specialization_9 },
		{ id: 10, specialization: practiseArea.practiseArea.specialization_10 }
	];
	return (
		<div>
			<ExpansionPanel>
				<ExpansionPanelSummary
					className={classes.practiseExpansionPanel}
					id="panel1a-header"
					aria-controls="panel1a-content"
				>
					<Typography variant="h6">
						{practiseArea.practiseArea.title ? practiseArea.practiseArea.title : ''}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="body2">
								{practiseArea.practiseArea.discription ? practiseArea.practiseArea.discription : ''}
							</Typography>
						</Grid>
						<Grid item>
							<Divider className={classes.divider} />
						</Grid>
						{specializations.map((e) => (
							<Grid key={e.id} item>
								<Typography variant="caption">{e.specialization}</Typography>
							</Grid>
						))}
					</Grid>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}

export default Practise;

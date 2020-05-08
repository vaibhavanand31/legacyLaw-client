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

function Practise() {
	const classes = useStyles();
	const specialization = [ 1, 3, 2, 4, 6 ];

	return (
		<div>
			<ExpansionPanel>
				<ExpansionPanelSummary
					className={classes.practiseExpansionPanel}
					id="panel1a-header"
					aria-controls="panel1a-content"
				>
					<Typography variant="h6">Header</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Grid container direction="column">
						<Grid item>
							<Typography variant="body2">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
								sit amet blandit leo lobortis eget.
							</Typography>
						</Grid>
						<Grid item>
							<Divider className={classes.divider} />
						</Grid>

						{specialization.map((specialization) => (
							<Grid key={specialization} item>
								<Typography variant="caption">specialization {specialization}</Typography>
							</Grid>
						))}
					</Grid>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}

export default Practise;

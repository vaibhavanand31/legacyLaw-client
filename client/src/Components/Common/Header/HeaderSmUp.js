import React, { useState } from 'react';
import { Toolbar, Grid, Button, Container, Divider, Typography, Box } from '@material-ui/core';
import styles from './header.module.css';

function HeaderSmUp(props) {
	const [ isPracticingArea, setIsPracticingArea ] = useState(false);
	const [ isPartner, setIsPartner ] = useState(false);
	const [ isBulletin, setIsBulletin ] = useState(false);

	const setMenuHoverInitial = () => {
		setIsPracticingArea(false);
		setIsPartner(false);
		setIsBulletin(false);
	};
	const hoverPrcticingArea = () => {
		setMenuHoverInitial();
		setIsPracticingArea(true);
	};
	const hoverPartner = () => {
		setMenuHoverInitial();
		setIsPartner(true);
	};
	const hoverButtetin = () => {
		setMenuHoverInitial();
		setIsBulletin(true);
	};
	return (
		<React.Fragment>
			<Toolbar>
				<Grid direction="row" container justify="center" alignItems="center" spacing={3}>
					<Grid item>
						<Button color="inherit">About TLL</Button>
					</Grid>
					<Grid item>
						<Button color="inherit" onMouseEnter={() => hoverPrcticingArea()}>
							Practice Areas
						</Button>
					</Grid>
					<Grid item>
						<Button color="inherit" onMouseEnter={() => hoverPartner()}>
							Partners
						</Button>
					</Grid>
					<Grid item>
						<img src={props.logo} alt="The Legacy Law" />
					</Grid>
					<Grid item>
						<Button color="inherit" onMouseEnter={() => hoverButtetin()}>
							Bulletin
						</Button>
					</Grid>
					<Grid item>
						<Button color="inherit">Client Tools</Button>
					</Grid>
					<Grid item>
						<Button color="inherit">Contact Us</Button>
					</Grid>
				</Grid>
			</Toolbar>
			<Box className="styles.menuOverride">
				{isPracticingArea && (
					<Container className="style.containerMenuOverride" onMouseLeave={() => setMenuHoverInitial()}>
						<Grid container>
							<Grid item />
						</Grid>
					</Container>
				)}
				{isPartner && (
					<Container onMouseLeave={() => setMenuHoverInitial()}>
						<p />
					</Container>
				)}
				{isBulletin && (
					<Container onMouseLeave={() => setMenuHoverInitial()}>
						<Grid container direction="row" justify="space-evenly" alignItems="stretch">
							<Grid item>
								<Grid container direction="column" justify="space-between" alignItems="center">
									<Grid item>
										<Typography className={styles.bulletinTitle} variant="subtitle1" gutterBottom>
											News
										</Typography>
									</Grid>
									<Divider />
									<Grid item>
										<img
											className={styles.bulletinImg}
											src={require('../../../images/bulletin-news.png')}
											alt="News"
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item>
								<Grid container direction="column" justify="space-between" alignItems="center">
									<Grid item>
										<Typography className={styles.bulletinTitle} variant="subtitle1" gutterBottom>
											Events
										</Typography>
									</Grid>
									<Divider />
									<Grid item>
										<img
											className={styles.bulletinImg}
											src={require('../../../images/bulletin-event.jpg')}
											alt="Events"
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid item>
								<Grid container direction="column" justify="space-between" alignItems="center">
									<Grid item>
										<Typography className={styles.bulletinTitle} variant="subtitle1" gutterBottom>
											Articles
										</Typography>
									</Grid>
									<Divider />
									<Grid item>
										<img
											className={styles.bulletinImg}
											src={require('../../../images/bulletin-article.jpg')}
											alt="Articles"
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Container>
				)}
			</Box>
		</React.Fragment>
	);
}

export default HeaderSmUp;

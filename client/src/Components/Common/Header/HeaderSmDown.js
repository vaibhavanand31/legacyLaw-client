import React, { useState } from 'react';
import { Toolbar, Grid, IconButton, Tooltip, Menu } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HeadsetMicRoundedIcon from '@material-ui/icons/HeadsetMicRounded';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import TopSidenav from './TopSidenav';
import { useHistory } from 'react-router-dom';
// import styles from './header.module.css';

const useStyles = makeStyles((theme) => ({
	customHoverFocus: {
		'&:hover, &.Mui-focusVisible': {
			backgroundColor: theme.palette.action.selected,
			color: theme.palette.common.white
		},
		backgroundColor: theme.palette.background.default,
		color: theme.palette.common.black
	}
}));

const StyledMenu = withStyles({
	paper: {
		backgroundColor: 'transparent'
	}
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center'
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center'
		}}
		{...props}
	/>
));

function HeaderSmDown(props) {
	const history = useHistory();
	const classes = useStyles();
	const [ anchorEl, setAnchorEl ] = useState(null);

	const contactusMenuHandelClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const contactusMenuHandelClose = () => {
		setAnchorEl(null);
	};

	return (
		<React.Fragment>
			<Toolbar>
				<Grid direction="row" container justify="space-between" alignItems="center" spacing={3}>
					<Grid item>
						<TopSidenav />
					</Grid>
					<Grid item>
						<img
							style={{ maxHeight: '70px' }}
							src={props.logo}
							alt="The Legacy Law"
							onClick={() => {
								history.push('/');
							}}
						/>
					</Grid>
					<Grid item>
						<Tooltip title="Contact Us">
							<IconButton
								aria-controls="contactus-menu"
								onClick={contactusMenuHandelClick}
								aria-haspopup="true"
								aria-label="Contact Us"
								color="inherit"
							>
								<MoreVertRoundedIcon />
							</IconButton>
						</Tooltip>
						<StyledMenu
							id="customized-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={contactusMenuHandelClose}
						>
							<Grid container direction="column" justify="space-between" alignItems="center" spacing={1}>
								<Grid item xs>
									<Tooltip title="Contact Us">
										<IconButton
											onClick={() => {
												contactusMenuHandelClose();
												history.push('/client/contact-us');
											}}
											className={classes.customHoverFocus}
										>
											<SendRoundedIcon />
										</IconButton>
									</Tooltip>
								</Grid>
								<Grid item xs>
									<Tooltip title="Call">
										<IconButton
											onClick={() => {
												contactusMenuHandelClose();
											}}
											className={classes.customHoverFocus}
										>
											<HeadsetMicRoundedIcon />
										</IconButton>
									</Tooltip>
								</Grid>
								<Grid item xs>
									<Tooltip title="Appointment">
										<IconButton
											onClick={() => {
												contactusMenuHandelClose();
												history.push('/client/appointment');
											}}
											className={classes.customHoverFocus}
										>
											<CalendarTodayRoundedIcon />
										</IconButton>
									</Tooltip>
								</Grid>
							</Grid>
						</StyledMenu>
					</Grid>
				</Grid>
			</Toolbar>
		</React.Fragment>
	);
}

export default HeaderSmDown;

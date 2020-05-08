import React, { useState } from 'react';
import {
	Tooltip,
	IconButton,
	Drawer,
	Container,
	Grid,
	List,
	ListItem,
	ListItemText,
	Collapse
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {},
	paper: {
		background: '#2c3b50',
		color: 'white',
		width: '100%',
		height: '100vh',
		opacity: '0.9'
	},
	nested: {
		paddingLeft: theme.spacing(4)
	},
	navGrid: {
		marginTop: '30%'
	},
	closeNav: {
		color: theme.palette.common.white,
		width: 70,
		height: 70,
		margin: 50,
		padding: 10
	}
}));

function TopSidenav() {
	const history = useHistory();
	const classes = useStyles();
	const [ state, setState ] = useState({
		top: false
	});
	const [ open, setOpen ] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};
	const closeTopNav = () => {
		setState({
			top: false
		});
	};

	const list = (anchor) => (
		<Container>
			<Grid direction="row" container justify="center" alignItems="center" className={classes.navGrid}>
				<Grid item>
					<Grid direction="column" container justify="space-between" alignItems="flex-start">
						<Grid item>
							<List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
								<ListItem button>
									<ListItemText
										primary="About Us"
										onClick={() => {
											closeTopNav();
											history.push('/about-us');
										}}
									/>
								</ListItem>
								<ListItem button>
									<ListItemText
										primary="Expertise"
										onClick={() => {
											closeTopNav();
											history.push('/expertise');
										}}
									/>
								</ListItem>
								<ListItem button>
									<ListItemText
										primary="People"
										onClick={() => {
											closeTopNav();
											history.push('/advocates');
										}}
									/>
								</ListItem>
								<ListItem button onClick={handleClick}>
									<ListItemText primary="Bulletin" />
									{open ? <ExpandLess /> : <ExpandMore />}
								</ListItem>
								<Collapse in={open} timeout="auto" unmountOnExit>
									<List component="div">
										<ListItem button className={classes.nested}>
											<ListItemText
												primary="News"
												onClick={() => {
													closeTopNav();
													history.push('/bulletin/news');
												}}
											/>
										</ListItem>
										<ListItem button className={classes.nested}>
											<ListItemText
												primary="Articles"
												onClick={() => {
													closeTopNav();
													history.push('/bulletin/articles');
												}}
											/>
										</ListItem>
										{/* <ListItem button className={classes.nested}>
											<ListItemText
												primary="Events"
												onClick={() => {
													closeTopNav();
													history.push('/bulletin/events');
												}}
											/>
										</ListItem> */}
									</List>
								</Collapse>
							</List>
						</Grid>
						<Grid item>
							<Tooltip title="Close">
								<IconButton edge="end" onClick={toggleDrawer('top', false)}>
									<CloseIcon className={classes.closeNav} />
								</IconButton>
							</Tooltip>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);

	return (
		<Tooltip title="Menu">
			<React.Fragment>
				<IconButton aria-label="Menu" color="inherit" onClick={toggleDrawer('top', true)}>
					<MenuIcon />
				</IconButton>
				<Drawer
					classes={{ paper: classes.paper }}
					anchor="top"
					open={state['top']}
					onClose={toggleDrawer('top', false)}
				>
					{list('top')}
				</Drawer>
			</React.Fragment>
		</Tooltip>
	);
}

export default TopSidenav;

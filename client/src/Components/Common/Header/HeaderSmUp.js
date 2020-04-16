import React, { useState, useRef } from 'react';
import { Toolbar, Grid, Button, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import styles from './header.module.css';

function HeaderSmUp(props) {
	const [ open, setOpen ] = useState(false);
	const anchorRef = useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(
		() => {
			if (prevOpen.current === true && open === false) {
				anchorRef.current.focus();
			}
			prevOpen.current = open;
		},
		[ open ]
	);

	return (
		<React.Fragment>
			<Toolbar>
				<Grid direction="row" container justify="center" alignItems="center" spacing={3}>
					<Grid item>
						<Button color="inherit">About Us</Button>
					</Grid>
					<Grid item>
						<Button color="inherit">Expertise</Button>
					</Grid>
					<Grid item>
						<Button color="inherit">People</Button>
					</Grid>
					<Grid item>
						<img src={props.logo} alt="The Legacy Law" />
					</Grid>
					<Grid item>
						<Button
							color="inherit"
							ref={anchorRef}
							aria-controls={open ? 'menu-list-grow' : undefined}
							aria-haspopup="true"
							onClick={handleToggle}
						>
							Bulletin
							{open ? <ExpandLess /> : <ExpandMore />}
						</Button>
						<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
							{({ TransitionProps, placement }) => (
								<Grow
									{...TransitionProps}
									style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
								>
									<Paper>
										<ClickAwayListener onClickAway={handleClose}>
											<MenuList
												autoFocusItem={open}
												id="menu-list-grow"
												onKeyDown={handleListKeyDown}
											>
												<MenuItem onClick={handleClose}>News</MenuItem>
												<MenuItem onClick={handleClose}>Events</MenuItem>
												<MenuItem onClick={handleClose}>Articles</MenuItem>
											</MenuList>
										</ClickAwayListener>
									</Paper>
								</Grow>
							)}
						</Popper>
					</Grid>
					<Grid item>
						<Button color="inherit">Client Tools</Button>
					</Grid>
					<Grid item>
						<Button color="inherit">Contact Us</Button>
					</Grid>
				</Grid>
			</Toolbar>
		</React.Fragment>
	);
}

export default HeaderSmUp;

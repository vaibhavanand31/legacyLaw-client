import React from 'react';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import styles from './header.module.css';

function Header(props) {
	return (
		<AppBar position="static" className={styles.appBar}>
			<Toolbar>
				<Grid container direction="column" alignItems="center" justify="space-around">
					<Grid item>
						<img src={props.logo} alt="The Legacy Law" />
					</Grid>
					<Grid item>"""Menu Items Goes Here"""</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

export default Header;

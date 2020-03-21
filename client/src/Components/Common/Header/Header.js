import React from 'react';
import { AppBar, Hidden } from '@material-ui/core';
import styles from './header.module.css';
import HeaderSmUp from './HeaderSmUp';
import HeaderSmDown from './HeaderSmDown';

function Header(props) {
	return (
		<AppBar position="static" className={styles.appBar}>
			<Hidden only={[ 'md', 'lg', 'xl' ]}>
				<HeaderSmDown logo={props.logo} />
			</Hidden>
			<Hidden only={[ 'xs', 'sm' ]}>
				<HeaderSmUp logo={props.logo} />
			</Hidden>
		</AppBar>
	);
}

export default Header;

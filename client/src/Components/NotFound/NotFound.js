import React from 'react';
import styles from './NotFound.module.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function NotFound() {
	const history = useHistory();
	return (
		<div className={styles.pageNotFound}>
			<div className={styles.notfound}>
				<div className={styles.notfound404}>
					<h3>Oops! Page not found</h3>
					<h1>
						<span>4</span>
						<span>0</span>
						<span>4</span>
					</h1>
				</div>
				<h2>we are sorry, but the page you requested was not found</h2>
				<h2>
					<Button
						variant="outlined"
						onClick={() => {
							history.goBack();
						}}
					>
						Go Back
					</Button>
				</h2>
			</div>
		</div>
	);
}

export default NotFound;

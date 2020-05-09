import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import styles from './home.module.css';
import { useHistory } from 'react-router-dom';

function ArticleMainSmUp() {
	const history = useHistory();
	return (
		<Grid className={styles.mainArticle} container direction="row" justify="center" alignItems="center">
			<Grid container className={styles.content} direction="column">
				<Grid item className={styles.contentHeading}>
					<Typography variant="h2">Lorem Ipsum</Typography>
				</Grid>
				<Grid item className={styles.contentSubHeading}>
					<Typography variant="h5">Lorem ipsum dolor sit amet.</Typography>
				</Grid>
				<Grid item container className={styles.contentDescription}>
					<Typography variant="subtitle1">
						Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
						Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
						Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
					</Typography>
				</Grid>
				<Grid item className={styles.exporeButton}>
					<Button
						variant="contained"
						color="primary"
						onClick={() => history.push('/bulletin/news/main-article')}
					>
						Explore More
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default ArticleMainSmUp;

import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@material-ui/core';
import styles from './bulletin.module.css';
import axios from 'axios';

function ArticleSelected(title) {
	const [ mainArticle, setMainArticle ] = useState({});

	useEffect(
		() => {
			let url = '';
			window.scrollTo({
				top: 1,
				left: 0,
				behavior: 'smooth'
			});
			if (title.title) {
				url = `http://127.0.0.1:8000/bulletin/article/${title.title}`;
				axios
					.get(url)
					.then((response) => {
						setMainArticle(response.data);
					})
					.catch((error) => {
						console.log(error);
					});
			} else {
				url = 'http://127.0.0.1:8000/bulletin/article/?page=1&page_size=1';
				axios
					.get(url)
					.then((response) => {
						setMainArticle(response.data.results[0]);
					})
					.catch((error) => {
						console.log(error);
					});
			}
		},
		[ title ]
	);
	return (
		<div>
			<div className={styles.background}>
				<img
					className={styles.banner}
					src={
						mainArticle.article_image ? (
							mainArticle.article_image
						) : (
							require('../../images/bulletin-article.jpg')
						)
					}
					alt="background"
				/>
			</div>
			<div className={styles.upperLayout}>
				<Paper elevation={3} className={styles.upperLayoutPaper}>
					<div className={styles.headingConatiner}>
						<Typography variant="h4">{mainArticle.title ? mainArticle.title : ''}</Typography>
					</div>
					<div className={styles.subHeadingConatiner}>
						<Typography variant="body1">Writer - {mainArticle.writer ? mainArticle.writer : ''}</Typography>
					</div>
					<div className={styles.decsriptionContainer}>
						<Typography variant="body2">{mainArticle.content ? mainArticle.content : ''}</Typography>
					</div>
				</Paper>
			</div>
		</div>
	);
}

export default ArticleSelected;

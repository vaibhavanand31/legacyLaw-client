import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@material-ui/core';
import styles from './bulletin.module.css';
import axios from 'axios';

function NewsSelected(heading) {
	const [ mainNews, setMainNews ] = useState({});

	useEffect(
		() => {
			let url = '';
			window.scrollTo({
				top: 1,
				left: 0,
				behavior: 'smooth'
			});
			if (heading.heading) {
				url = `http://127.0.0.1:8000/bulletin/news/${heading.heading}`;
				axios
					.get(url)
					.then((response) => {
						setMainNews(response.data);
					})
					.catch((error) => {
						console.log(error);
					});
			} else {
				url = 'http://127.0.0.1:8000/bulletin/news/?page=1&page_size=1';
				axios
					.get(url)
					.then((response) => {
						setMainNews(response.data.results[0]);
					})
					.catch((error) => {
						console.log(error);
					});
			}
		},
		[ heading ]
	);
	console.log('selected News rendered');
	return (
		<div>
			<div className={styles.background}>
				<img
					className={styles.banner}
					src={mainNews.news_image ? mainNews.news_image : require('../../images/bulletin-news.jpg')}
					alt="background"
				/>
			</div>
			<div className={styles.upperLayout}>
				<Paper elevation={3} className={styles.upperLayoutPaper}>
					<div className={styles.headingConatiner}>
						<Typography variant="h4">{mainNews.heading ? mainNews.heading : ''}</Typography>
					</div>
					<div className={styles.subHeadingConatiner}>
						<Typography variant="h6">{mainNews.sub_heading ? mainNews.sub_heading : ''}</Typography>
					</div>
					<div className={styles.decsriptionContainer}>
						<Typography variant="body2">{mainNews.content ? mainNews.content : ''}</Typography>
					</div>
					<div className={styles.sourceContainer}>
						<Typography variant="caption">Source - {mainNews.source ? mainNews.source : ''}</Typography>
					</div>
					<div className={styles.publisherContainer}>
						<Typography variant="caption">
							Published By - {mainNews.publisher ? mainNews.publisher : ''}
						</Typography>
					</div>
				</Paper>
			</div>
		</div>
	);
}

export default React.memo(NewsSelected);

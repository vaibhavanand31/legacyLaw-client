import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import styles from './bulletin.module.css';

function ArticleSelected() {
	return (
		<div>
			<div className={styles.background}>
				<img className={styles.banner} src={require('../../images/aboutus.jpg')} alt="background" />
			</div>
			<div className={styles.upperLayout}>
				<Paper elevation={3} className={styles.upperLayoutPaper}>
					<div className={styles.headingConatiner}>
						<Typography variant="h4">article title</Typography>
					</div>
					<div className={styles.subHeadingConatiner}>
						<Typography variant="body1">- writer</Typography>
					</div>
					<div className={styles.decsriptionContainer}>
						<Typography variant="body2">
							content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate est at
							eleifend posuere. Pellentesque facilisis viverra efficitur. Mauris ipsum ex, volutpat id
							massa vitae, gravida pharetra ex. Mauris dolor magna, pellentesque eget sollicitudin vel,
							pulvinar a libero. Proin congue bibendum ligula. Vivamus tincidunt gravida justo eu
							imperdiet. Sed lobortis sapien et lectus placerat volutpat. Vivamus facilisis nec purus at
							consequat. Vivamus venenatis et nibh sed pharetra. Integer tempus magna at dictum mollis. Ut
							sed erat fermentum sem luctus suscipit. Donec non arcu consectetur, rhoncus nunc vel,
							laoreet dui. Pellentesque molestie ligula sit amet lacus condimentum ornare. Sed dapibus
							massa lacus. Fusce pulvinar quam ut enim consectetur, sed auctor lectus molestie. Nullam
							vehicula risus ac dolor fermentum, eget eleifend massa maximus. Nullam mollis id tellus sed
							pellentesque. Suspendisse non luctus felis. Aenean laoreet sodales elit at lacinia. Nulla
							quis diam lacus. Ut sit amet magna eu mi efficitur tristique vel eu diam. Phasellus sed nunc
							ac augue rutrum mattis. Nam ante eros, vestibulum quis turpis quis, porta tincidunt odio.
							Fusce libero lacus, faucibus ac lacinia ut, pulvinar sit amet turpis. Cras porta odio eget
							dolor pulvinar vestibulum. Praesent sodales tincidunt enim, vel rhoncus ante molestie sit
							amet. Maecenas lorem tortor, malesuada nec efficitur sed, dignissim ut nunc. Aliquam
							convallis lacus lectus, ac condimentum velit vehicula non. Curabitur sem nisl, posuere eu
							mattis ac, ultrices ut metus. Pellentesque eu sapien vel orci facilisis dictum. Mauris
							fermentum mauris at ex viverra malesuada. Morbi bibendum pharetra purus, in facilisis ligula
							faucibus et. Quisque nec auctor mauris. Donec fringilla dapibus ante, a venenatis lorem
							iaculis ac. Etiam sit amet ultrices urna. Curabitur nec lectus tempor lectus pretium ornare.
							Proin lacinia vestibulum tellus, at ornare sem placerat ut. Maecenas in arcu sed eros
							gravida aliquet vel sit amet sem. Sed sagittis nisi ac sem vestibulum gravida. Praesent eget
							nisi quis leo condimentum hendrerit at eu lacus. Vivamus porttitor, odio eget porttitor
							bibendum, purus mi tincidunt lorem, quis fermentum ligula sapien suscipit massa. Etiam
							facilisis libero et velit pharetra, a vestibulum velit commodo. Nulla facilisi. Suspendisse
							potenti. Aenean hendrerit tellus et mi vestibulum, sed sollicitudin velit auctor. Fusce eu
							mauris sed sem cursus aliquam. Vivamus tincidunt efficitur convallis. Mauris ultrices augue
							at lectus dictum, sit amet tincidunt lacus condimentum. Morbi vel molestie velit, vitae
							pulvinar augue. Proin lectus dui, egestas non fermentum id, euismod nec orci. Vivamus eu
							dolor vestibulum, pellentesque risus eu, maximus sapien. Cras lobortis ultrices velit, ut
							varius est tempor eu. Etiam eu mattis massa. Proin maximus justo consectetur commodo
							faucibus. Donec et condimentum lorem. Vivamus mauris leo, tincidunt pellentesque nibh a,
							mollis lacinia nisi. Nullam tempor eu mauris sit amet dictum. Mauris ac tellus sed felis
							consectetur ornare. Aliquam finibus ultricies ornare. Sed at viverra quam. Aliquam vitae
							blandit enim. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient
							montes, nascetur ridiculus mus. Ut id metus eu ante ultrices aliquet. Curabitur faucibus
							ultrices odio, vitae efficitur erat rutrum non. Nunc ornare vel quam eu venenatis. Nunc
							tristique odio vitae eros pellentesque, sit amet porta quam dapibus. Mauris non ipsum ac
							arcu ultrices imperdiet eu at nulla. Donec porta metus et orci fringilla rutrum.
						</Typography>
					</div>
				</Paper>
			</div>
		</div>
	);
}

export default ArticleSelected;

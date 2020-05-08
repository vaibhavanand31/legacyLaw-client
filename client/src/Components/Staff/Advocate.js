import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import style from './staff.module.css';

function Advocate() {
	return (
		<div className={style.advocateMain}>
			<Grid container direction="row" spacing={6}>
				<Grid item container direction="column" sm={6} md={8} spacing={3}>
					<Grid item>
						<div className={style.advocateName}>
							<Typography variant="h4">Frist Lastname</Typography>
						</div>
					</Grid>
					<Grid item>
						<div className={style.advocateDesignation}>
							<Typography variant="subtitle1">Designation</Typography>
						</div>
					</Grid>
					<Grid item>
						<div className={style.advocateCity}>
							<Typography variant="subtitle1">City</Typography>
						</div>
					</Grid>
				</Grid>
				<Grid item container direction="column" sm={6} md={4}>
					<Grid item>
						<div className={style.advocateImage}>
							<img src={require('../../images/bulletin-article.jpg')} alt="first lastname" />
						</div>
					</Grid>
				</Grid>
			</Grid>

			<Grid container direction="row" spacing={6}>
				<Grid item container direction="column" md={8} spacing={3}>
					<Grid item>
						<div className={style.advocateShortDescription}>
							<Typography variant="body1">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas magna ipsum, maximus
								ut pretium a, porttitor sed nunc. Vivamus sollicitudin nisl non nibh tempor hendrerit.
								Pellentesque sagittis ipsum sed imperdiet placerat. Phasellus feugiat ut eros sed
								sodales.
							</Typography>
						</div>
					</Grid>
					<Grid item>
						<div className={style.advocateLongDescription}>
							<Typography variant="body2">
								Etiam dapibus pulvinar mi. Cras faucibus quam vitae lorem hendrerit, id ultricies diam
								mollis. Mauris sagittis ante mi, vel fringilla erat fringilla sed. Nulla rhoncus, odio
								eget rhoncus feugiat, felis tellus sagittis nulla, eu sagittis magna nulla sit amet
								libero. Sed eu enim vitae massa accumsan egestas id facilisis augue. Donec euismod, enim
								non feugiat sagittis, dolor tellus consequat lectus, ut accumsan dolor mi eu ante. Duis
								rutrum, sem a pulvinar vulputate, leo tortor euismod augue, sed imperdiet orci turpis
								quis nisi. Etiam sodales sit amet turpis eget cursus. Nulla ut nisi pharetra, posuere
								tellus et, consectetur diam. Pellentesque a ex vulputate, rutrum ex eu, cursus ex.
								Vivamus enim orci, sagittis vitae iaculis quis, vehicula pharetra nibh. Quisque pretium
								elit in tellus bibendum, sit amet ultricies velit fermentum. In laoreet ac nibh sed
								eleifend. Nam ac rutrum eros, ac vestibulum enim. Aenean dictum risus sed felis dictum
								facilisis. Donec vel consectetur turpis. Etiam est felis, laoreet quis orci quis, varius
								iaculis magna. Donec mattis, massa non feugiat consequat, odio nunc lacinia diam, nec
								accumsan nisl nisl at augue. Etiam tempor felis a accumsan gravida. Aenean lobortis non
								ipsum non scelerisque. Donec rhoncus ante id mi aliquet pretium. Nunc hendrerit sem
								risus, vitae tincidunt magna tempus nec. Mauris vitae libero nec libero mollis consequat
								in eu ipsum. Nullam malesuada lorem non lorem sodales iaculis. Sed non tellus
								consectetur, varius felis vel, molestie turpis. Donec placerat accumsan augue, sed
								dictum risus molestie sit amet. Etiam eget pellentesque enim. Nullam nibh erat, luctus
								quis justo nec, imperdiet lacinia nunc. Aliquam accumsan lacinia purus, eu blandit
								mauris volutpat placerat. Etiam pharetra vulputate mollis. Praesent ut odio consectetur,
								efficitur justo nec, suscipit justo. Duis nec elit venenatis, pretium nibh eu, viverra
								lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
								curae; Etiam rhoncus neque non enim pellentesque bibendum. In feugiat eu dolor at
								bibendum. Nunc mattis euismod lobortis. Suspendisse turpis enim, mattis vitae elit sed,
								consequat consectetur mi. Duis nunc arcu, molestie ut nisl sit amet, scelerisque
								pellentesque leo. Nullam dictum dignissim diam, et congue erat efficitur non. Maecenas
								quis risus commodo, rutrum orci eu, tempus elit.
							</Typography>
						</div>
					</Grid>
				</Grid>
				<Grid item container direction="column" md={4} spacing={6}>
					<Grid item>
						<div className={style.advocateContact}>
							<Typography variant="h6">Contact</Typography>
							<div className={style.advocatePhone}>
								<Typography variant="body1">+91 9191919191</Typography>
							</div>
							<div className={style.advocateEmail}>
								<Typography variant="body1">email@email.com</Typography>
							</div>
							<div className={style.advocateAddress}>
								<Typography variant="body1">street address city state pincode</Typography>
							</div>
						</div>
					</Grid>
					<Grid item>
						<div className={style.advocateBar}>
							<Typography variant="h6">Bar Member</Typography>
							<div className={style.advocateBarCity}>
								<Typography variant="body1">city name</Typography>
							</div>
							<div className={style.advocateBarYear}>
								<Typography variant="body1">Year</Typography>
							</div>
						</div>
					</Grid>
					<Grid item>
						<div className={style.advocateQualification}>
							<Typography variant="h6">Qualifications</Typography>
							<div className={style.advocateLlb}>
								<Typography variant="body1">llb uni name city </Typography>
							</div>
							<div className={style.advocateMbl}>
								<Typography variant="body1">mbl uni name city </Typography>
							</div>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default Advocate;

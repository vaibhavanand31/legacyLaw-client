import React, { useEffect, useState, useRef, useContext } from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import style from './staff.module.css';
import { useRouteMatch, useHistory } from 'react-router-dom';
import axios from 'axios';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { BackendUrl } from '../../App';

function Advocate() {
	const baseUrl = useContext(BackendUrl);
	const match = useRouteMatch();
	const history = useHistory();
	// const partnerNameRef = match.params.name;
	const partnerNameRef = useRef(match.params.name);
	const [ parnerDetails, setPartnerDetails ] = useState({});

	useEffect(
		() => {
			axios
				.get(`${baseUrl}/panda/partner/${partnerNameRef.current}/`)
				.then((response) => {
					setPartnerDetails(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		[ baseUrl ]
	);

	return (
		<div className={style.advocateMain}>
			<Grid container direction="row" spacing={6}>
				<Grid item container direction="column" sm={6} md={8} spacing={3}>
					<Grid item>
						<div className={style.advocateName}>
							<Typography variant="h4">
								<IconButton
									style={{ marginRight: '10px' }}
									onClick={() => {
										history.goBack();
									}}
								>
									<ArrowBackRoundedIcon />
								</IconButton>
								{parnerDetails.first_name ? parnerDetails.first_name : ''}{' '}
								{parnerDetails.last_name ? parnerDetails.last_name : ''}
							</Typography>
						</div>
					</Grid>
					<Grid item>
						<div className={style.advocateDesignation}>
							<Typography variant="subtitle1">
								{parnerDetails.designation ? parnerDetails.designation : ''}
							</Typography>
						</div>
					</Grid>
					<Grid item>
						<div className={style.advocateCity}>
							<Typography variant="subtitle1">{parnerDetails.city ? parnerDetails.city : ''}</Typography>
						</div>
					</Grid>
				</Grid>
				<Grid item container direction="column" sm={6} md={4}>
					<Grid item>
						<div className={style.advocateImage}>
							<img
								src={
									parnerDetails.display_picture ? (
										parnerDetails.display_picture
									) : (
										require('../../images/people.png')
									)
								}
								alt="Partner"
							/>
						</div>
					</Grid>
				</Grid>
			</Grid>

			<Grid container direction="row" spacing={6}>
				<Grid item container direction="column" md={8} spacing={3}>
					<Grid item>
						<div className={style.advocateShortDescription}>
							<Typography variant="body1">
								{parnerDetails.short_description ? parnerDetails.short_description : ''}
							</Typography>
						</div>
					</Grid>
					<Grid item>
						<div className={style.advocateLongDescription}>
							<Typography variant="body2">
								{parnerDetails.long_description ? parnerDetails.long_description : ''}
							</Typography>
						</div>
					</Grid>
				</Grid>
				<Grid item container direction="column" md={4} spacing={6}>
					<Grid item>
						<div className={style.advocateContact}>
							<Typography variant="h6" />
							<div className={style.advocatePhone}>
								<Typography variant="body1">
									{parnerDetails.phone ? parnerDetails.phone : ''}
								</Typography>
							</div>
							<div className={style.advocateEmail}>
								<Typography variant="body1">
									{parnerDetails.email ? parnerDetails.email : ''}
								</Typography>
							</div>
							<div className={style.advocateAddress}>
								<Typography variant="body1">
									{parnerDetails.address ? parnerDetails.address : ''}
								</Typography>
							</div>
						</div>
					</Grid>
					<Grid item>
						<div className={style.advocateBar}>
							<Typography variant="h6">Bar Member</Typography>
							<div className={style.advocateBarCity}>
								<Typography variant="body1">
									{parnerDetails.bar_membership_city ? parnerDetails.bar_membership_city : ''}
								</Typography>
							</div>
							<div className={style.advocateBarYear}>
								<Typography variant="body1">
									{parnerDetails.bar_admition ? parnerDetails.bar_admition : ''}
								</Typography>
							</div>
						</div>
					</Grid>
					<Grid item>
						<div className={style.advocateQualification}>
							<Typography variant="h6">Qualifications</Typography>
							<div className={style.advocateLlb}>
								<Typography variant="body1">
									{parnerDetails.llb_university ? parnerDetails.llb_university : ''},{' '}
									{parnerDetails.llb_city ? parnerDetails.llb_city : ''}
								</Typography>
							</div>
							<div className={style.advocateMbl}>
								<Typography variant="body1">
									{parnerDetails.mbl_university ? parnerDetails.mbl_university : ''},{' '}
									{parnerDetails.mbl_city ? parnerDetails.mbl_city : ''}
								</Typography>
							</div>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default Advocate;

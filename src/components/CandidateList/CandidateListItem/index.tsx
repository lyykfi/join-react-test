/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {
	CardHeader,
	Avatar,
	CardContent,
	Typography,
	IconButton,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Candidate } from 'models/candidate';
import { StyledCard, StyledCardActions } from './styled';

interface CandidateListItemProps {
	candidate: Candidate | null;
}

const CandidateListItem: React.FC<CandidateListItemProps> = (
	props: CandidateListItemProps,
): JSX.Element => {
	const { candidate } = props;

	return (
		<StyledCard variant="outlined">
			<>
				<CardHeader
					avatar={
						candidate ? (
							<Avatar>
								<img src={candidate.avatar} alt="" />
							</Avatar>
						) : (
							<Skeleton
								animation="wave"
								variant="circle"
								width={40}
								height={40}
							/>
						)
					}
					title={
						candidate ? (
							candidate.fullName
						) : (
							<Skeleton animation="wave" variant="text" />
						)
					}
					subheader={
						candidate ? (
							candidate.email
						) : (
							<Skeleton animation="wave" variant="text" />
						)
					}
					action={candidate ? 'test' : null}
				/>
				<CardContent>
					{candidate ? (
						<>
							<Typography
								variant="body2"
								color="textSecondary"
								component="p"
							>
								{candidate?.state}
							</Typography>
							<Typography
								variant="body2"
								color="textSecondary"
								component="p"
							>
								{candidate?.applied_on}
							</Typography>
						</>
					) : (
						<>
							<Skeleton animation="wave" variant="text" />
							<Skeleton animation="wave" variant="text" />
						</>
					)}
				</CardContent>
				<StyledCardActions disableSpacing>
					{candidate ? (
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					) : (
						<Skeleton animation="wave" variant="rect" />
					)}
				</StyledCardActions>
			</>
		</StyledCard>
	);
};

export default CandidateListItem;

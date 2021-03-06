/* eslint-disable react/jsx-no-undef */
import React, { useCallback, useMemo } from 'react';
import {
	CardHeader,
	Avatar,
	CardContent,
	Typography,
	IconButton,
	Menu,
	MenuItem,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Candidate } from 'models/candidate';
import {
	StyledCard,
	StyledCardActions,
	StyledCircularProgressbar,
} from './styled';
import CandidateListItemStatusUpdateDialog from '../CandidateListItemStatusUpdateDialog';
import { getCandidateProcentageProfile } from 'utils/candidates';

interface CandidateListItemProps {
	candidate: Candidate | null;
	onDeleteCandidate: (id: string) => void;
}

const CandidateListItem: React.FC<CandidateListItemProps> = (
	props: CandidateListItemProps,
): JSX.Element => {
	const { candidate, onDeleteCandidate } = props;
	const [popupEl, setPopupEl] = React.useState(null);
	const [open, seOpen] = React.useState(false);

	const percentage = useMemo(() => {
		return candidate ? getCandidateProcentageProfile(candidate) : 0;
	}, [candidate]);

	const onShowMenuCallback = useCallback(
		(event) => {
			setPopupEl(event.currentTarget);
		},
		[setPopupEl],
	);

	const handleClose = useCallback(() => {
		setPopupEl(null);
	}, []);

	const onDeleteCandidateCallback = useCallback(() => {
		if (candidate) {
			onDeleteCandidate(candidate.id);
		}
	}, [onDeleteCandidate, candidate]);

	const onUpdateCandidateStatusCallback = useCallback(() => {
		setPopupEl(null);
		seOpen(true);
	}, [seOpen]);

	const onPopupCloseCallback = useCallback(() => {
		seOpen(false);
	}, [seOpen]);

	const parsedData = useMemo(() => {
		if (candidate) {
			const data = new Date(Date.parse(candidate.applied_on));
			return data.toLocaleString('de-DE', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
			});
		}
		return '';
	}, [candidate]);

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
					action={
						candidate ? (
							<StyledCircularProgressbar
								value={percentage}
								text={`${percentage}%`}
							/>
						) : null
					}
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
								{parsedData}
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
						<>
							<IconButton
								aria-label="settings"
								onClick={onShowMenuCallback}
							>
								<MoreVertIcon />
							</IconButton>
							<Menu
								id="act-menu"
								anchorEl={popupEl}
								keepMounted
								open={Boolean(popupEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={onDeleteCandidateCallback}>
									Delete
								</MenuItem>
								<MenuItem
									onClick={onUpdateCandidateStatusCallback}
								>
									Update status
								</MenuItem>
							</Menu>
						</>
					) : (
						<Skeleton animation="wave" variant="rect" />
					)}
				</StyledCardActions>
			</>
			<CandidateListItemStatusUpdateDialog
				open={open}
				candidateStatus={candidate?.state ?? ''}
				onClose={onPopupCloseCallback}
				candidateId={candidate?.id ?? ''}
			/>
		</StyledCard>
	);
};

export default CandidateListItem;

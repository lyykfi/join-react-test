import React, { useCallback, useState, useEffect } from 'react';

import {
	DialogProps,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Button,
	Select,
	MenuItem,
} from '@material-ui/core';

import { CANDIDATE_STATE } from 'models/candidate';
import { candidateUpdateStatusById } from 'store/actions/candidates';
import { useDispatch } from 'react-redux';

interface CandidateListItemStatusUpdateDialog extends DialogProps {
	candidateId: string;
	candidateStatus: string;
	onClose: () => void;
}

const CandidateListItemStatusUpdateDialog: React.FC<CandidateListItemStatusUpdateDialog> = (
	props: CandidateListItemStatusUpdateDialog,
): JSX.Element => {
	const { onClose, open, candidateStatus, candidateId } = props;
	const [selected, setSelected] = useState<string>('');
	const dispatch = useDispatch();

	useEffect(() => {
		setSelected(candidateStatus);
	}, [candidateStatus, setSelected]);

	const handleClose = useCallback(() => {
		onClose();
	}, []);

	const handleUpdateStatus = useCallback(() => {
		dispatch(
			candidateUpdateStatusById({
				candidateId: candidateId,
				candidateStatus: selected,
			}),
		);
		onClose();
	}, [selected, candidateId]);

	const handleChange = useCallback(
		(event) => {
			setSelected(event.target.value);
		},
		[setSelected],
	);

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Update candidate resume status</DialogTitle>
			<DialogContent>
				<Select value={selected} onChange={handleChange}>
					{Object.entries(CANDIDATE_STATE).map((item, key) => {
						return (
							<MenuItem key={key} value={item[1]}>
								{item[0]}
							</MenuItem>
						);
					})}
				</Select>
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={handleClose}>
					Cancel
				</Button>
				<Button color="primary" onClick={handleUpdateStatus}>
					Update
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CandidateListItemStatusUpdateDialog;

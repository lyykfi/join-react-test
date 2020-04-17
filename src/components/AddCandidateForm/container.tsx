import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { createCandidate } from 'store/actions/candidates';
import AddCandidateForm from '.';
import { Candidate } from 'models/candidate';
import { useHistory } from 'react-router-dom';

const AddCandidateFormContainer = (): JSX.Element => {
	const dispatch = useDispatch();
	const history = useHistory();

	const onAddNewCandidateCallback = useCallback(
		(candidate: Candidate) => {
			dispatch(createCandidate(candidate));
			history.push('/');
		},
		[dispatch],
	);

	return <AddCandidateForm onAddNewCandidate={onAddNewCandidateCallback} />;
};

export default AddCandidateFormContainer;

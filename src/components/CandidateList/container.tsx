import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
	isLoadedCandidateListState,
	getCandidateListState,
	isLoadingCandidateListState,
	getCandidateListErrorState,
} from 'store/selectors/candidates';
import {
	getCandidateList,
	deleteCandidateById,
} from 'store/actions/candidates';
import CandidateList from '.';

const CandidateListContainer = (): JSX.Element => {
	const isLoaded = useSelector(isLoadedCandidateListState);
	const isLoading = useSelector(isLoadingCandidateListState);
	const candidateList = useSelector(getCandidateListState);
	const error = useSelector(getCandidateListErrorState);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isLoaded) {
			dispatch(getCandidateList());
		}
	}, [isLoaded]);

	const onDeleteCandidateCallback = useCallback(
		(id: string) => {
			dispatch(deleteCandidateById(id));
		},
		[dispatch],
	);

	return (
		<CandidateList
			onDeleteCandidate={onDeleteCandidateCallback}
			candidateList={candidateList}
			isLoading={isLoading}
			error={error}
		/>
	);
};

export default CandidateListContainer;

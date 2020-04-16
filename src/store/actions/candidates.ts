import { createAction, Dispatch } from '@reduxjs/toolkit';

import { fetchCandidatesRequest } from 'store/api/candidates';
import { Candidate } from 'models/candidate';

export const getCandidateListStart = createAction('GET_CANDIDATE_LIST_START');

export const getCandidateListSuccess = createAction<Candidate[]>(
	'GET_CANDIDATE_LIST_SUCCESS',
);

export const getCandidateListFail = createAction<Error>(
	'GET_CANDIDATE_LIST_FAIL',
);

export const getCandidateList = () => {
	return async (dispatch: Dispatch): Promise<Candidate[] | null> => {
		dispatch(getCandidateListStart());

		try {
			const candidates = await fetchCandidatesRequest();

			dispatch(getCandidateListSuccess(candidates));

			return candidates;
		} catch (e) {
			dispatch(getCandidateListFail(e));

			return null;
		}
	};
};

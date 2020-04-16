import { createAction, Dispatch } from '@reduxjs/toolkit';

import { fetchCandidatesRequest } from 'store/api/candidates';
import { Candidate } from 'models/candidate';

export const getCandidatesListStart = createAction('GET_CANDIDATES_START');

export const getCandidatesListSuccess = createAction<Candidate[]>(
	'GET_CANDIDATES_SUCCESS',
);

export const getCandidatesListFail = createAction('GET_CANDIDATES_FAIL');

export const getCandidatesList = () => {
	return async (dispatch: Dispatch): Promise<Candidate[] | null> => {
		dispatch(getCandidatesListStart());

		try {
			const candidates = await fetchCandidatesRequest();

			dispatch(getCandidatesListSuccess(candidates));

			return candidates;
		} catch (e) {
			dispatch(getCandidatesListFail());

			return null;
		}
	};
};

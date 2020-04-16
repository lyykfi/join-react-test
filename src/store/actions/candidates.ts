import { createAction, Dispatch } from '@reduxjs/toolkit';

import { fetchCandidatesRequest } from 'store/api/candidates';
import { Candidate } from 'models/candidate';
import { addIds } from 'utils/candidates';

export const getCandidateListStart = createAction('GET_CANDIDATE_LIST_START');

export const getCandidateListSuccess = createAction<Candidate[]>(
	'GET_CANDIDATE_LIST_SUCCESS',
);

export const getCandidateListFail = createAction<Error>(
	'GET_CANDIDATE_LIST_FAIL',
);

export const deleteCandidateById = createAction<string>(
	'DELETE_CANDIDATE_BY_ID',
);

export const getCandidateList = () => {
	return async (dispatch: Dispatch): Promise<Candidate[] | null> => {
		dispatch(getCandidateListStart());

		try {
			const candidates = await fetchCandidatesRequest();

			dispatch(getCandidateListSuccess(addIds(candidates)));

			return candidates;
		} catch (e) {
			dispatch(getCandidateListFail(e));

			return null;
		}
	};
};

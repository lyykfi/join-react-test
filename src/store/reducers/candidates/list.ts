import { createReducer } from '@reduxjs/toolkit';
import update from 'immutability-helper';

import { Candidate } from 'models/candidate';
import {
	getCandidateListStart,
	getCandidateListSuccess,
	getCandidateListFail,
	deleteCandidateById,
	candidateUpdateStatusById,
	createCandidate,
} from 'store/actions/candidates';

export interface CandidatesListReducerState {
	candidatesList: Candidate[];
	isLoaded: boolean;
	isLoading: boolean;
	error: Error | null;
}

export const INIT_STATE = {
	candidatesList: [],
	isLoaded: false,
	isLoading: false,
	error: null,
};

const candidatesListReducer = createReducer<CandidatesListReducerState>(
	INIT_STATE,
	{
		[getCandidateListStart.type]: (state) => {
			return {
				...state,
				isLoaded: false,
				isLoading: true,
				candidatesList: [],
				error: null,
			};
		},
		[getCandidateListSuccess.type]: (state, action) => {
			return {
				...state,
				isLoaded: true,
				isLoading: false,
				candidatesList: action.payload,
				error: null,
			};
		},
		[getCandidateListFail.type]: (state, action) => {
			return {
				...state,
				isLoaded: true,
				isLoading: false,
				candidatesList: [],
				error: action.payload,
			};
		},
		[deleteCandidateById.type]: (state, action) => {
			const id = action.payload;
			const candidatesList = state.candidatesList;

			return {
				...state,
				candidatesList: candidatesList.filter((val) => val.id !== id),
			};
		},
		[createCandidate.type]: (state, action) => {
			return {
				...state,
				candidatesList: update(state.candidatesList, {
					$push: [action.payload],
				}),
			};
		},
		[candidateUpdateStatusById.type]: (state, action) => {
			const id = action.payload.candidateId;
			const status = action.payload.candidateStatus;

			const candidatesList = state.candidatesList;
			const candidateIndex = candidatesList.findIndex(
				(val) => val.id === id,
			);

			if (candidateIndex !== -1) {
				return {
					...state,
					candidatesList: update(state.candidatesList, {
						[candidateIndex]: {
							$set: {
								...candidatesList[candidateIndex],
								state: status,
							},
						},
					}),
				};
			}

			return state;
		},
	},
);

export default candidatesListReducer;

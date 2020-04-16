import { createReducer } from '@reduxjs/toolkit';
import { Candidate } from 'models/candidate';
import {
	getCandidateListStart,
	getCandidateListSuccess,
	getCandidateListFail,
	deleteCandidateById,
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

			console.log(candidatesList.filter((val) => val.id !== id));

			return {
				...state,
				candidatesList: candidatesList.filter((val) => val.id !== id),
			};
		},
	},
);

export default candidatesListReducer;

import { createReducer } from '@reduxjs/toolkit';
import { Candidate } from 'models/candidate';

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
	{},
);

export default candidatesListReducer;

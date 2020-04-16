import { combineReducers } from '@reduxjs/toolkit';
import list, { CandidatesListReducerState } from './list';

export interface CandidateReducerState {
	list: CandidatesListReducerState;
}

const candidateReducer = combineReducers<CandidateReducerState>({
	list,
});

export default candidateReducer;

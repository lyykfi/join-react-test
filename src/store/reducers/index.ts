import { combineReducers } from '@reduxjs/toolkit';
import candidates, { CandidateReducerState } from './candidates';

export interface StoreState {
	candidates: CandidateReducerState;
}

const rootReducer = combineReducers<StoreState>({
	candidates,
});

export default rootReducer;

import { StoreState } from 'store/reducers/index';
import { Candidate } from 'models/candidate';

export const getCandidateListState = (state: StoreState): Candidate[] => {
	return state.candidates.list.candidatesList;
};

export const isLoadingCandidateListState = (state: StoreState): boolean => {
	return state.candidates.list.isLoading;
};

export const isLoadedCandidateListState = (state: StoreState): boolean => {
	return state.candidates.list.isLoaded;
};

export const getCandidateListErrorState = (state: StoreState): Error | null => {
	return state.candidates.list.error;
};

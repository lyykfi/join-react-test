import hash from 'object-hash';

import { Candidate } from 'models/candidate';

export const addIds = (candidates: Candidate[]): Candidate[] => {
	return candidates.map((item) => {
		item.id = hash(item);
		return item;
	});
};

export const getCandidateProcentageProfile = (candidate: Candidate): number => {
	let percentage = 0;

	if (candidate.fullName) {
		percentage += 10;
	}

	if (candidate.email) {
		percentage += 10;
	}

	if (candidate.password) {
		percentage += 10;
	}

	if (candidate.phone) {
		percentage += 20;
	}

	return percentage;
};

import { v4 as uuidv4 } from 'uuid';

import { Candidate } from 'models/candidate';

export const addIds = (candidates: Candidate[]): Candidate[] => {
	return candidates.map((item) => {
		item.id = uuidv4();
		return item;
	});
};

export const getCandidateProcentageProfile = (candidate: Candidate): number => {
	const propsWeight: Record<string, number> = {
		fullName: 20,
		email: 20,
		password: 20,
		phone: 40,
	};

	return Object.keys(propsWeight).reduce((acc, key) => {
		const item = (candidate as any)[key];
		if (item && item.trim()) {
			acc = acc + propsWeight[key];
		}

		return acc;
	}, 0);
};

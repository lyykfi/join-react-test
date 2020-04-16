import hash from 'object-hash';

import { Candidate } from 'models/candidate';

export const addIds = (candidates: Candidate[]): Candidate[] => {
	return candidates.map((item) => {
		item.id = hash(item);
		return item;
	});
};

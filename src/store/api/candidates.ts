import Env from 'utils/env';
import { Candidate } from 'models/candidate';

export const fetchCandidatesRequest = async (): Promise<Candidate[]> => {
	const result = await fetch(`${Env.baseUrl}data/candidates.json`);

	if (result.ok) {
		return await result.json();
	} else {
		throw new Error(result.statusText);
	}
};

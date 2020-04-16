import Env from 'utils/env';
import { Candidate } from 'models/candidate';

export const fetchCandidatesRequest = async (): Promise<Candidate[]> => {
	return await (await fetch(`${Env.baseUrl}/data`)).json();
};

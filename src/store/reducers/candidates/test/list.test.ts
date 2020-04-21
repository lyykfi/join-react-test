/* eslint-disable @typescript-eslint/camelcase */
import { candidateUpdateStatusById } from 'store/actions/candidates';
import { CANDIDATE_STATE } from 'models/candidate';
import candidatesListReducer from '../list';
import { INIT_STATE } from 'store/reducers/candidates/list';

describe('candidatesListReducer tests', () => {
	it('candidateUpdateStatusById normal case', async () => {
		const mockCandidateList = [
			{
				id: '234',
				fullName: 'Ruby Banks',
				email: 'ruby.banks@example.com',
				password: '123123',
				phone: '+491231122890',
				avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
				applied_on: '01.04.2020',
				state: 'submitted',
			},
			{
				id: '4134',
				fullName: 'Lester Morrison',
				email: 'lester.morrison@example.com',
				password: '',
				phone: '+491231122890',
				avatar: '',
				applied_on: '05.03.2020',
				state: 'in review',
			},
		];

		const init = {
			...INIT_STATE,
		};

		init.candidatesList = mockCandidateList as any;

		const result = candidatesListReducer(
			init,
			candidateUpdateStatusById({
				candidateId: '234',
				candidateStatus: CANDIDATE_STATE.IN_REVIEW,
			}),
		);

		expect(result.candidatesList[0].state).toBe(CANDIDATE_STATE.IN_REVIEW);
	});
});

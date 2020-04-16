export enum CANDIDATE_STATE {
	SUBMITTED = 'submitted',
	IN_REVIEW = 'in review',
	NOT_A_FIT = 'not a fit',
}

export interface Candidate {
	fullName: string;
	email: string;
	password: string;
	phone: string;
	avatar: string;
	applied_on: string;
	state: string;
}

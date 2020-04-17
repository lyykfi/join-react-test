import React from 'react';
import MainLayout from 'layouts/main';
import AddCandidateFormContainer from 'components/AddCandidateForm/container';

const CandidatePage = (): JSX.Element => {
	return (
		<MainLayout title="Candidate page">
			<AddCandidateFormContainer />
		</MainLayout>
	);
};

export default CandidatePage;

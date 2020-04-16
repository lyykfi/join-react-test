import React from 'react';
import MainLayout from 'layouts/main';
import CandidateListContainer from 'components/CandidateList/container';

const RecruterPage = (): JSX.Element => {
	return (
		<MainLayout title="Recruter page">
			<CandidateListContainer />
		</MainLayout>
	);
};

export default RecruterPage;

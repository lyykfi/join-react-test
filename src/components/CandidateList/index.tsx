import React, { useMemo } from 'react';
import hash from 'object-hash';

import { Candidate } from 'models/candidate';
import { CandidateListWrapper } from './styled';
import CandidateListItem from './CandidateListItem';
import ErrorMessage from '../ErrorMessage/index';

interface CandidateListProps {
	candidateList: (Candidate | null)[];
	isLoading: boolean;
	error: Error | null;
}

const CandidateList: React.FC<CandidateListProps> = (
	props: CandidateListProps,
): JSX.Element => {
	const { candidateList, isLoading, error } = props;

	const data = useMemo(() => {
		return isLoading ? Array(5).fill(null) : candidateList;
	}, [isLoading, candidateList]);

	console.log(error);

	if (error) {
		return <ErrorMessage text={error.message} />;
	}

	return (
		<CandidateListWrapper>
			{data.map((item, key) => {
				return (
					<CandidateListItem
						key={item ? hash(item) : key}
						candidate={item}
					/>
				);
			})}
		</CandidateListWrapper>
	);
};

export default CandidateList;

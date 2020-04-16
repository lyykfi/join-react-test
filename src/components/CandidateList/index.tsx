import React, { useMemo } from 'react';

import { Candidate } from 'models/candidate';
import { CandidateListWrapper } from './styled';
import CandidateListItem from './CandidateListItem';
import ErrorMessage from '../ErrorMessage/index';

interface CandidateListProps {
	candidateList: (Candidate | null)[];
	isLoading: boolean;
	error: Error | null;
	onDeleteCandidate: (id: string) => void;
}

const CandidateList: React.FC<CandidateListProps> = (
	props: CandidateListProps,
): JSX.Element => {
	const { candidateList, isLoading, error, onDeleteCandidate } = props;

	const data = useMemo(() => {
		return isLoading ? Array(5).fill(null) : candidateList;
	}, [isLoading, candidateList]);

	if (error) {
		return <ErrorMessage text={error.message} />;
	}

	return (
		<CandidateListWrapper>
			{data.map((item, key) => {
				return (
					<CandidateListItem
						onDeleteCandidate={onDeleteCandidate}
						key={item ? item.id : key}
						candidate={item}
					/>
				);
			})}
		</CandidateListWrapper>
	);
};

export default CandidateList;

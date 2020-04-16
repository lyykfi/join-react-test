import React from 'react';
import { Card, CardHeader, Avatar } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import { Candidate } from 'models/candidate';

interface CandidateListItemProps {
	candidate: Candidate | null;
}

const CandidateListItem: React.FC<CandidateListItemProps> = (
	props: CandidateListItemProps,
): JSX.Element => {
	const { candidate } = props;

	return (
		<Card>
			{candidate === null ? (
				<Skeleton />
			) : (
				<>
					<CardHeader
						avatar={
							<Avatar>
								<img src={candidate.avatar} alt="" />
							</Avatar>
						}
						title={candidate.fullName}
						subheader={candidate.email}
					/>
				</>
			)}
		</Card>
	);
};

export default CandidateListItem;

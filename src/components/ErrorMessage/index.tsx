import React from 'react';
import { Typography } from '@material-ui/core';

import { StyledPaper } from './styled';

interface ErrorMessageProps {
	text: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (
	props: ErrorMessageProps,
): JSX.Element => {
	const { text } = props;

	return (
		<StyledPaper variant="outlined">
			<Typography variant="h4">{text}</Typography>
		</StyledPaper>
	);
};

export default ErrorMessage;

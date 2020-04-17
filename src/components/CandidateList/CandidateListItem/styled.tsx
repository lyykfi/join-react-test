import Card from '@material-ui/core/Card/Card';
import styled from 'styled-components';
import { CardActions } from '@material-ui/core';
import { CircularProgressbar } from 'react-circular-progressbar';

export const StyledCard = styled(Card)`
	margin-bottom: 10px;
	min-height: 220px;
`;

export const StyledCardActions = styled(CardActions)`
	display: flex;
	justify-content: flex-end;
`;

export const StyledCircularProgressbar = styled(CircularProgressbar)`
	width: 50px;
`;

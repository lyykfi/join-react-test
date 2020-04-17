import { Container } from '@material-ui/core';
import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';

export const StyledContainer = styled(Container)`
	margin-top: 10px;
`;

export const StyledToolbar = styled(Toolbar)`
	justify-content: space-between;
`;

export const ToolbarLeft = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`;

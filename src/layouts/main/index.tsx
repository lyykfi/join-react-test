import React, { useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

import { StyledContainer, StyledToolbar, ToolbarLeft } from './styled';

interface MainLayoutProps {
	title: string;
	children: JSX.Element;
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
	const { title } = props;
	const history = useHistory();

	const onAddClickCallback = useCallback(() => {
		history.push('/candidate');
	}, []);

	const onLogoClickCallback = useCallback(() => {
		history.push('/');
	}, []);

	return (
		<>
			<AppBar position="static">
				<StyledToolbar>
					<ToolbarLeft>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<IconButton
							edge="start"
							color="inherit"
							onClick={onLogoClickCallback}
						>
							LOGO
						</IconButton>
						<Typography variant="h6">{title}</Typography>
					</ToolbarLeft>
					<IconButton onClick={onAddClickCallback} color="inherit">
						<AddIcon />
					</IconButton>
				</StyledToolbar>
			</AppBar>

			<StyledContainer fixed>{props.children}</StyledContainer>
		</>
	);
};

export default MainLayout;

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { StyledContainer } from './styled';

interface MainLayoutProps {
	title: string;
	children: JSX.Element;
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
	const { title } = props;

	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6">{title}</Typography>
					<IconButton aria-label="show 4 new mails" color="inherit">
						<AddIcon />
					</IconButton>
				</Toolbar>
			</AppBar>

			<StyledContainer fixed>{props.children}</StyledContainer>
		</>
	);
};

export default MainLayout;

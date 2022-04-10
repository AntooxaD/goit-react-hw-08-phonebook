import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import AppBarStyle from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <AppBarStyle
            position="static"
            elevation={12}
            sx={{
                width: '80%',
                margin: 'auto',
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100,
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    ml: 10,
                    mr: 10,
                }}
            >
                <Navigation />
                {!isLoggedIn ? <AuthNav /> : <UserMenu />}
            </Toolbar>
        </AppBarStyle>
    );
}

import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggetIn);
    return (
        <>
            <Navigation />
            {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </>
    );
}

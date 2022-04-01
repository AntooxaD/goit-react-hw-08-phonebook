import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operation';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    return (
        <>
            <p>Hello, {name}</p>
            <button type="button" onClick={() => dispatch(logOut())}>
                {' '}
                Log out
            </button>
        </>
    );
}

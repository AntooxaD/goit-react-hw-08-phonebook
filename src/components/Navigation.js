import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Box
            sx={{
                typography: 'body1',
                '& > :not(style) + :not(style)': {
                    ml: 2,
                },
            }}
        >
            <Link href="/">Home</Link>
            {isLoggedIn && <Link href="/contacts">Contacts</Link>}
        </Box>
    );
}

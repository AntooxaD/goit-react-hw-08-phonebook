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
                typography: {
                    fontFamily: '"Apple Color Emoji"',
                    fontSize: 24,
                },

                '& > :not(style) + :not(style)': {
                    ml: 4,
                },
            }}
        >
            <Link href="/" underline="none" color="white">
                Home
            </Link>
            {isLoggedIn && (
                <Link href="/contacts" underline="none" color="white">
                    Contacts
                </Link>
            )}
        </Box>
    );
}

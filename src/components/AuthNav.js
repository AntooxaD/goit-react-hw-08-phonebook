import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function AuthNav() {
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
            <Link href="/register" underline="none" color="white">
                Sign Up
            </Link>
            <Link href="/login" underline="none" color="white">
                Sign In
            </Link>
        </Box>
    );
}

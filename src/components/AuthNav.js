import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function AuthNav() {
    return (
        <Box
            sx={{
                typography: 'body1',
                '& > :not(style) + :not(style)': {
                    ml: 2,
                },
            }}
        >
            <Link href="/register">Registration</Link>
            <Link href="/login">Login</Link>
        </Box>
    );
}

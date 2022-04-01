import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Navigation() {
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
            <Link href="/contacts">Contacts</Link>
        </Box>
    );
}

import * as React from 'react';
import { Box, Typography } from '@mui/material';

const HomeView = () => {
    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography
                sx={{
                    typography: {
                        fontFamily: '"Apple Color Emoji"',
                        fontSize: '8rem',
                    },
                }}
            >
                Phonebook
            </Typography>
        </Box>
    );
};
export default HomeView;

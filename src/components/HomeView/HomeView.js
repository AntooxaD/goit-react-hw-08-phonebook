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
            <Typography variant="h2" component="h2">
                Phonebook
            </Typography>
        </Box>
    );
};
export default HomeView;

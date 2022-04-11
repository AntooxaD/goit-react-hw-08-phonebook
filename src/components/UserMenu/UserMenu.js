import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operation';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                '& > :not(style) + :not(style)': {
                    ml: 4,
                },
            }}
        >
            <Typography
                sx={{
                    typography: {
                        fontFamily: '"Apple Color Emoji"',
                        fontSize: 24,
                        mr: 10,
                    },
                }}
            >
                Hello, {name}
            </Typography>
            <Button
                sx={{
                    borderRadius: 50,
                    bgcolor: 'white',
                    '&:hover': {
                        bgcolor: `#fce4ec
                        `,
                    },
                }}
                type="button"
                onClick={() => dispatch(logOut())}
            >
                {' '}
                Log out
            </Button>
        </Box>
    );
}

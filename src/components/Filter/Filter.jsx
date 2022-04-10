import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contacts/contactActions';
import { getFilter } from '../../redux/contacts/selectors';
import TextField from '@mui/material/TextField';
import { Box, Typography } from '@mui/material';

function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    const onChange = data => dispatch(filterContact(data.target.value));

    return (
        <Box>
            <Typography
                sx={{
                    textAlign: 'center',
                    mt: 2,
                    mb: 2,
                    typography: {
                        fontFamily: '"Apple Color Emoji"',
                        fontSize: 16,
                        color: '#039be5',
                    },
                }}
            >
                {' '}
                Find contact by name
            </Typography>
            <TextField
                sx={{ ml: 14 }}
                id="standard-basic"
                label="Filter"
                variant="standard"
                type="text"
                value={filter}
                onChange={onChange}
            />
        </Box>
    );
}

export default Filter;

import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Title, Text } from '../Styled/Styled';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { fetchContact } from '../../redux/contacts/contactActions';

export default function ContactsView() {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchContact()), [dispatch]);
    return (
        <div className="App">
            <Typography
                sx={{
                    textAlign: 'center',
                    mt: 4,
                    mb: 4,
                    typography: {
                        fontFamily: '"Apple Color Emoji"',
                        fontSize: 24,
                        color: '#039be5',
                    },
                }}
            >
                Phonebook
            </Typography>
            <ContactForm />
            <Title>Contacts</Title>
            <Filter />
            {contacts.length ? (
                <ContactList contacts={contacts} />
            ) : (
                <Text>Nothing</Text>
            )}
        </div>
    );
}

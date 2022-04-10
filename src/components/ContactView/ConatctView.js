import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Title, Text } from '../Styled/Styled';
import { getVisibleContacts } from '../../redux/contacts/selectors';

export default function ContactsView() {
    const contacts = useSelector(getVisibleContacts);
    return (
        <div className="App">
            <p>Phonebook</p>
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

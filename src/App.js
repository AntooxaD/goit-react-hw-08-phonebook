import './App.css';
// import ContactForm from './components/ContactForm/ContactForm';
// import ContactList from './components/ContactList/ContactList';
// import Filter from './components/Filter/Filter';
// import { Title, Text } from './components/Styled/Styled';
import { useDispatch } from 'react-redux';
// import { getVisibleContacts } from './redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchCurrentUser } from './redux/auth/auth-operation';
import { HomeView } from './components/HomeView/HomeView';
import { SignUp } from './components/Register/SignUp';
import { SignIn } from './components/Login/SignIn';
import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';

function App() {
    // const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchCurrentUser()), [dispatch]);
    return (
        <>
            <AppBar />

            <Routes>
                <Route path="/" element={<HomeView />}></Route>
                <Route path="/register" element={<SignUp />}></Route>
                <Route path="/login" element={<SignIn />}></Route>
            </Routes>
        </>
        //     <div className="App">
        //         <HomeView>Phonebook</HomeView>
        //         <ContactForm />
        //         <Title>Contacts</Title>
        //         <Filter />
        //         {contacts.length ? (
        //             <ContactList contacts={contacts} />
        //         ) : (
        //             <Text>Nothing</Text>
        //         )}
        //     </div>
    );
}

export default App;

import './App.css';
import authSelectors from './redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import { Skeleton } from '@mui/material';
import PublicRoute from './components/PublicRoute';
import { useEffect, lazy, Suspense } from 'react';
import { fetchCurrentUser } from './redux/auth/auth-operation';
import { Route, Routes, Navigate } from 'react-router-dom';
import AppBar from './components/AppBar';

const HomeView = lazy(() => import('./components/HomeView/HomeView'));
const SignUp = lazy(() => import('./components/Register/SignUp'));
const SignIn = lazy(() => import('./components/Login/SignIn'));
const ContactsView = lazy(() => import('./components/ContactView/ConatctView'));

function App() {
    const dispatch = useDispatch();
    const isFetchingCurrentUser = useSelector(
        authSelectors.getIsFetchingCurrentUser,
    );
    useEffect(() => dispatch(fetchCurrentUser()), [dispatch]);
    return (
        !isFetchingCurrentUser && (
            <>
                <AppBar />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<Skeleton />}>
                                <PublicRoute>
                                    <HomeView />
                                </PublicRoute>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <Suspense fallback={<Skeleton />}>
                                <PublicRoute restricted redirectTo="/contacts">
                                    {' '}
                                    <SignUp />
                                </PublicRoute>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <Suspense fallback={<Skeleton />}>
                                <PublicRoute restricted redirectTo="/contacts">
                                    <SignIn />
                                </PublicRoute>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/contacts"
                        element={
                            <Suspense fallback={<Skeleton />}>
                                <PrivateRoute>
                                    <ContactsView />
                                </PrivateRoute>
                            </Suspense>
                        }
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </>
        )
    );
}

export default App;

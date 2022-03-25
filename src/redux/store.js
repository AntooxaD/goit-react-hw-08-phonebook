import { configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import logger from 'redux-logger';
import contactReducer from './contactReducers';

const store = configureStore({
    reducer: { contacts: contactReducer },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(logger),

    devTools: process.env.NODE_ENV === 'development',
});

export default store;

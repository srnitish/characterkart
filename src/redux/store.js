import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './slice/characterSlices';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key: "root",
    version: 1.0,
    storage
};

const reducer = combineReducers({
    character: characterReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
})
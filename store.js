import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {dataFromAPI} from './src/reducers/index';

// Persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['movie'],
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, dataFromAPI);

// Normal store and persisted store
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

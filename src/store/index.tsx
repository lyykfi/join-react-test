import { configureStore, Store } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export const getStore = (): Store => {
	const store = configureStore({
		reducer: rootReducer,
	});

	return store;
};

import { configureStore, Store, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export const getStore = (): Store => {
	const store = configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware({
			serializableCheck: false,
		}),
	});

	return store;
};

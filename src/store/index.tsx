import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

export const getStore = () => {
	const store = configureStore({
		reducer: rootReducer,
	});

	return store;
}
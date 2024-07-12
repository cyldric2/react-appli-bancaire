import { configureStore } from "@reduxjs/toolkit"

import rootReducer from "../reducers"

const store = configureStore({
    reducer: { User: rootReducer },
    devTools: true,
});

export default store;

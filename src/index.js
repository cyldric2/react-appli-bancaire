import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";


import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./reducers"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import SignIN from "./sign-in";
import User from "./user";
library.add(fas)



const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

const route = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "signIn",
        element: <SignIN />
    },
    {
        path: "signIn/user",
        element: <User />
    },
    {
        path: "*",
        element: <App />

    }
])
ReactDOM.render(
    <Provider store={store}>
        < RouterProvider router={route} />
    </Provider>


    , document.getElementById("root"));

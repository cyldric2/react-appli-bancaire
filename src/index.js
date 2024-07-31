import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";


import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import SignIN from "./sign-in";
import User from "./user";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import store from "./store";


library.add(fas)




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

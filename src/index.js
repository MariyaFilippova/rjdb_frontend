
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store.js";
import App from "./App";


// Create an enhanced history that syncs navigation events with the store
const rerenderEntireTree = () => {

    ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>, document.getElementById('root'));
};
rerenderEntireTree();
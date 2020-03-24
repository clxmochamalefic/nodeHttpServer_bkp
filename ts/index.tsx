import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import Home from './components/Home'
import Store from './Store'

const container = document.getElementById('contents');

ReactDom.render(
    <Provider store={Store}>
        <Home />
    </Provider>,
    container,
);
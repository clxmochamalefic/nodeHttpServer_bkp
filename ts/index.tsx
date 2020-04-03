import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import Home from './components/Home'
import Store from './Store'
import { ThemeProvider } from '@material-ui/core/styles'

const container = document.getElementById('contents');

const theme = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
}

ReactDom.render(
    <Provider store={Store}>
        <Home />
    </Provider>,
    container,
);
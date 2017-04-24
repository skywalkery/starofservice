import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { App } from './views/containers';
import createMemoryHistory from 'history/createMemoryHistory';
import configureStore from './state/store';

const app = Express();
const port = 3000;

app.use('/static', Express.static('static'));
app.use(handleRender);

function handleRender(req, res) {
    const store = configureStore();
    const history = createMemoryHistory();

    const html = renderToString(
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    );

    const preloadedState = store.getState();
    res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
    return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
            <link rel="stylesheet" href="/static/main.css">
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
          </head>
          <body>
            <div id="app">${html}</div>
          </body>
          <script>
              // WARNING: See the following for security issues around embedding JSON in HTML:
              // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
              window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/static/bundle.js"></script>
        </html>
        `;
}

app.listen(port);

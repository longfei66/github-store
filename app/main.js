import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import App from './App.js'
import reducer from './reducers/all.js'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store=createStore(reducer,applyMiddleware(logger,sagaMiddleware))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    ,
    document.querySelector('#app')
)
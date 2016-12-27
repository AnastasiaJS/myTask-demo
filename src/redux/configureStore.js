import {createStore, combineReducers, compose, applyMiddleware} from 'redux';

import ThunkMiddleware from 'redux-thunk';
import createFetchMiddleware from 'redux-composable-fetch';
import rootReducer from './reducers';

const FetchMiddleware = createFetchMiddleware();
const finalCreateStore = compose(
    applyMiddleware(
        ThunkMiddleware,
        //将请求middleware注入 store 增强器中
        // FetchMiddleware
    )
)(createStore);

const reducer = combineReducers(rootReducer);

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState,applyMiddleware(ThunkMiddleware,FetchMiddleware));

    return store;
}
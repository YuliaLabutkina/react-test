import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import searchQueryReducer from './searchQuery/searchQuery-reducer';
import repoReducer from './repo/repo-reducer';
import paginationReducer from './pagination/pagination-reducer';

const rootReducer = combineReducers({
    searchQuery: searchQueryReducer,
    repo: repoReducer,
    pagination: paginationReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
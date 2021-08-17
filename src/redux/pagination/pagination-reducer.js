import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import * as paginationActions from './pagination-action';
import * as searchQueryActions from '../searchQuery/searchQuery-action';

const currentPage = createReducer(1, {
  [paginationActions.setCurrentPage]: (_, { payload }) => payload,
  [searchQueryActions.setSearchQuery]: () => 1,
  [searchQueryActions.resetSearchQuery]: () => 1,
});

const totalPageCount = createReducer(0, {
  [paginationActions.setTotalPageCount]: (_, { payload }) => payload,
  [searchQueryActions.setSearchQuery]: () => 0,
  [searchQueryActions.resetSearchQuery]: () => 0,
});

const paginationReducer = combineReducers({
    currentPage,
    totalPageCount
});

export default paginationReducer;
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import * as paginationActions from './pagination-action';
import * as searchQueryActions from '../searchQuery/searchQuery-action';
import * as repoActions from '../repo/repo-action';

const currentPage = createReducer(1, {
  [paginationActions.setCurrentPage]: (_, { payload }) => payload,
  [searchQueryActions.setSearchQuery]: () => 1,
  [searchQueryActions.resetSearchQuery]: () => 1,
});

const totalPageCount = createReducer(0, {
  [repoActions.getRepoSuccess]: (_, { payload }) => payload.total_count,
  [searchQueryActions.setSearchQuery]: () => 0,
  [searchQueryActions.resetSearchQuery]: () => 0,
});

const paginationReducer = combineReducers({
    currentPage,
    totalPageCount
});

export default paginationReducer;
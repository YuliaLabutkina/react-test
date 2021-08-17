import { createAction } from '@reduxjs/toolkit';

const setSearchQuery = createAction('search/setSearchQuery');
const resetSearchQuery = createAction('search/resetSearchQuery');

export { setSearchQuery, resetSearchQuery };
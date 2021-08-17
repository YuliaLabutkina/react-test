import { createReducer } from '@reduxjs/toolkit';

import * as searchQueryActions from './searchQuery-action';

const searchQueryReducer = createReducer('react', {
  [searchQueryActions.setSearchQuery]: (_, { payload }) => payload,
  [searchQueryActions.resetSearchQuery]: () => '',
});

export default searchQueryReducer;
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import * as repoActions from './repo-action';
import * as searchQueryActions from '../searchQuery/searchQuery-action';

const getNormalizedRepo = (repositories) => {
  return repositories.map(({id, name, owner, language, description, watchers, stargazers_count}) => {
    return {
      id,
      name: name || 'unknown',
      author: owner.login || 'unknown',
      language: language || 'unknown',
      description: description || "no description",
      watchers: watchers || 0,
      stars: stargazers_count || 0
    }
  });
};

const repositories = createReducer([], {
  [repoActions.getRepoSuccess]: (_, { payload }) => getNormalizedRepo(payload.items),
  [searchQueryActions.setSearchQuery]: () => [],
  [searchQueryActions.resetSearchQuery]: () => [],
});

const loading = createReducer(false, {
  [repoActions.getRepoRequest]: () => true,
  [repoActions.getRepoSuccess]: () => false,
  [repoActions.getRepoError]: () => false,
});

const error = createReducer('', {
  [repoActions.getRepoRequest]: () => '',
  [repoActions.getRepoSuccess]: () => '',
  [repoActions.getRepoError]: (_, { payload }) => payload,
});

const repoReducer = combineReducers({
  repositories,
  loading,
  error,
});

export default repoReducer;
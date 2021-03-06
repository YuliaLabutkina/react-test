import { error, notice } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import { fetchRepo } from '../../services/github-api';
import * as repoActions from './repo-action';

const getRepositories = (query, page) => async dispatch => {
  dispatch(repoActions.getRepoRequest());

  try {
    const { items, total_count } = await fetchRepo(query, page);
    dispatch(repoActions.getRepoSuccess({items, total_count: Number(total_count)}));

    if(total_count === 0) {
      notice({
        title: 'Notice!',
        text: 'No repositories found for your request!',
        delay: 2000,
      });
    };
  } catch (err) {
    dispatch(repoActions.getRepoError(err.message));

    error({
      title: 'Ooops!',
      text: 'Something went wrong. Try again!',
      delay: 2000,
    });
  }
};

export { getRepositories };
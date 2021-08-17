import { createAction } from '@reduxjs/toolkit';

const getRepoRequest = createAction('repo/repoRequest');
const getRepoSuccess = createAction('repo/repoSuccess');
const getRepoError = createAction('repo/repoError');
const deleteRepo = createAction('repo/deleteRepo');

export { getRepoRequest, getRepoSuccess, getRepoError, deleteRepo };
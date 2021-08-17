const getRepositories = state => state.repo.repositories;
const loading = state => state.repo.loading;
const getError = state => state.repo.error;

export { getRepositories, loading, getError };
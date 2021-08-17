import { useSelector } from 'react-redux';

import { getSearchQuery } from './redux/searchQuery/searchQuery-selectors';
import { loading, getError } from './redux/repo/repo-selectors';

import Wrapper from './components/Wrapper';
import SearchForm from './components/SearchForm';
import RepoList from './components/RepoList';
import Pagination from './components/Pagination';
import PreLoader from './components/PreLoader';

const App = () => {
  const searchQuery = useSelector(getSearchQuery);
  const isLoading = useSelector(loading);
  const error = useSelector(getError);

  return (
    <Wrapper>
      <SearchForm />
      {!error && !isLoading && searchQuery && <RepoList />}
      {isLoading && <PreLoader height="150" width="150" />}
      <Pagination />
    </Wrapper>
  );
};

export default App;
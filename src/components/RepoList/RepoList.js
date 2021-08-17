import { useSelector } from 'react-redux';

import { getRepositories } from '../../redux/repo/repo-selectors';
import RepoItem from './RepoItem/RepoItem';

import { RepoListWrapper } from './RepoList.style';

const RepoList = () => {
    const repositories = useSelector(getRepositories);
    return(
        <RepoListWrapper>
            {repositories.map(({id, ...propRepo})=> <RepoItem key={id} { ...propRepo } />)}
        </RepoListWrapper>
    )
};

export default RepoList;
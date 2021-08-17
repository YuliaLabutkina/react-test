import PropTypes from 'prop-types';

import InfoSection from '../../InfoSection';
import RatingSection from '../../RatingSection';
import SvgIcon from '../../SvgIcon';

import { ReactComponent as ReactSvg } from '../../../img/svg/React.svg';

import { RepoItemWrapper } from './RepoItem.style';

const RepoItem = ({name, author, language, description, watchers, stars}) => {
    return(
        <RepoItemWrapper>
            <SvgIcon width='128px' height='144px'>
                <ReactSvg />
            </SvgIcon>
            <InfoSection name={name} author={author} language={language} description={description} />
            <RatingSection watchers={watchers} stars={stars} />
        </RepoItemWrapper>
    )
};

RepoItem.defaultProps = ({
    name: "unknown",
    author: "unknown",
    language: "unknown",
    description: "no description",
    watchers: 0,
    stars: 0
});

RepoItem.propTypes = {
    name: PropTypes.string,
    author: PropTypes.string,
    language: PropTypes.string,
    description: PropTypes.string,
    watchers: PropTypes.number,
    stars: PropTypes.number
};

export default RepoItem;
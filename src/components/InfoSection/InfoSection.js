import PropTypes from 'prop-types';

import { InfoSectionWrapper, RepoName, NameWrapper, Author, Language, Description } from './InfoSection.style';

const InfoSection = ({name, author, language, description}) => {
    return (
        <InfoSectionWrapper>
            <RepoName>{name}</RepoName>
            <Author><NameWrapper>Author: </NameWrapper>{author}</Author>
            <Language><NameWrapper>Language: </NameWrapper>{language}</Language>
            <Description><NameWrapper color='#6E798C'>Description: </NameWrapper>{description}</Description>
        </InfoSectionWrapper>
    )
};

InfoSection.defaultProps = ({
    name: "unknown",
    author: "unknown",
    language: "unknown",
    description: "no description"
});

InfoSection.propTypes = {
    name: PropTypes.string,
    author: PropTypes.string,
    language: PropTypes.string,
    description: PropTypes.string,
  };

export default InfoSection;
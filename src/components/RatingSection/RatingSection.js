import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

import { ReactComponent as StarSvg } from '../../img/svg/Star.svg';
import { ReactComponent as WatcherSvg } from '../../img/svg/Watcher.svg';

import { RatingSectionWrapper, RatingElementWrapper, Amount } from './RatingSection.style';

const RatingSection = ({ stars, watchers }) => {
    return (
        <RatingSectionWrapper>

            <RatingElementWrapper>
                <SvgIcon width='29px' height='30px'>
                    <StarSvg />
                </SvgIcon>
                <div><Amount>{stars}</Amount> stars</div>
            </RatingElementWrapper>

            <RatingElementWrapper>
                <SvgIcon width='24px' height='24px'>
                    <WatcherSvg />
                </SvgIcon>
                <div><Amount>{watchers}</Amount> watchers</div>
            </RatingElementWrapper>

        </RatingSectionWrapper>
    )
};

RatingSection.defaultProps = ({
    watchers: 0,
    stars: 0
});

RatingSection.propTypes = {
    watchers: PropTypes.number,
    stars: PropTypes.number
};

export default RatingSection;
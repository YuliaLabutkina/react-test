import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { LoaderContainer } from './PreLoader.style';

const PreLoader = ({ height, width }) => {
  return (
    <LoaderContainer>
      <Loader type="Puff" color="#00BFFF" height={ height } width={ width } />
    </LoaderContainer>
  );
};

PreLoader.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string
};

export default PreLoader;
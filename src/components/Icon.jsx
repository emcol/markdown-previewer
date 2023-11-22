import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icon({ icon, ...props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <FontAwesomeIcon icon={icon} {...props} />;
}

Icon.propTypes = {
  icon: PropTypes.shape({
    prefix: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Icon;

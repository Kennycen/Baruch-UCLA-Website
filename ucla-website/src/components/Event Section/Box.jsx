import React from 'react';
import PropTypes from 'prop-types';

const Box = (props) => {
  return (
    <div className="box">
      <img src={props.src} alt={props.event} />
      <h6>{props.event}</h6>
      <h4>{props.name}</h4>
    </div>
  );
};

Box.propTypes = {
  src: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Box.defaultProps = {
  src: 'default-image.png', // Provide a default image if none is specified
  event: 'Default Event',
  name: 'Default Name',
};

export default Box;
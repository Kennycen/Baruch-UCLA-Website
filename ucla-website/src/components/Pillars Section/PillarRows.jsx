import React from 'react';
import PropTypes from 'prop-types';

const PillarRows = (props) => {
  return (
    <div className="row">
      <div className="row-img">
        <img src={props.src} alt={props.pillar || 'Pillar image'} />
      </div>
      <h4>{props.pillar}</h4>
    </div>
  );
};

PillarRows.propTypes = {
  src: PropTypes.string.isRequired,
  pillar: PropTypes.string.isRequired,
};

PillarRows.defaultProps = {
  src: 'default-pillar.png', // Provide a default image if none is specified
  pillar: 'Default Pillar',
};

export default PillarRows;
import React from 'react';
import PillarRows from './PillarRows';
import PropTypes from 'prop-types';
import './Pillars.css';

const Pillars = ({ pillars }) => {
  return (
    <section className="pillar" id="pillar">
      <div className="center-text-pillar">
        <h2>PILLARS</h2>
      </div>
      <div className="pillar-content">
        {pillars.map((pillar, index) => (
          <PillarRows key={index} pillar={pillar.name} src={pillar.src} />
        ))}
      </div>
    </section>
  );
};

Pillars.propTypes = {
  pillars: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Pillars.defaultProps = {
  pillars: [
    { name: 'Family', src: 'Family.png' },
    { name: 'Service', src: 'Service.png' },
    { name: 'Culture', src: 'Culture.png' },
    { name: 'Mentorship', src: 'Mentorship.png' },
  ],
};

export default Pillars;
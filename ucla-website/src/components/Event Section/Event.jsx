import React from 'react';
import Box from './Box';
import PropTypes from 'prop-types';
import './Event.css';

const Event = ({ events }) => {
  return (
    <section className="event" id="event">
      <div className="center-text">
        <h2>Our Events</h2>
      </div>

      <div className="event-content">
        {events.map((event, index) => (
          <Box key={index} src={event.src} event={event.event} name={event.name} />
        ))}
      </div>

      <div className="center-btn">
        <a href="https://www.instagram.com/baruch_ucla/" className="btn">See More</a>
      </div>
    </section>
  );
};

Event.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      event: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Event.defaultProps = {
  events: [
    { src: 'GIM.png', event: 'GIM', name: 'General Interest Meeting' },
    { src: 'CLP.png', event: 'CLP', name: 'Cultural Learning Program' },
    { src: 'SOC.png', event: 'SOC', name: 'Social Event' },
  ],
};

export default Event;
import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import PropTypes from 'prop-types';

export default function Section({ title, options, onLeaveFeedback }) {
  return (
    <section>
      <h2>{title}</h2>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

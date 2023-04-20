import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import FeedbackOptions from './FeedbackOptions';

export default class Statistics extends Component {
  //   state = {
  //     // // good: 0,
  //     // // neutral: 0,
  //     // bad: 0,
  //   };

  static defaultProps = {
    title: null,
  };

  static propTypes = {
    title: PropTypes.string,
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

  //   addFeedback = evt => {
  //     this.setState(prevState => {
  //       // console.log(evt.target.name);
  //       return { [evt.target.name]: prevState[evt.target.name] + 1 };
  //     });
  //   };

  //   countTotalFeedback = () => {
  //     const total = this.state.good + this.state.neutral + this.state.bad;
  //     return total;
  //   };

  //   countPositiveFeedbackPercentage() {
  //     const positive = (this.state.good / this.countTotalFeedback()) * 100;

  //     return positive;
  //   }

  render() {
    const { title, good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <div>
          <h2>{title}</h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>
              Positive feedback:{' '}
              {isNaN(positivePercentage) ? 0 : `${positivePercentage}`}%
            </li>
          </ul>
        </div>
      </>
    );
  }
}

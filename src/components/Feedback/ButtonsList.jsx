import React, { Component } from 'react';
import { Button, FlexWrap } from './ButtonsList.styled';

export default class ButtonsList extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  static defaultProps = {
    title: null,
  };
  static propTypes = {};

  //Методи лічільника
  handleIncrement = event => {
    if (parseInt(event.target.id) === 1) {
      this.setState(prevState => {
        return {
          good: prevState.good + 1,
          ...this.countTotalFeedback(prevState),
          ...this.countPositiveFeedbackPercentage(prevState),
        };
      });
    } else if (parseInt(event.target.id) === 2) {
      this.setState(prevState => {
        return {
          neutral: prevState.neutral + 1,
          ...this.countTotalFeedback(prevState),
          ...this.countPositiveFeedbackPercentage(prevState),
        };
      });
    } else if (parseInt(event.target.id) === 3) {
      this.setState(prevState => {
        return {
          bad: prevState.bad + 1,
          ...this.countTotalFeedback(prevState),
          ...this.countPositiveFeedbackPercentage(prevState),
        };
      });
    }
  };

  //Метод підрахунку голосів
  countTotalFeedback(prevState) {
    const { good, neutral, bad } = prevState;

    const total = good + neutral + bad + 1;

    return { total: total };
  }

  countPositiveFeedbackPercentage(prevState) {
    const { total, good } = prevState;
    const positive = (good / total) * 100;
    console.log(positive, total);
    return { positive: positive };
  }

  render() {
    const { titleBtn, titleStat, id } = this.props;
    const { good, neutral, bad, total, positive } = this.state;
    return (
      <>
        <h2>{titleBtn}</h2>
        <FlexWrap>
          <Button id="1" onClick={this.handleIncrement}>
            Good
          </Button>
          <Button id="2" onClick={this.handleIncrement}>
            Neutral
          </Button>
          <Button id="3" onClick={this.handleIncrement}>
            Bad
          </Button>
        </FlexWrap>
        <div>
          <h2>{titleStat}</h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positive}%</li>
          </ul>
        </div>
      </>
    );
  }
}

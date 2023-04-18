import React, { Component } from 'react';
import { Button, FlexWrap } from './ButtonsList.styled';

export default class ButtonsList extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {
    title: null,
  };
  static propTypes = {};

  //Методи лічільника
  handleIncrement = event => {
    if (parseInt(event.target.id) === 1) {
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    } else if (parseInt(event.target.id) === 2) {
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    } else if (parseInt(event.target.id) === 3) {
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
    }

    // console.log('+1');
    console.log(event.target.id);
  };
  // countTotalFeedback();
  // countPositiveFeedbackPercentage()

  render() {
    const { titleBtn, titleStat, id } = this.props;
    const { good, neutral, bad } = this.state;
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
            <li id="1">Good: {good}</li>
            <li id="2">Neutral: {neutral}</li>
            <li id="3">Bad: {bad}</li>
          </ul>
        </div>
      </>
    );
  }
}

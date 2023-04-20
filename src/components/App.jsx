import React from 'react';
import { Component } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Feedback/Section';
import Statistics from './Feedback/Statistics';

export class App extends Component {
  state = {
    // buttoState: ButtonsList.state
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //Метод додавання фідбеку
  addFeedback = evt => {
    // ButtonsList.addFeedback();
    this.setState(prevState => {
      return { [evt.target.name]: prevState[evt.target.name] + 1 };
    });
  };

  //Метод підрахунку Total
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  //Метод підрахунку Positive
  countPositiveFeedbackPercentage() {
    const positivePercentage =
      (this.state.good / this.countTotalFeedback()) * 100;

    return Math.round(positivePercentage);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div>
        <Section>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
// export const App = () => {
//   return (
//     <div>
//       <ButtonsList titleBtn="Please leave feedback" titleStat="Statistics" />
//       <Statistics title="Statistics" good={Statistics.state} />
//     </div>
//   );
// };

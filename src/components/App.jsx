import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackButtons } from './FeedbackButtons/FeedbackButtons';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = stateName => {
    this.setState(prevState => ({
      [stateName]: prevState[stateName] + 1,
    }));
  };

  totalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  positiveFeedback = () => {
    if (this.totalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.totalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackButtons
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackButtons>
        </Section>
        <Section title="Statistics">
          {this.totalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivefeedback={this.positiveFeedback()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}

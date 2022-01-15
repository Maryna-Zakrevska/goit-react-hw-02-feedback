import React, { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
/* import PropTypes from 'prop-types' */

export default class App extends Component {
  /* static propTypes = {
    prop: PropTypes
  }
 */

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveFeedback = (e) => {
    const { name } = e.currentTarget;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : ((good * 100) / total).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <section>
          <h2>Please leave feedback</h2>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.leaveFeedback}></FeedbackOptions>
          
        </section>

        <section title="">
        
          <h2>Statistics</h2>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics> 
        </section>
      </div>
    );
  }
}

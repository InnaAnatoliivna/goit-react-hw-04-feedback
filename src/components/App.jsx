import { useState, useEffect } from 'react';
import Head from 'components/title/head';
import FeedbackOptions from 'components/feedback/feedback';
import Statistics from 'components/statistics/statistics';
import Section from 'components/title/section-title';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onBtnOptions = (option) => {
    if (option === 'good') setGood(good + 1);
    if (option === 'neutral') setNeutral(neutral + 1);
    if (option === 'bad') setBad(bad + 1);
  }
  const countTotalFeedback = () => good + neutral + bad;

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = (total) => {
    if (total !== 0) return Math.round((good / total) * 100);
  }
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage(total)

  return (
    <div className="container">
      <Head
        pageTitle='Cafe Expresso'
      />

      <Section fbTitle='Please leave feedback'>
        <FeedbackOptions
          onLeaveFeedback={onBtnOptions}
          options={Object.keys({ good, neutral, bad })}
        />
      </Section>

      <Section fbTitle='Statistics'>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivOption={positiveFeedbackPercentage}
        />
      </Section>

    </div>
  );
}

// import { Component } from 'react';
// import Head from 'components/title/head';
// import FeedbackOptions from 'components/feedback/feedback';
// import Statistics from 'components/statistics/statistics';
// import Section from 'components/title/section-title';


// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   onBtnOptions = (type) => {
//     this.setState((prevState) => ({ [type]: prevState[type] + 1 }))
//   }

//   countTotalFeedback = ({ good, neutral, bad }) => {
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage = (total) => {
//     const { good } = this.state;
//     if (total !== 0) {
//       return Math.round((good / total) * 100)
//     }
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback(this.state);
//     const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(total)

//     return (
//       <div className="container">
//         <Head
//           pageTitle='Cafe Expresso'
//         />

//         <Section fbTitle='Please leave feedback'>
//           <FeedbackOptions
//             onLeaveFeedback={this.onBtnOptions}
//             options={Object.keys(this.state)}
//           />
//         </Section>

//         <Section fbTitle='Statistics'>
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivOption={positiveFeedbackPercentage}
//           />
//         </Section>

//       </div>
//     );
//   }
// }
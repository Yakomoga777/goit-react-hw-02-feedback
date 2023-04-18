import React from 'react';
import ButtonsList from './Feedback/ButtonsList';
// import Statistics from './Feedback/Statistics';

export const App = () => {
  return (
    <div>
      <ButtonsList titleBtn="Please leave feedback" titleStat="Statistics" />
      {/* <Statistics title="Statistics" /> */}
    </div>
  );
};

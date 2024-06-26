import React from 'react';

const Ticker = ({ messages }) => {
  // Repeat the messages enough times to ensure continuous scrolling
  const repeatedMessages = Array(10).fill(messages).flat();

  return (
    <div className="ticker-wrapper">
      <div className="ticker-content">
        {repeatedMessages.map((message, index) => (
          <span key={index} className="mx-4">{message}</span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;

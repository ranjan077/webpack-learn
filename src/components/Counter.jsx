import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import cat from '../images/cat.jpeg';
import '../scss/counter.scss';

function Counter({ initialCount }) {
  if (!Number.isInteger(initialCount)) {
    throw new Error('Initial value should  be interger.');
  }
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <h2 className="title">
        Count value is
        {' '}
        {count}
      </h2>
      <img className="cat-img" src={cat} alt="funny cat" />
      <button type="button" className="counter-btn" onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
}
Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
};
export default Counter;

/* eslint-disable react/prop-types */
import { useState } from 'react';
import InitVer from './StarRating/InitVer';
import ReviseVer from './StarRating/ReviseVer';

function App() {
  const [rating, setRating] = useState(0);
  const handleRatingChange = (idx) => {
    setRating(idx + 1);
  };
  return (
    <>
      <InitVer max={5} defaultVal={0} />
      <ReviseVer max={5} rating={rating} onChange={handleRatingChange} />
    </>
  );
}

export default App;

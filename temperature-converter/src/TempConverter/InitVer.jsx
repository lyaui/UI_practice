import { useState } from 'react';

const DegreeBox = ({ label, onChange, value }) => {
  const handleInputChange = (event) => {
    onChange(+event.target.value);
  };
  return (
    <div className='degree_container'>
      <input
        value={value}
        type='number'
        className='degree_input'
        onChange={handleInputChange}
      />
      <p>{label}</p>
    </div>
  );
};

export default function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const formatDegree = (n) => {
    return +n.toFixed(4);
  };

  const handleCInputChange = (_c) => {
    setCelsius(_c);
    setFahrenheit(formatDegree(_c * 1.8 + 32));
  };

  const handleFInputChange = (_f) => {
    setFahrenheit(_f);
    setCelsius(formatDegree((_f - 32) / 1.8));
  };

  return (
    <div className='wedge'>
      <DegreeBox
        label='Celsius'
        value={celsius}
        onChange={handleCInputChange}
      />
      <div>=</div>
      <DegreeBox
        label='Fahrenheit'
        value={fahrenheit}
        onChange={handleFInputChange}
      />
    </div>
  );
}

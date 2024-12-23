import { useState } from 'react';

const DegreeBox = ({ label, onChange, value }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <label className='degree_container'>
      <input
        value={value}
        type='number'
        className='degree_input'
        onChange={handleInputChange}
      />
      <p>{label}</p>
    </label>
  );
};

const format = (n) => {
  // Show 4 d.p. if number has more than 4 decimal places.
  // /\.\d{5}/.test(number)
  const [_, decimalPart] = String(n).split('.');
  if (decimalPart && decimalPart.length > 4) {
    return Number(n).toFixed(4);
  }
  return n;
};

export default function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convert = (value, calcFn) => {
    const numericValue = Number(value);
    const isValid = !Number.isNaN(numericValue) && Boolean(value);
    return isValid ? format(calcFn(numericValue)) : '';
  };

  const handleCInputChange = (_c) => {
    setCelsius(_c);
    const format = convert(_c, (_c) => _c * 1.8 + 32);
    setFahrenheit(format);
  };

  const handleFInputChange = (_f) => {
    setFahrenheit(_f);
    const format = convert(_f, (_f) => (_f - 32) / 1.8);
    setCelsius(format);
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

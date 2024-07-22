import { useCallback, useState } from 'react';

import './App.css';

import Input from './components/Input/Input';

const initialState = Array.from(Array(10000).keys()).map(() => '');

function App() {
  const [values, setValues] = useState(initialState);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.dataset.index);

    const index = Number(e.target.dataset.index);

    setValues((prevValues) => [
      ...prevValues.slice(0, index),
      e.target.value,
      ...prevValues.slice(index + 1)
    ])
  }, [setValues]);

  return (
    <div className='App'>
      <header className='App-header'>
        {values.map((value, index) => (
          <Input
            key={index}
            value={value}
            onChange={onChange}
            index={index}
          />
        ))}
      </header>
    </div>
  )
}

export default App

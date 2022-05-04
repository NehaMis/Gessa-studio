import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../app';
import { updateValue } from './testSlice';

const Test = () => {
  const [placeholder, setPlaceholder] = useState('This text changes on input');
  const [text, setText] = useState('');

  const rPlaceholder = useSelector((state: IRootState) => state.test.value);
  const [rText, setRText] = useState('');
  const dispatch = useDispatch();

  const rAppName = useSelector((state: IRootState) => state.appName.value);

  function updateText() {
    setPlaceholder(text);
  }

  return (
    <div>
      <h2>Using State from Local</h2>
      <Typography variant="body1">{placeholder}</Typography>
      <input
        type="text"
        value={text}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      <button onClick={updateText}>Update</button>

      <h2>Using Store from {rAppName}</h2>
      <Typography variant="body1">{rPlaceholder}</Typography>
      <input
        type="text"
        value={rText}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          setRText(e.target.value)
        }
      />
      <button onClick={() => dispatch(updateValue(rText))}>Update</button>
    </div>
  );
};

export default Test;

'use client';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment, setValue } from '@/store/exampleSlice';
import type { AppDispatch, RootState } from '@/store/store';

const Counter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const value = useSelector((state: RootState) => state.example.value);

  return (
    <div>
      <h1>
        Counter:
        {value}
      </h1>
      <button onClick={() => dispatch(increment())} type="button">Increment</button>
      <button onClick={() => dispatch(decrement())} type="button">Decrement</button>
      <button onClick={() => dispatch(setValue(10))} type="button">Set to 10</button>
    </div>
  );
};

export default Counter;

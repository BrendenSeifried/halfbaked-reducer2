import { useEffect, useReducer } from 'react';

const yellowRGB = `rgb(236, 222, 153)`;
const initialCount = 0;

const countReducer = (count, action) => {
  console.log('count', count);
  console.log('action', action);
  switch (action.type) {
    case 'INCREMENT':
      return count + 1;

    case 'DECREMENT':
      return count - 1;

    case 'RESET':
      return 0;

    default:
      return count;
  }
};

const colorReducer = (currentColor, action) => {
  console.log('colour', currentColor);
  console.log('action', action);
  switch (action.type) {
    case 'BASECOLOUR':
      return { color: action.payload.color };

    case 'GREEN':
      return { color: action.payload.color };

    case 'RED':
      return { color: action.payload.color };

    default:
      return currentColor;
  }
};
export default function Counter() {
  const [count, dispatch] = useReducer(countReducer, initialCount);
  const [currentColor, dispatchColor] = useReducer(colorReducer, yellowRGB);

  useEffect(() => {
    if (count === 0) {
      dispatchColor({
        type: 'BASECOLOUR',
        payload: { color: `rgb(236, 222, 153)` },
      });
    }

    if (count > 0) {
      dispatchColor({ type: 'GREEN', payload: { color: `rgb(52, 211, 153)` } });
    }

    if (count < 0) {
      dispatchColor({ type: 'RED', payload: { color: `rgb(239, 68, 68)` } });
    }
  }, [count]);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: currentColor.color }}>
        {count}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={increment}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={decrement}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </main>
  );
}

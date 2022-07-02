import { useReducer } from "react";

interface CounterState {
  counter: number,
  previous: number,
  changes: number
}

type CounterAction =
  | { type: 'increaseBy', payload: { value: number } }
  | { type: 'reset' };

const initialState: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
};

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increaseBy':
      return {
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleClick = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <>
      <h1>Counter Reducer</h1>
      <pre>
        {
          JSON.stringify(state, null, 2)
        }
      </pre>

      <button onClick={() => handleClick(1)}>
        +1
      </button>

      <br />

      <button onClick={() => handleClick(3)}>
        +3
      </button>

      <br />

      <button onClick={() => handleClick(5)}>
        +5
      </button>

      <br />

      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default CounterReducer;
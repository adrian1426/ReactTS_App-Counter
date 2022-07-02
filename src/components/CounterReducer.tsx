import { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer/counterReducer";
import { initialState } from "../reducers/counterReducer/state/initialstate";
import * as CounterActions from '../reducers/counterReducer/actions/counterActions';


const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleClick = (value: number) => {
    dispatch(CounterActions.actionIncreasy(value));
  };

  const handleReset = () => {
    dispatch(CounterActions.actionReset());
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
import { CounterAction, CounterState } from "./interfaces/interfaces";
import { initialState } from "./state/initialstate";

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
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

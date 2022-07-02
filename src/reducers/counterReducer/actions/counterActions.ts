import { CounterAction } from '../interfaces/interfaces';

export const actionReset = (): CounterAction => ({
  type: 'reset'
});

export const actionIncreasy = (value: number): CounterAction => ({
  type: 'increaseBy',
  payload: { value }
});
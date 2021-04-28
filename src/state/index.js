import { useReducer } from 'react';
import reducer from './reducer';
import { DEFAULT_STATE } from './consts';

export default function useGame() {
  return useReducer(reducer, DEFAULT_STATE);
}

import * as React from 'react';
const { useReducer } = React;

/**
 * useReducer is use to manage complex state;
 * inside the useReducer we pass two argument reducer function and default state;
 * inside the reducer function. two argument are use state and action.;
 * action has type and payload property;
 * to call reducer we dispath function i.e. return by useReducer
 */
enum Action {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

function reducer(state, action) {
  switch (action.type) {
    case Action.INCREMENT:
      return { ...state, count: state.count + 1 };
    case Action.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: Action.INCREMENT });
  }

  function decrement() {
    dispatch({ type: Action.DECREMENT });
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      {state.count}
      <button onClick={decrement}>-</button>
    </div>
  );
}

import { createStore } from "redux";

// Action generators - functions that return action abjects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const setCount = ({ count = 0 } = {}) => ({
  type: "SET",
  count
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

// Create the store for actions
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

// Does something each time there is a state change
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - an object that gets sent to the store

// Action without an action generator - Clunky & hard to find errors
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

//Using the action generators above
//INCREMENT
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

//RESET
store.dispatch(resetCount());

//DECREMENT
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

//SET
store.dispatch(setCount({ count: 101 }));

import { createStore, combineReducers, applyMiddleware } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import thunk from "redux-thunk";

//
// STORE CREATION
//
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      // someValue: someReducer,
      expenses: expensesReducer,
      filters: filtersReducer
      // someOtherValue: someOtherReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

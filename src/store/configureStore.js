import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";

//
// STORE CREATION
//

export default () => {
  const store = createStore(
    combineReducers({
      // someValue: someReducer,
      expenses: expensesReducer,
      filters: filtersReducer
      // someOtherValue: someOtherReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

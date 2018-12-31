import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

//
//// Store SUBSCRIBE to view TEST DATA
//
// store.subscribe() does something each time the state changes. In our case console.log.
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

//
////  TEST DATA
//
// store.dispatch(
//   addExpense({ description: "water bill", amount: 4500, createdAt: 100 })
// );
// store.dispatch(
//   addExpense({ description: "gas bill", amount: 50, createdAt: 1000 })
// );
// store.dispatch(
//   addExpense({ description: "rent", amount: 109500, createdAt: 500 })
// );

store.dispatch(sortByDate());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

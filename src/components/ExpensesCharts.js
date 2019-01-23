import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import { PieChart } from "react-easy-chart";

export const ExpensesChart = () => {};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesChart);

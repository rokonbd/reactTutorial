import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "../css/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2019);
  const [filteredExpenses, setFilteredExpenses] = useState(props.items);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    setFilteredExpenses(() => {
      return props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
      });
    });
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;

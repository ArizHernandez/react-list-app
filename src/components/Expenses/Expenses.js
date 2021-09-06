import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const [filteredItems, setFilteredItems] = useState(props.items);
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

  const filterItemsData = (filterDate) => {
    setFilteredYear(filterDate);
    setFilteredItems(
      props.items.filter(
        (item) =>
          item.date.getFullYear().toString() === filterDate && props.items
      )
    );
  };

  return (
    <Card className="expenses">
      <ExpensesFilter filteredYear={filteredYear} onFilteData={filterItemsData} />
      {filteredItems.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;

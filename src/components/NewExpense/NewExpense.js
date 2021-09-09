import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const toggleEditingHandler = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={toggleEditingHandler}>Add new Expense</button>
      ) : (
        <ExpenseForm
          onCancel={toggleEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;

import "./App.css";
import ExpenseForm from "./components/ExpenseTracker/components/ExpenseForm";
import ExpenseList from "./components/ExpenseTracker/components/ExpenseList";
import {useState} from "react";
import ExpenseFilter from "./components/ExpenseTracker/components/ExpenseFilter";
import categories from "./components/ExpenseTracker/category";


function App() {
    const [selectedCategory, setSelectedCategory] = useState('')

    const [expenses, setExpenses] = useState([{
        description: 'Avocado',
        amount: 14,
        category: 'Groceries',
        id: Math.random()
    },{
        description: 'Wrench',
        amount: 50,
        category: 'Utilities',
        id: Math.random()
    },{
        description: 'Toy Car',
        amount: 150,
        category: 'Entertainment',
        id: Math.random()
    },{
        description: 'Toy jet',
        amount: 200,
        category: 'Entertainment',
        id: Math.random()
    },])

    const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses
  return (
    <div>
        <div className="mb-5">
            <ExpenseForm onSubmit={(expense) => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
        </div>
        <div className="mb3">
        <ExpenseFilter onSelectCategory={(categories) => setSelectedCategory(categories)}/>
        </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
    </div>
  );
}

export default App;

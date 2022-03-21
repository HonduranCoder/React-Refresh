import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ExpenseItem from './components/ExpenseItem/ExpenseItem.jsx';
import Items from './components/Items/Items.jsx';
import './App.css';

function App() {
  return (
    <>
      <h1>Expense Items</h1>
      <Items />
    </>
  );
}

export default App;

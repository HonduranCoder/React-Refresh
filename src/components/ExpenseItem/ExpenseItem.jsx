import './ExpenseItem.css';

export default function ExpenseItem({ date, title, amount }) {
  return (
    <div className="expense-item">
      <h3>{date.toISOString().slice(0, 10)}</h3>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h3 className="expense-item__price">${amount}</h3>
      </div>
    </div>
  );
}

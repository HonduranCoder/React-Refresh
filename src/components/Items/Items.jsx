export default function Items() {
  const items = [
    {
      id: 'e1',
      title: 'Food',
      amount: 200,
      date: new Date(2022, 10, 10),
    },
    {
      id: 'e2',
      title: 'Mia',
      amount: '200.0',
      date: new Date(2022, 10, 20),
    },
    {
      id: 'e3',
      title: 'Toiletries',
      amount: 50,
      date: new Date(2022, 10, 30),
    },
    {
      id: 'e4',
      title: 'Car',
      amount: 500,
      date: new Date(2022, 10, 20),
    },
    {
      id: 'e5',
      title: 'Random',
      amount: 200,
      date: new Date(2022, 10, 25),
    },
  ];

  return (
    <ul>
      {items &&
        items.map((item) => (
          <li key={item.id}>
            <div>
              <h2 className="expense-item">
                {item.date.toISOString().slice(0, 10)}
              </h2>
              <h2 className="expense-item__description">{item.title}</h2>
              <h2 className="expense-item__price">{item.amount}</h2>
            </div>
          </li>
        ))}
    </ul>
  );
}

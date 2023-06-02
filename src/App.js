import { useState } from 'react';
import './App.css';
export const data = [
  {
    id: 1,
    item: "shoes",
		price: 100,
		quantity: 1
  },
{
    id: 2,
    item: "jacket",
		price: 400,
		quantity: 1
  },
{
    id: 3,
    item: "hat",
		price: 50,
		quantity: 1
  },
{
    id: 4,
    item: "sunglasses",
		price: 250,
		quantity: 1
  },
{
    id: 5,
    item: "gloves",
		price: 300,
		quantity: 1
  },

];

function App() {
  const [database, setDatabase] = useState(data);
  const [total, setTotal] = useState(0);
  const handleIncrement = (id) =>{
     const updatedDatabase = database.map((item) => item.id === id ? ({...item, quantity:item.quantity+1}) : item)
    setDatabase(updatedDatabase)
  }

  const handleDecrement = (id) =>{
    const updatedDatabase = database.map((item) => item.id === id ? ({...item,quantity: item.quantity-1}) : item)
    setDatabase(updatedDatabase)
  }
// setTotal(database.reduce((acc,curr) => acc + curr.price * curr.quantity, 0));
  return (
    <div className="App">
      {database.map((item ) => 
      <div key={item.id}>
        {item.item} ({item.price}$)
        <button onClick={() => handleIncrement(item.id)}> + </button>
        {item.quantity}
        <button onClick={() => handleDecrement(item.id)}> - </button>
      </div> 
      )}
      <div>
        Total - {total}$
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fruitsApi = 'http://localhost:4000/market/fruits';
const meatsApi = 'http://localhost:4000/market/meats';

export default function Market({ user }) {
  const [stock, setStock] = useState({
    fruits: [],
    meats: [],
  });

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(cart.concat(item));
  };

  useEffect(() => {
    const fruitsPromise = axios.get(fruitsApi);
    const meatsPromise = axios.get(meatsApi);
    Promise.all([fruitsPromise, meatsPromise])
      .then(([fruitsAxiosRes, meatsAxiosRes]) => {
        setStock({
          fruits: fruitsAxiosRes.data,
          meats: meatsAxiosRes.data,
        });
      });
  }, []);

  return (
    <div className="component" style={{ borderColor: 'blue' }}>
      <h5>{user}&apos;s Shopping:</h5>
      <Fruits fruits={stock.fruits} addToCart={addToCart} />
      <Fruits fruits={stock.meats} addToCart={addToCart} /><br />
      <Cart items={cart} />
    </div>
  );
}

function Cart(props) {
  const { items } = props;
  return (
    <>
      {
        items.length
          ? items.map((item, idx) => <div key={idx}>{item}</div>)
          : <div>Nothing in the cart. Sad!</div>
      }
    </>
  );
}

function Fruit(props) {
  const { name, addToCart } = props;
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => addToCart(name)}>Add To Cart</button>
    </div>
  );
}

function Fruits(props) {
  const { fruits, addToCart } = props;
  return (
    <>
      {
        fruits.map(
          (fruitName) => (
            <Fruit
              key={fruitName}
              name={fruitName}
              addToCart={addToCart}
            />
          ))
      }
    </>
  );
}

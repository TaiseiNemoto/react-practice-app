'use client';

import { useState } from 'react';

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId: number) {
    setProducts(
      products.map((product) => {
        if (productId !== product.id) return product;
        else
          return {
            ...product,
            count: product.count + 1,
          };
      }),
    );
  }

  function handleDecreaseClick(productId: number) {
    setProducts(
      products
        .map((product) => {
          if (productId !== product.id) return product;
          else
            return {
              ...product,
              count: product.count - 1,
            };
        })
        .filter((product) => product.count > 0),
    );
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button
            className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
            onClick={() => {
              handleDecreaseClick(product.id);
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  );
}

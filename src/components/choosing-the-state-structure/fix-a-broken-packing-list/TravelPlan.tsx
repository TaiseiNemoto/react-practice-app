'use client';

import { useState } from 'react';
import AddItem from './AddItem';
import PackingList from './PackingList';

let nextId = 3;

const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];

type Item = {
  id: number;
  title: string;
  packed: boolean;
};

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  const packedItemsCount = items.filter((item) => item.packed).length;

  function handleAddItem(title: string) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  }

  function handleChangeItem(nextItem: Item) {
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) return nextItem;
        else return item;
      }),
    );
  }

  function handleDeleteItem(itemId: number) {
    setItems(items.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {packedItemsCount} out of {items.length} packed!
      </b>
    </>
  );
}

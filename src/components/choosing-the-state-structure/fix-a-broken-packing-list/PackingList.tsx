'use client';

type Item = {
  id: number;
  title: string;
  packed: boolean;
};

type PackingListProps = {
  items: Item[];
  onChangeItem: (arg: Item) => void;
  onDeleteItem: (arg: number) => void;
};

export default function PackingList({
  items,
  onChangeItem,
  onDeleteItem,
}: PackingListProps) {
  return (
    <ul>
      {items.map((item: Item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={(e) => {
                onChangeItem({
                  ...item,
                  packed: e.target.checked,
                });
              }}
            />{' '}
            {item.title}
          </label>
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

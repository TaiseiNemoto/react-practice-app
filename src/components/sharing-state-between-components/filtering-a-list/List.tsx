type Food = {
  id: number;
  name: string;
  description: string;
};

type ListProps = {
  items: Food[];
};

export default function List({ items }: ListProps) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

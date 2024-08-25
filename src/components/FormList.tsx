interface FormList {
  id: number;
  Name: string;
  Price: number;
  category: string;
}

interface Props {
  expenses: FormList[];
  onDelete: (id: number) => void;
}

const FormList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <table className="table table-bordered m-3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((item) => (
          <tr key={item.id}>
            <td>{item.Name}</td>
            <td>{item.Price}</td>
            <td>{item.category}</td>
            <td>
              <button
                onClick={() => onDelete(item.id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            ${expenses.reduce((acc, item) => item.Price + acc, 0).toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default FormList;

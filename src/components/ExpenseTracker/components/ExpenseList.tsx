interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}


interface Props {
    expenses: Expense[];
    onDelete: (id: number) => void
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
    if(expenses.length === 0 ) return null

  return (
      <div className="mb-3">
          <table className="table">
              <thead>
              <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Category</th>
                  <th scope="col">Delete</th>
              </tr>
              </thead>
              <tbody>
              {expenses.map(elem => <tr key={elem.id}>
                  <td>{elem.description}</td>
                  <td>{elem.amount}</td>
                  <td>{elem.category}</td>
                  <td>
                      <button className='btn btn-outline-danger' onClick={() => onDelete(elem.id)}>Delete</button>
                  </td>
              </tr>)}
              </tbody>
              <tfoot>
              <tr>
                  <td>Total</td>
                  <td>${expenses.reduce((acc, expnese) => expnese.amount + acc, 0).toFixed(2)}</td>
                  <td></td>
                  <td></td>
              </tr>
              </tfoot>
          </table>
      </div>
  )
}

export default ExpenseList
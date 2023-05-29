import categories from "../category";
interface Props {
    onSelectCategory: (category: string) => void
}

const ExpenseFilter = ({onSelectCategory}: Props) => {
  return (
      <select className='form-select' onChange={(event) => onSelectCategory(event.target.value)}>
          <option value=''>All categories</option>
          {categories.map((elem, index) => {
              return <option key={index} value={elem}>{elem}</option>
          })}
      </select>
  )
}

export default ExpenseFilter
type FormType = {
  title: string,
  item: ItemType,
}
type ItemType = {
  name: string,
}
const Form: React.FC<FormType> = (props) => {
  const { item } = props
  const postValue  = (value: string, itemName: string) => {
    fetch(`http://localhost:8000/api/expenses/incomes/amounts`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({itemName, value})
    })
  }

  return (
    <>      
      <form className='pt-2' key={item.name}>
        <label>
          {item.name}:
          <input type="number" onChange={event => postValue(event.target.value, item.name)} className='ml-2 border border-cyan-300 rounded' />
        </label>
      </form>
    </>
  )
}

export default Form
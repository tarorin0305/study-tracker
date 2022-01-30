type FormType = {
  title: string,
  item: ItemType,
}
type ItemType = {
  name: string,
  path: string,
}
const Form: React.FC<FormType> = ({ title, item }) => {
  const postValue  = (value: string, itemPath: string) => {
    fetch(`http://localhost:8000/api/expenses/${itemPath}`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({value})
    })
  }

  return (
    <>      
      <form className='pt-2' key={item.name}>
        <label>
          {item.name}:
          <input type="number" onChange={event => postValue(event.target.value, item.path)} className='ml-2 border border-cyan-300 rounded' />
        </label>
      </form>
    </>
  )
}

export default Form
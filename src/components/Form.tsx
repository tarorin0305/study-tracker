import React, { useState } from "react"
type ItemType = {
  name: string,
  path: string,
}
type Props = {
  title: string;
  items: ItemType[];
}

const Form: React.FC<Props> = ({ title, items }) => {
  const [itemValue, setItemValue] = useState(0);

  const postValue  = (value: string, itemPath: string) => {
    fetch(`http://localhost:8000/api/expenses/${itemPath}`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({value})
    })
    setItemValue(parseInt(value));
  }
  const itemForms = items.map((item) => (
    <form className='pt-2' key={item.name}>
      <label>
        {item.name}:
        <input type="number" onChange={event => postValue(event.target.value, item.path)} className='ml-2 border border-cyan-300 rounded' />
      </label>
    </form>
  ))

  return (
    <>
      <p className='text-center'>{title}</p>
      {itemForms}
    </>
  )
}

export default Form
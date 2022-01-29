import React, { useRef } from "react"
type ItemType = {
  name: string,
  path: string,
}
type Props = {
  title: string;
  items: ItemType[];
}

const Form: React.FC<Props> = ({ title, items }) => {
  const itemValue = useRef<HTMLInputElement>(null);
  const postValue: React.ChangeEventHandler<HTMLInputElement> = ev => {
    itemValue.current !== null ? console.log(itemValue.current.value) : console.log(itemValue.current)
  }
  const itemForms = items.map((item) => (
    <form className='pt-2'>
      <label>
        {item.name}:
        <input ref={itemValue} type="number" onChange={postValue} className='ml-2 border border-cyan-300 rounded' />
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
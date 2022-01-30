import { useState } from "react"

const DeleteForm = ({removeItem = (f: any) => f}) => {
  const [removalItemName, setRemovalItemName] = useState('')

  const removeItemByName = (event: any) => {
    event.preventDefault();
    removeItem(removalItemName);
  }

  return (
    <>
      <form onSubmit={removeItemByName} className='mt-5'>
        <label>
          指定した項目を削除:
          <br/>
          <input onChange={event => setRemovalItemName(event.target.value)} type="text" className='ml-2 border border-cyan-300 rounded' />
        </label>
        <button className="ml-2 border rounded">削除</button>
      </form>
    </>
  )
}

export default DeleteForm
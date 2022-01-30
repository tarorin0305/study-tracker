import React, { useState } from "react"
const AddForm = ({ onNewItem = (f: any) => f }) => {
  const [NewItem, setNewItem] = useState<string>();

  const submit = (event: any) => {
    event.preventDefault()
    onNewItem(NewItem)
    console.log(event)
  }
  return (
    <>
      <form onSubmit={submit} className='pt-2'>
        <label>
          新しい項目を追加:
          <input onChange={event => setNewItem(event.target.value)} type="text" className='ml-2 border border-cyan-300 rounded' />
        </label>
        <button>追加</button>
      </form>
    </>
  )
}

export default AddForm
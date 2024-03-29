import { useState } from "react"
const AddForm = ({ setNewItem = (f: any) => f, postNewItemToApi = (f: any) => f }) => {
  const [newItemName, setNewItemName] = useState('')

  const setNewItems = (event: any) => {
    event.preventDefault()
    setNewItem({ name: newItemName, })
    setNewItemName('')
    postNewItemToApi(null) // 引数を取らない関数オブジェクトを、引数として受け取る場合の型注釈にあとで変える
    console.log(event.target)
  }
  return (
    <>
      <form onSubmit={setNewItems} className='mt-5'>
        <label>
          新しい項目を追加:
          <br/>
          <input value={newItemName} onChange={event => setNewItemName(event.target.value)} type="text" className='ml-2 border border-cyan-300 rounded' />
        </label>
        <button className="ml-2 border rounded">追加</button>
      </form>
    </>
  )
}

export default AddForm
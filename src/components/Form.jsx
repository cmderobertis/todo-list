import React, { useState } from "react"

const Form = (props) => {
  const { dispatch } = props
  const [item, setItem] = useState("")

  const handleChange = (e) => {
    setItem(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch({ type: "create", payload: item })
  }

  return (
    <div className="col">
      <form className="mt-3">
        <label htmlFor="item">Item: </label>
        <input type="text" name="item" value={item} onChange={handleChange} />
        <button className="btn btn-primary" onClick={handleClick}>
          Add Item
        </button>
      </form>
    </div>
  )
}

export default Form

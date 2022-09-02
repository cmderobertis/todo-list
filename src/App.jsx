import "./cyborg_bootstrap.css"
import React, { useReducer } from "react"
import Form from "./components/Form"
import List from "./components/List"

function App() {
  //
  const initialState = []

  const reducer = (state, action) => {
    switch (action.type) {
      case "create":
        return [
          ...state,
          { id: Date.now(), name: action.payload, complete: false },
        ]
      case "check":
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, complete: !item.complete }
          }
          return item
        })
      case "delete":
        return state.filter((item) => item.id !== action.payload.id)
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  //

  return (
    <div className="container-xxl">
      <div className="row mt-3">
        <Form dispatch={dispatch} />
      </div>
      <div className="row mt-3">
        <List state={state} dispatch={dispatch} />
      </div>
    </div>
  )
}

export default App

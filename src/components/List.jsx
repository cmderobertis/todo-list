import React from "react"

const List = (props) => {
  const { state, dispatch } = props

  return (
    <div className="col">
      <div className="card">
        <div className="card-header text-center">
          <h2>ToDo</h2>
        </div>
        <div className="card-body pb-0">
          {state.map((item) => {
            return (
              <div key={item.id} className="row justify-content-between mb-3">
                <div className="col">
                  <p
                    className="mb-0"
                    style={{
                      textDecoration: item.complete ? "line-through" : "none",
                    }}
                  >
                    {item.name}
                  </p>
                </div>
                <div className="col-3 text-end">
                  <input
                    className=""
                    type="checkbox"
                    name="complete"
                    id=""
                    checked={item.complete}
                    onClick={() =>
                      dispatch({ type: "check", payload: { id: item.id } })
                    }
                  />
                  <button
                    className="btn btn-danger ms-3"
                    onClick={() =>
                      dispatch({ type: "delete", payload: { id: item.id } })
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default List

import React from 'react'

const AddMe = props => {
  return(
    <div>
      <form onSubmit={props.handleOnSubmit}>
        <input 
          type="text"
          onChange={props.handleOnChange}
        />
        <button>add me</button>
      </form>
    </div>
  )
}

export default AddMe
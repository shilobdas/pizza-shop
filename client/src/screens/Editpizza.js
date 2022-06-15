import React from 'react'

export default function Editpizza(match) {
  return (
    <div>
      <h1>Edit Pizza</h1>
      <h1>Pizza Id = {match.params.pizzaid}

      </h1>
    </div>
  )
}

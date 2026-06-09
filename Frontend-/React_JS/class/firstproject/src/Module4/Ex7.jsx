import React, { useState } from 'react'

function Ex7() {
  const [image, setImage] = useState(
    'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22200%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22300%22%20height%3D%22200%22%20fill%3D%22%233b82f6%22/%3E%3Ctext%20x%3D%22150%22%20y%3D%22110%22%20fill%3D%22%23ffffff%22%20font-size%3D%2230%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EDefault%3C/text%3E%3C/svg%3E'
  )

  const changeA = () => {
    setImage(
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22200%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22300%22%20height%3D%22200%22%20fill%3D%22%23ef4444%22/%3E%3Ctext%20x%3D%22150%22%20y%3D%22110%22%20fill%3D%22%23ffffff%22%20font-size%3D%2230%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EAngular%3C/text%3E%3C/svg%3E'
    )
  }

  const changeR = () => {
    setImage(
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22200%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22300%22%20height%3D%22200%22%20fill%3D%22%230db7d8%22/%3E%3Ctext%20x%3D%22150%22%20y%3D%22110%22%20fill%3D%22%23ffffff%22%20font-size%3D%2230%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EReact%3C/text%3E%3C/svg%3E'
    )
  }

  return (
    <div>
      <img src={image} alt="Selected framework" style={{ maxWidth: '100%', height: 'auto' }} />
      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
        <button onClick={changeA}>Angular</button>
        <button onClick={changeR}>React</button>
      </div>
    </div>
  )
}

export default Ex7

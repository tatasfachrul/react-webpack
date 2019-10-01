import React from 'react'

function ProductList (props) {
  const ProductList = props.menu
  return (
    <ul>
      {
        ProductList.map((item, index) => {
          return (
            <li key={index}>
              <div>
              Nama : {item.name}
              </div>
              <div>
              Nama : {item.price}
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ProductList

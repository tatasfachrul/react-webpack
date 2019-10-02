import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductList from '../Components/ListProducts'

function Menu() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData () {
    const result =  await axios.get('http://localhost:3020/menu')
    setData(result.data.data)
    } 

  return(
    <div>
      <div>
        This is Menu!
        <ProductList menu={data} />
      </div>
    </div>
  )
}

export default Menu
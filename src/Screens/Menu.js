import React, { Component } from 'react'
import axios from 'axios'
import ProductList from '../Components/ListProducts'

class Menu extends Component {
  constructor(props) {
    super()
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    await this.getAll()
    console.log('ComponentDidMount', this.state.data)
  }

  getAll = async () => {
    await axios.get('http://localhost:3020/menu')
      .then(result => {
        console.log(result.data.data)
        this.setState({data: result.data.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        This is Menu!
       <ProductList menu={this.state.data} />
      </div>
    )
  }
}

export default Menu
import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import { getMenu } from '../Public/Redux/Actions/Menu'

import ProductList from '../Components/ListProducts'

class Menu extends Component {
  constructor(props){
    super(props)
    this.state ={
      data: []
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  async fetchData () {
    await this.props.dispatch(getMenu())
    console.log(this.props.data.menuList)
    this.setState({data: this.props.data.menuList})
    } 

render(){
  return(
    <div>
      <div>
        This is Menu! 2
        <ProductList menu={this.state.data} />
      </div>
    </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    data: state.menuList
  }
}

export default connect (mapStateToProps)(Menu)
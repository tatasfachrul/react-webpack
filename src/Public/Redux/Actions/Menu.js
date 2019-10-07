import axios from 'axios'

export const getMenu = (test) => {
  console.log('action ' + test)
  return {
    type: 'GET_MENU',
    payload: axios.get('http://127.0.0.1:3020/menu')
  }
}

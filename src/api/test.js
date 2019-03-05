import axios from '@/http'
// import { getUrl } from './path'
const test = {
  getContacts () {
    return axios({
      method: 'get',
      url: '/api/data'
    })
  }
}

export default test

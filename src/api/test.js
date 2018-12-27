import axios from '@/http'
import { getUrl } from './path'

const test = {
  getContacts () {
    return axios({
      method: 'get',
      url: getUrl('users/contacts')
    })
  }
}

export default test

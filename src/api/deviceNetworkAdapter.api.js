import axios from 'axios'
import { API_BACKEND } from './config.js'

export async function getDeviceNetworkAdapter(ipv4) {

  const res = await axios.get(`http://${ API_BACKEND }/device/${ipv4}/network-adapter`)

  return res.data
}

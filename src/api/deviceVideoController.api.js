import axios from 'axios'
import { API_BACKEND } from './config.js'

export async function getDeviceVideoController(ipv4) {

  const res = await axios.get(`http://${ API_BACKEND }/device/${ipv4}/video-controller`)

  return res.data
}

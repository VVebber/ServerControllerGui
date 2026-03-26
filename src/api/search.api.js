import axios from 'axios'
import { API_BACKEND } from './config.js'

export async function getOsStats() {
  const res = await axios.get(`http://${ API_BACKEND }/device/search/os-stats`)

  return res.data
}

export async function getCidrStats() {
  const res = await axios.get(`http://${API_BACKEND}/network/search/cidr-stats`)

  return res.data
}

export async function searchDevices(filters) {
  const res = await axios.post(`http://${API_BACKEND}/device/search`, filters)
  return res.data
}

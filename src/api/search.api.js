import axios from 'axios'
import { API_BACKEND } from './config.js'

export async function getCidrStats() {
  const res = await axios.get(`http://${API_BACKEND}/network/search/cidr-stats`)

  return res.data
}

export async function getOsStats() {
  const res = await axios.get(`http://${ API_BACKEND }/device/search/os-stats`)

  return res.data
}

export async function getBaseBoardStats() {
  const res = await axios.get(`http://${API_BACKEND}/device/search/baseboard-stats`)

  return res.data
}

export async function getCpuStats() {
  const res = await axios.get(`http://${API_BACKEND}/device/search/cpu-stats`)

  return res.data
}

export async function getMemoryStats() {
  const res = await axios.get(`http://${API_BACKEND}/device/search/memory-stats`)

  return res.data
}


export async function getDiskStats() {
  const res = await axios.get(`http://${API_BACKEND}/device/search/disk-stats`)

  return res.data
}


export async function getLogicalDiskStats() {
  const res = await axios.get(`http://${API_BACKEND}/device/search/logical-disk-stats`)

  return res.data
}


export async function getNetworkAdapterStats() {
  const res = await axios.get(`http://${API_BACKEND}/device/search/network-adapter-stats`)

  return res.data
}


export async function getGpuStats() {
  const res = await axios.get(`http://${API_BACKEND}/device/search/gpu-stats`)

  return res.data
}


export async function getUserStats() {
  const res = await axios.get(`http://${API_BACKEND}/device/search/user-stats`)

  return res.data
}


export async function getPingStats() {
  const res = await axios.get(`http://${API_BACKEND}/device/search/ping-stats`)

  return res.data
}

export async function searchDevices(filters, page, limit = 7) {
  const res = await axios.post(`http://${API_BACKEND}/device/search`, {
    ...filters,
    page,
    limit
  })
  return res.data
}


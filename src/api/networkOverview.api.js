import axios from 'axios'
import { API_AGENT, API_BACKEND } from './config.js'

export async function getOverview() {
  const res = await axios.get(`http://${API_BACKEND}/network`)

  return res.data
}

export async function getDeviceStatus(ip) {
  if (!ip) return

  const statusInfo = {
    uiClass: 'status-error',
    label: 'offline',
  }

  try {
    const res = await axios.post(
      `http://${API_AGENT}/ping`,
      { ip: ip },
      { headers: { 'Content-Type': 'application/json' } },
    )

    if (res.status == 200 && res.data.status == 'online') {
      statusInfo.uiClass = 'status-online'
      statusInfo.label = 'online'
    } else if (res.status == 200 && res.data.status == 'offline') {
      statusInfo.uiClass = 'status-offline'
      statusInfo.label = 'offline'
    } else {
    }
  } catch (e) {
    if (e.res?.status == 500) {
      statusInfo.uiClass = 'status-error'
      statusInfo.label = 'error'
    } else if (e.res?.status == 400) {
      statusInfo.uiClass = 'status-error'
      statusInfo.label = 'error'
    } else {
      alert(e)
    }
  }

  statusInfo.checkedAt = new Date().toLocaleTimeString();
  return statusInfo
}

import axios from "axios";
import { API_AGENT } from './config.js'


export async function sendCommand(deviceInfo){
  const res = axios.post(`http://${ API_AGENT }/devices/terminal-WinRM`, {
    deviceInfo,
  });

  return res.data
};

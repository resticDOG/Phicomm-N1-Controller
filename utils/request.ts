import { showToast } from ".";
import { APP_STATE_KEY } from '../constants'
import { getData } from '../utils/db'

export async function request(uri: string, method: 'GET' | 'POST' = 'GET', data?: object): Promise<any> {
  try {
    const settings = await getData(APP_STATE_KEY)
    if (!settings?.ipAddress) {
      showToast('未设置ip')
      return
    }
    const response = await fetch(`http://${settings.ipAddress}:8080/${uri}`, {
      method: method,
      body: JSON.stringify(data)
    })
    const json = await response.json()
    return json
  } catch (error) {
    showToast('按键事件错误')
    console.error(error);
  }
}
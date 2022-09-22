import { showToast } from ".";

const DOMAIN = '192.168.5.180'

export async function request(uri: string, method: 'GET' | 'POST' = 'GET', data?: object): Promise<any> {
  try {
    if (!DOMAIN) {
      showToast('未设置ip')
      return
    }
    const response = await fetch(`http://${DOMAIN}:8080/${uri}`, {
      method: method,
      body: JSON.stringify(data)
    })
    const json = await response.json()
    console.log(json);
    return json
  } catch (error) {
    showToast('按键事件错误')
    console.error(error);
  }
}
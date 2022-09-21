const DOMAIN = '192.168.5.180'

export async function request(uri: string, method: 'GET' | 'POST' = 'GET', data?: object): Promise<any> {
  try {
    const response = await fetch(`http://${DOMAIN}:8080/${uri}`, {
      method: method,
      body: JSON.stringify(data)
    })
    const json = await response.json()
    console.log(json);
    return json
  } catch (error) {
    console.error(error);
  }
}
import { Keycode } from "../components/ControlButton";
import { request } from "../utils/request";

export const press = (keycode: Keycode, longclick: boolean) => {
  request('v1/keyevent', 'POST', {
    keycode,
    longclick,
  })
}

export const getStatus = async(): Promise<{ name: string,  sn: string, online: number} | undefined> => {
  try {
    return request('v1/status', 'GET')
  } catch (error) {
    return;
  }
}
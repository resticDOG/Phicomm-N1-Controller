import { Keycode } from "../components/ControlButton";
import { request } from "../utils/request";

export const press = (keycode: Keycode) => {
  request('v1/keyevent', 'POST', {
    keycode: keycode,
    longclick: 'false'
  })
}
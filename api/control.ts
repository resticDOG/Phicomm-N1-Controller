import { Keycode } from "../components/ControlButton";
import { request } from "../utils/request";

export const press = (keycode: Keycode, longclick: boolean) => {
  request('v1/keyevent', 'POST', {
    keycode,
    longclick,
  })
}
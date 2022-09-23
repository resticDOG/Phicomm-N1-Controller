import { Keycode } from "../components/ControlButton";
import { request } from "../utils/request";

export const press = (keycode: Keycode, longclick: boolean) => {
  request('v1/keyevent', 'POST', {
    keycode,
    longclick,
  })
}

export const getStatus = async (): Promise<{ name: string,  sn: string, online: number} | undefined> => {
  return request('v1/status', 'GET')
}

export type AppListResponse = {
  apps: Array<{
          appid: string,  
          activity: string, 
          name: string, 
          package: string
        }>
  count: number,
}

export const getAppList = async (): Promise<AppListResponse | undefined> => {
  return request('v1/applist', 'GET')
}

export const openApp = async ( params :{ package: string, activity: string }) => {
  request('v1/application', 'POST', params)
}
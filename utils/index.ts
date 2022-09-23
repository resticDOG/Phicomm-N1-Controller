import Toast from "react-native-root-toast";
import { Vibration } from 'react-native'
import Colors from "../constants/Colors";
import { pressDurations } from '../constants'

export function showToast(message: string) {
  Toast.show
  Toast.show(message, { 
    duration: Toast.durations.SHORT,
    shadow: true,
    backgroundColor: Colors.light.toastBgColor
  })
}

export function pressVibrate(longPress: boolean) {
  Vibration.vibrate(longPress ? pressDurations.LONG : pressDurations.SHORT)
}
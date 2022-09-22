import Toast from "react-native-root-toast";
import Colors from "../constants/Colors";

export function showToast(message: string) {
  Toast.show
  Toast.show(message, { 
    duration: Toast.durations.SHORT,
    shadow: true,
    backgroundColor: Colors.light.toastBgColor
  })
}
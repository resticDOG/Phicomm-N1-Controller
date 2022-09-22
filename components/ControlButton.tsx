import { FontAwesome } from '@expo/vector-icons';
import { Pressable, StyleProp, StyleSheet, Vibration } from 'react-native';

import Colors from '../constants/Colors';
import { Text } from './Themed';
import { press } from '../api/control';

export enum Keycode {
  POWER = 26,

  BACK = 4,
  HOME = 3,
  MENU = 82,

  VOLUME_UP = 24,
  VOLUME_DOWN = 25,
  MUTE = 164,
  
  UP = 19,
  DOWN = 20,
  LEFT = 21,
  RIGHT = 22,
  OK = 23,
}

type ControlButtonProps = {
  title: string
  code: Keycode
  icon?: React.ComponentProps<typeof FontAwesome>['name']
  color?: string
  style?: StyleProp<any>
}

export default function ControlButton({title = '', code, icon, color =  '#fff', style}: ControlButtonProps) {
  return (
    <Pressable 
      style={({ pressed }) => [{ 
          backgroundColor: pressed ? Colors.light.controlPressedBgColor : Colors.light.controlBgColor
        }, 
        styles.button, 
        style
      ]} 
      onPress={() => handlePress(code, false)} 
      onLongPress={() => handlePress(code, true)} 
    >
      {
        icon 
        ? <FontAwesome
            name={icon}
            size={25}
            color={color}
          />
        : <Text style={styles.text} >{ title }</Text>
      }
    </Pressable>
  );
}

function handlePress(code: Keycode, longPress: boolean) {
  Vibration.vibrate(20)
  press(code, longPress)
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

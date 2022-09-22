import { FontAwesome } from '@expo/vector-icons';
import { Pressable, StyleProp, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';
import { press } from '../api/control';

export enum Keycode {
  POWER = 26,

  BACK = 4,
  HOME = 3,
  MENU = 82,

  VOLUME_UP = 25,
  VOLUME_DOWN = 24,
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
    <Pressable style={[styles.button, style]} onPress={() => press(code)} >
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

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#183153',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

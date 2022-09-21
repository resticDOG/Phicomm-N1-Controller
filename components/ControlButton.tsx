import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
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

export default function ControlButton({title = '', code}: {title: string, code: Keycode}) {
  return (
    <Pressable style={styles.button} onPress={() => press(code)} >
      <Text style={styles.text} >{ title }</Text>
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
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

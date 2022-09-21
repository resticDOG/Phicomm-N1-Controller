import { Button, StyleSheet, TouchableOpacity } from 'react-native';

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
    <View style={styles.container} >
      <Button title={title} onPress={() => press(code)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 10,
    width: 10,
  },
});

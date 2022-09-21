import { StyleSheet } from 'react-native';

import ControlButton, { Keycode } from '../components/ControlButton';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ControlPanel() {
  return (
    <View style={styles.container}>
      <ControlButton title="电源" code={Keycode.POWER} />
      <ControlButton title="↑" code={Keycode.UP} />
      <ControlButton title="↓" code={Keycode.DOWN} />
      <ControlButton title="←" code={Keycode.LEFT} />
      <ControlButton title="→" code={Keycode.RIGHT} />
      <ControlButton title="OK" code={Keycode.OK} />
      <ControlButton title="Back" code={Keycode.BACK} />
      <ControlButton title="Home" code={Keycode.HOME} />
      <ControlButton title="Menu" code={Keycode.MENU} />
      <ControlButton title="静音" code={Keycode.MUTE} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

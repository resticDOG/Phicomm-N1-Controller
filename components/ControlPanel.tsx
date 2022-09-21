import { StyleSheet } from 'react-native';

import ControlButton, { Keycode } from '../components/ControlButton';
import { Text, View } from '../components/Themed';
import colors from '../constants/Colors';

export default function ControlPanel() {
  return (
    <View style={styles.container}>
      <ControlButton title="电源" code={Keycode.POWER} />
      <ControlButton title="↑" code={Keycode.UP} />
      <View style={styles.center}>
        <ControlButton title="←" code={Keycode.LEFT} />
        <ControlButton title="OK" code={Keycode.OK} />
        <ControlButton title="→" code={Keycode.RIGHT} />
      </View>
      <ControlButton title="↓" code={Keycode.DOWN} />
      
      <View style={styles.center}>
        <ControlButton title="Menu" code={Keycode.MENU} />
        <ControlButton title="Home" code={Keycode.HOME} />
        <ControlButton title="Back" code={Keycode.BACK} />
      </View>
      
      <ControlButton title="Mute" code={Keycode.MUTE} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fefefe',
  },
  center: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

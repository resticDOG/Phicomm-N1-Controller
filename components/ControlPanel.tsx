import { StyleSheet } from 'react-native';

import ControlButton, { Keycode } from '../components/ControlButton';
import { Text, View } from '../components/Themed';
import colors from '../constants/Colors';

export default function ControlPanel() {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ControlButton title="电源" icon='power-off' color='#fa5035' code={Keycode.POWER} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={[styles.center, styles.spaceEvenly]}>
        <ControlButton title="+" icon='plus' code={Keycode.VOLUME_UP} />
        <ControlButton title="Mute" icon='volume-off' code={Keycode.MUTE} />
        <ControlButton title="-" icon='minus' code={Keycode.VOLUME_DOWN} />
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ControlDirection />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={[styles.center, styles.spaceEvenly]}>
        <ControlButton title="Menu" icon="bars" code={Keycode.MENU} />
        <ControlButton title="Home" icon="home" code={Keycode.HOME} />
        <ControlButton title="Back" icon="arrow-left" code={Keycode.BACK} />
      </View>
    </View>
  );
}

export function ControlDirection() {
  return (
    <View style={styles.containerDirection}>
      <ControlButton style={styles.direction} title="↑" icon="caret-up" code={Keycode.UP} />
      <View style={styles.center}>
        <ControlButton style={styles.direction} title="←" icon="caret-left" code={Keycode.LEFT} />
        <ControlButton style={[styles.direction, styles.ok]} title="OK" icon="circle" code={Keycode.OK} />
        <ControlButton style={styles.direction} title="→" icon="caret-right" code={Keycode.RIGHT} />
      </View>
      <ControlButton style={styles.direction} title="↓" icon="caret-down" code={Keycode.DOWN} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fefefe',
  },
  containerDirection: {
    alignItems: 'center'
  },
  center: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly'
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  direction: {
    width: 80,
    height: 80,
  },
  ok: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 30,
  }
});

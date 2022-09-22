import { StyleSheet } from 'react-native';

import ControlPanel from '../components/ControlPanel';
import { View } from '../components/Themed';

export default function ControlScreen() {
  return (
    <View style={styles.container}>
      <ControlPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text as DefaultText, StyleSheet } from 'react-native';


export default function RemoteStatus() {
  const [online, setOnline] = useState(false)
  return (
    <View style={styles.container}>
      <FontAwesome name={online ? 'check-circle' : 'times-circle' } size={20} color={online ? 'green' : 'red'} />
      <DefaultText> {online ? '斐讯盒子N1' : '未连接'}</DefaultText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 15,
    width: '23%',
    justifyContent: 'space-evenly'
  }
})

import { FontAwesome } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { View, Text as DefaultText, StyleSheet } from 'react-native';
import { getStatus } from '../api/phicomm';
import { GET_STATUS_FETCH_INTERVAL } from '../constants';

export default function RemoteStatus() {
  const [online, setOnline] = useState(false)
  const [title, setTitle] = useState('未连接')
  useEffect(() => {
    const fetchStatus = async () => {
      const status = await getStatus()
      if (status?.online === 0) {
        setOnline(true)
        setTitle(status.name)
      } else {
        setOnline(false)
        setTitle('连接失败')
      }
    }
    
    const intervalId = setInterval(() => {
      fetchStatus()
      .catch(err => {
        console.error(err)
        setOnline(false)
        setTitle('连接失败')
      })
    }, GET_STATUS_FETCH_INTERVAL)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return (
    <View style={styles.container}>
      <FontAwesome name={online ? 'check-circle' : 'times-circle' } size={20} color={online ? 'green' : 'red'} />
      <DefaultText> {title}</DefaultText>
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

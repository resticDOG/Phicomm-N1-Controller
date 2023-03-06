import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Switch, StatusBar, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Text, View } from '../components/Themed'
import { saveData, getData } from '../utils/db'
import { DEFAULT_SETTINGS, APP_STATE_KEY } from '../constants'

const AppListScreen = () => {
  
  const [ipAddress, onChangeIpAddress] = useState('192.168.5.184')

  function onChangeText(text: string) {
    onChangeIpAddress(text) 
  }

  function onPress() {
    saveData(APP_STATE_KEY, {
      ...DEFAULT_SETTINGS,
      ipAddress,
    })
  }

  return (
    <View style={styles.container}>
      <SafeAreaView >
        <View style={styles.inputInline}>
          <Text style={styles.label}>盒子IP地址</Text>
          <TextInput 
            style={styles.inputText} 
            onChangeText={onChangeText}
            placeholder="请输入盒子IP地址"
            value={ipAddress}
          />
        </View>
        <View style={styles.button}>
          <Button title="保存" onPress={onPress} />
        </View>
      </SafeAreaView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight || 0,
  },
  label: {
    width: 90,
    paddingLeft: 20,
  },
  inputInline: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputText: {
    alignSelf: 'flex-end',
    width: 220,
    paddingLeft: 10,
  },
  button: {
    marginTop: 10,
    alignSelf: 'center',
    width: '90%'
  }
});

export default AppListScreen;
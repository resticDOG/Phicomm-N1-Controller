import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ActivityIndicator, StatusBar, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { AppListResponse, getAppList, openApp } from "../api/phicomm";
import { Text, View } from '../components/Themed'

const AppListScreen = () => {
  

  return (
    <View style={styles.container}>
      <SafeAreaView >
        <View style={styles.inputInline}>
          <Text>盒子IP地址</Text>
          <TextInput 
            style={styles.inputText} 
            placeholder="盒子IP地址"
            keyboardType="numeric" 
          />
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
  inputInline: {
    flexDirection: 'row'
  },
  inputText: {
    width: '100%',
    padding: 10
  },
  item: {
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  header: {
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    textAlign: 'center'
  },
});

export default AppListScreen;
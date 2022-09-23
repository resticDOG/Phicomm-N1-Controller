import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ActivityIndicator, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { AppListResponse, getAppList, openApp } from "../api/phicomm";
import { Text } from '../components/Themed'

const Item = ({ item, onPress, backgroundColor, textColor }: any) => (
  <TouchableOpacity onPress={() => { openApp({ ...item }); onPress() }} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

const AppListScreen = () => {
  const [selectedId, setSelectedId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [appList, setAppList] = useState([] as AppListResponse['apps'])
  const [count, setCount] = useState(0)

  useEffect(() => {
    setLoading(true)
    getAppList()
    .then(res => {
      setAppList(res!.apps)
      setCount(res!.count)
    })
    .catch(console.error)
    .finally(() => {
      setLoading(false)
    })
  }, [])

  const renderItem = ({ item }: any) => {
    const backgroundColor = item.appid === selectedId ? "#a8a8a8" : "#e1e1e1";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.appid)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  const ListHeader = () => (
    <Text style={styles.header}>共 {count} 个应用</Text>
  )

  return (
    <SafeAreaView style={styles.container}>
      {
        loading 
        ? <ActivityIndicator size="large" />
        : <FlatList
            ListHeaderComponent={ListHeader}
            data={appList}
            renderItem={renderItem}
            keyExtractor={(item) => item.appid}
            extraData={selectedId}
          />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight || 0,
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
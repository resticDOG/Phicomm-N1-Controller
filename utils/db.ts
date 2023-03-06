import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, value: string | object) => {
  try {
    const dataValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, dataValue)
  } catch (error) {
    console.error(error);
  }
}

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (!value) {
      return null
    }
    return JSON.parse(value)
  } catch (error) {
    console.error(error);
  }
}
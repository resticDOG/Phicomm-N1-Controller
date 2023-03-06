import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { DEFAULT_SETTINGS, APP_STATE_KEY } from './constants'
import { saveData } from './utils/db'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  saveData(APP_STATE_KEY, DEFAULT_SETTINGS)

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <RootSiblingParent>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </RootSiblingParent>
      </SafeAreaProvider>
    );
  }
}

import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

type ScreenProviderProps = {
  children: JSX.Element;
};

export function ScreenProvider(props: ScreenProviderProps): JSX.Element {
  const { children } = props;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="auto" />
        {children}
        <Toast />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

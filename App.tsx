import { useReady } from '@application/hooks/use_ready';
import Navigation from '@presentation/navigation';
import { ScreenProvider } from '@presentation/providers/screen';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App(): JSX.Element | null {
  const { isLoaded } = useReady();

  useEffect(() => {
    const initAsync = async (): Promise<void> => {
      if (isLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    initAsync();
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }
  return (
    <ScreenProvider>
      <Navigation />
    </ScreenProvider>
  );
}

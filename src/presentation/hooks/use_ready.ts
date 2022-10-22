/* eslint-disable global-require */
import { useFonts } from 'expo-font';

type ReadyType = {
  isLoaded: boolean;
};

export function useReady(): ReadyType {
  const [fontsLoaded] = useFonts({
    'Pretendard-Bold': require('../../../assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-ExtraBold': require('../../../assets/fonts/Pretendard-ExtraBold.otf'),
    'Pretendard-Medium': require('../../../assets/fonts/Pretendard-Medium.otf'),
    'Pretendard-Regular': require('../../../assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-SemiBold': require('../../../assets/fonts/Pretendard-SemiBold.otf'),
  });

  return {
    isLoaded: fontsLoaded,
  };
}

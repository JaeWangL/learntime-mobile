import HomeScreen from '@presentation/screens/home';
import PostDetailScreen from '@presentation/screens/postDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { type TabHomeParamList, ScreenNames } from '../types';

const Stack = createNativeStackNavigator<TabHomeParamList>();

function TabHome(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
      <Stack.Screen
        name={ScreenNames.POST_DETAIL}
        component={PostDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default memo(TabHome, isEqual);

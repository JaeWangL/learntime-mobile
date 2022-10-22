import ProfileScreen from '@presentation/screens/profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { type TabProfileParamList, ScreenNames } from '../types';

const Stack = createNativeStackNavigator<TabProfileParamList>();

function TabProfile(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenNames.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default memo(TabProfile, isEqual);

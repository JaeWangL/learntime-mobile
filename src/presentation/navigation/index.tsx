import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { navigationRef } from './helpers';
import BottomTabNavigator from './tabs';
import { type RootStackParamList, ScreenNames } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation(): JSX.Element {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={ScreenNames.TAB_ROOT}
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default memo(Navigation, isEqual);

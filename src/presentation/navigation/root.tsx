import { usePermission } from '@application/hooks/features/permission';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PermissionStatus } from 'expo-modules-core/src/PermissionsInterface';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import BottomTabNavigator from './tabs';
import { type RootStackParamList, ScreenNames } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator(): JSX.Element | null {
  const { status } = usePermission({ requestPermission: true });

  if (status !== PermissionStatus.GRANTED) {
    // TODO: Add On-boarding stack
    return null;
  }
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
    >
      <Stack.Screen
        name={ScreenNames.TAB_ROOT}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}

export default memo(RootNavigator, isEqual);

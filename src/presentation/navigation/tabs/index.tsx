import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import { type TabRootParamList, ScreenNames } from '../types';
import TabHome from './tab_home';
import TabProfile from './tab_profile';

const Tab = createBottomTabNavigator<TabRootParamList>();

function BottomTabNavigator(): JSX.Element {
  const renderHomeIcon = useCallback(
    (props: { focused: boolean; color: string; size: number }) => {
      return <Feather name="home" color={props.color} size={props.size} />;
    },
    []
  );

  const renderProfileIcon = useCallback(
    (props: { focused: boolean; color: string; size: number }) => {
      return <Feather name="user" color={props.color} size={props.size} />;
    },
    []
  );

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={ScreenNames.TAB_HOME}
        component={TabHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tab.Screen
        name={ScreenNames.TAB_PROFILE}
        component={TabProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: renderProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
}

export default memo(BottomTabNavigator, isEqual);

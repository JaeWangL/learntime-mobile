import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  type RouteProp,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import type { StyleProp, ViewStyle } from 'react-native';
import {
  type TabRootParamList,
  ScreenNames,
  tabInvisibleScreens,
} from '../types';
import TabHome from './tab_home';
import TabProfile from './tab_profile';

const Tab = createBottomTabNavigator<TabRootParamList>();

function BottomTabNavigator(): JSX.Element {
  const getTabBarVisibilityStyle = useCallback(
    (route: RouteProp<TabRootParamList>): StyleProp<ViewStyle> | undefined => {
      const routeName = getFocusedRouteNameFromRoute(route);
      if (routeName && tabInvisibleScreens.includes(routeName)) {
        return {
          height: 0,
          overflow: 'hidden',
        };
      }

      return undefined;
    },
    []
  );

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
        options={({ route }) => ({
          tabBarLabel: 'Home',
          tabBarIcon: renderHomeIcon,
          tabBarStyle: getTabBarVisibilityStyle(route),
        })}
      />
      <Tab.Screen
        name={ScreenNames.TAB_PROFILE}
        component={TabProfile}
        options={({ route }) => ({
          tabBarLabel: 'Profile',
          tabBarIcon: renderProfileIcon,
          tabBarStyle: getTabBarVisibilityStyle(route),
        })}
      />
    </Tab.Navigator>
  );
}

export default memo(BottomTabNavigator, isEqual);

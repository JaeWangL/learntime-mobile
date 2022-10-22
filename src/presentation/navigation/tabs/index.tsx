import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { type TabRootParamList, ScreenNames } from '../types';
import TabHome from './tab_home';
import TabProfile from './tab_profile';

const Tab = createBottomTabNavigator<TabRootParamList>();

function BottomTabNavigator(): JSX.Element {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={ScreenNames.TAB_HOME} component={TabHome} />
      <Tab.Screen name={ScreenNames.TAB_PROFILE} component={TabProfile} />
    </Tab.Navigator>
  );
}

export default memo(BottomTabNavigator, isEqual);

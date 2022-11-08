import { NavigationContainer } from '@react-navigation/native';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { navigationRef } from './helpers';
import RootNavigator from './root';

function Navigation(): JSX.Element {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default memo(Navigation, isEqual);

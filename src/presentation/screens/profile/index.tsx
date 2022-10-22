import BaseLayout from '@presentation/layouts/base';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Text } from 'react-native-ui-lib';

function ProfileScreen(): JSX.Element {
  return (
    <BaseLayout>
      <Text>Profile</Text>
    </BaseLayout>
  );
}

export default memo(ProfileScreen, isEqual);

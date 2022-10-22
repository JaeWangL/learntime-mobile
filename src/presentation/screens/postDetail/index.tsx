import BaseLayout from '@presentation/layouts/base';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Text } from 'react-native-ui-lib';

function PostDetailScreen(): JSX.Element {
  return (
    <BaseLayout>
      <Text>Post Detail</Text>
    </BaseLayout>
  );
}

export default memo(PostDetailScreen, isEqual);

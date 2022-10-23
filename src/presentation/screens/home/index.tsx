import BaseLayout from '@presentation/layouts/base';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import PostList from './containers/postList';

function HomeScreen(): JSX.Element {
  return (
    <BaseLayout>
      <PostList />
    </BaseLayout>
  );
}

export default memo(HomeScreen, isEqual);

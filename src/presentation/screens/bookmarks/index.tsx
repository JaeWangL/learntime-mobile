import BaseLayout from '@presentation/layouts/base';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import BookmarkList from './containers/bookmarkList';

function BookmarksScreen(): JSX.Element {
  return (
    <BaseLayout>
      <BookmarkList />
    </BaseLayout>
  );
}

export default memo(BookmarksScreen, isEqual);

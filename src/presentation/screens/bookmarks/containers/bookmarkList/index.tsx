import { useGetBookmarks } from '@application/hooks/apis/bookmark/get_bookmarks';
import type { PostInfoDTO } from '@infrastructure/apis/post/dtos';
import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import type { ListRenderItemInfo } from 'react-native';
import { GridList, LoaderScreen } from 'react-native-ui-lib';
import BookmarkItem from '../../components/bookmarkItem';

function BookmarkList(): JSX.Element {
  const { data, isFetching } = useGetBookmarks({
    pagable: {
      pageSize: 10,
    },
  });

  const renderItem = useCallback(
    (info: ListRenderItemInfo<PostInfoDTO>): JSX.Element => {
      return <BookmarkItem data={info.item} />;
    },
    []
  );

  if (isFetching) {
    return <LoaderScreen />;
  }
  return (
    <GridList
      data={data}
      maxItemWidth={140}
      numColumns={3}
      itemSpacing={0}
      listPadding={0}
      renderItem={renderItem}
    />
  );
}

export default memo(BookmarkList, isEqual);

import { useBookmark } from '@application/hooks/features/bookmark';
import Material from '@expo/vector-icons/MaterialIcons';
import { type PostInfoDTO } from '@infrastructure/apis/post/dtos';
import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import { Text } from 'react-native-ui-lib';

type IconBookmarkProps = {
  data: PostInfoDTO;
};

function IconBookmark(props: IconBookmarkProps): JSX.Element {
  const { data } = props;
  const { isBookmarked, toggleBookmark } = useBookmark();

  const onIconPressAsync = useCallback(async (): Promise<void> => {
    toggleBookmark({ newPostId: data.id });
    // TODO: Refetch with device events
  }, []);

  return (
    <>
      <Material
        name={isBookmarked(data.id) ? 'bookmark' : 'bookmark-outline'}
        size={32}
        color="#fff"
        onPress={onIconPressAsync}
      />
      <Text white marginB-16 marginT-4 center>
        {data.bookmarks}
      </Text>
    </>
  );
}

export default memo(IconBookmark, isEqual);

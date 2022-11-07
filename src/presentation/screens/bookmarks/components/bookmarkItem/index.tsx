import { type PostInfoDTO } from '@infrastructure/apis/post/dtos';
import { navigate } from '@navigation/helpers';
import { ScreenNames } from '@navigation/types';
import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import { AnimatedImage, Text, TouchableOpacity } from 'react-native-ui-lib';

type BookmarkItemProps = {
  data: PostInfoDTO;
};

function BookmarkItem(props: BookmarkItemProps): JSX.Element {
  const { data } = props;

  const onItemPress = useCallback((): void => {
    navigate(ScreenNames.POST_DETAIL, { post: data });
  }, []);

  return (
    <TouchableOpacity onPress={onItemPress}>
      <AnimatedImage source={{ uri: data.photoUrls[0] }} height={160} />
      <Text>{data.title}</Text>
    </TouchableOpacity>
  );
}

export default memo(BookmarkItem, isEqual);

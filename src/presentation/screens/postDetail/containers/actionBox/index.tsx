import type { PostInfoDTO } from '@infrastructure/apis/post/dtos';
import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import { Linking } from 'react-native';
import { Button, View } from 'react-native-ui-lib';
import { useBookmark } from '../../../../../application/hooks/features/bookmark';
import { styles } from './styles';

type ActionBoxProps = {
  post: PostInfoDTO;
};
function ActionBox(props: ActionBoxProps): JSX.Element {
  const { post } = props;
  const { addBookmark } = useBookmark();

  const onAddBookmarkPress = useCallback((): void => {
    addBookmark({ newPostId: post.id });
  }, []);

  const onReservationPress = useCallback((): void => {
    Linking.openURL(post.reservationUrl);
  }, []);

  return (
    <View row style={styles.container}>
      <Button label="예약하기" onPress={onReservationPress} />
      <Button label="즐겨찾기" onPress={onAddBookmarkPress} />
    </View>
  );
}

export default memo(ActionBox, isEqual);

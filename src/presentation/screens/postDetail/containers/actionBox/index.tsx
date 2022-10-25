import type { PostInfoDTO } from '@infrastructure/apis/post/dtos';
import { memo, useCallback } from 'react';
import isEqual from 'react-fast-compare';
import { Linking } from 'react-native';
import { Button, View } from 'react-native-ui-lib';
import { styles } from './styles';

type ActionBoxProps = {
  post: PostInfoDTO;
};
function ActionBox(props: ActionBoxProps): JSX.Element {
  const { post } = props;

  const onReservationPress = useCallback((): void => {
    Linking.openURL(post.reservationUrl);
  }, []);

  return (
    <View row style={styles.container}>
      <Button label="예약하기" onPress={onReservationPress} />
      <Button label="즐겨찾기" />
    </View>
  );
}

export default memo(ActionBox, isEqual);

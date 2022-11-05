import MaterialCommunity from '@expo/vector-icons/MaterialCommunityIcons';
import { type PostInfoDTO } from '@infrastructure/apis/post/dtos';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Text } from 'react-native-ui-lib';

type IconHeartProps = {
  data: PostInfoDTO;
};

function IconHeart(props: IconHeartProps): JSX.Element {
  const { data } = props;

  return (
    <>
      <MaterialCommunity name="cards-heart-outline" size={32} color="#fff" />
      <Text white marginB-16 marginT-4 center>
        {data.likes}
      </Text>
    </>
  );
}

export default memo(IconHeart, isEqual);

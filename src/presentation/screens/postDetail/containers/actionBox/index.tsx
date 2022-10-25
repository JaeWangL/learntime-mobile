import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Button, View } from 'react-native-ui-lib';
import { styles } from './styles';

function ActionBox(): JSX.Element {
  return (
    <View row style={styles.container}>
      <Button label="예약하기" />
      <Button label="즐겨찾기" />
    </View>
  );
}

export default memo(ActionBox, isEqual);

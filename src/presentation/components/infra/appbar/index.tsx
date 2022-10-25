import type { SurfaceType } from '@application/styles/colors';
import { getSurfaceColor } from '@application/styles/colors';
import { HEIGHT_APP_BAR } from '@application/styles/variables';
import { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import type { ViewStyle } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import AccessoryLeft from './components/accessoryLeft';
import { styles } from './styles';
import type { AccessoryLeftType } from './types';

type AppBarProps = {
  title?: string;
  accessoryLeft?: AccessoryLeftType;
  accessoryRight?: JSX.Element | JSX.Element;
  surface?: SurfaceType;
};

function AppBar(props: AppBarProps): JSX.Element {
  const { accessoryLeft, accessoryRight, surface, title } = props;

  const backgroundColor = useMemo((): ViewStyle => {
    return { backgroundColor: getSurfaceColor(surface!) };
  }, [surface]);

  return (
    <View
      row
      centerV
      height={HEIGHT_APP_BAR}
      style={[styles.container, backgroundColor]}
    >
      <View width="30%" marginL-20>
        <AccessoryLeft accessoryLeft={accessoryLeft} surface={surface!} />
      </View>
      <Text width="40%">{title}</Text>
      <View width="30%" marginR-20>
        {accessoryRight}
      </View>
    </View>
  );
}

AppBar.defaultProps = {
  title: '',
  accessoryLeft: undefined,
  accessoryRight: undefined,
  surface: 1,
} as AppBarProps;

export default memo(AppBar, isEqual);

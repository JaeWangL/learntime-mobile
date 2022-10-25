import { colors } from '@application/styles/colors';
import { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import type { StyleProp, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native-ui-lib';
import { styles } from './styles';

type BaseLayoutProps = {
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[];
  useSafeArea?: boolean;
};

function BaseLayout(props: BaseLayoutProps): JSX.Element {
  const { children, style, useSafeArea } = props;
  const insets = useSafeAreaInsets();

  const wrapperStyle = useMemo((): ViewStyle => {
    return {
      paddingTop: useSafeArea ? insets.top : 0,
      backgroundColor: useSafeArea ? 'transparent' : colors.surface,
    };
  }, [useSafeArea]);

  return (
    <View flex style={[styles.container, wrapperStyle, style]}>
      {children}
    </View>
  );
}

BaseLayout.defaultProps = {
  style: undefined,
  useSafeArea: true,
} as BaseLayoutProps;

export default memo(BaseLayout, isEqual);

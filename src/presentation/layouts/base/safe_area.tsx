import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native-ui-lib';

type BaseLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

function WithSafeArea(props: BaseLayoutProps): JSX.Element {
  const { children } = props;
  const insets = useSafeAreaInsets();

  // NOTE: consider 'top' only because we use bottom navigation
  return (
    <View flex style={{ paddingTop: insets.top }}>
      {children}
    </View>
  );
}

export default memo(WithSafeArea, isEqual);

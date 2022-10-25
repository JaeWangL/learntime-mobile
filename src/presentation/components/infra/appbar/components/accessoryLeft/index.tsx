import type { SurfaceType } from '@application/styles/colors';
import Feather from '@expo/vector-icons/Feather';
import { goBack } from '@navigation/helpers';
import { isValidElement, memo, useCallback, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import type { AccessoryLeftType } from '../../types';

type AccessoryLeftProps = {
  accessoryLeft?: AccessoryLeftType;
  surface: SurfaceType;
};

function AccessoryLeft(props: AccessoryLeftProps): JSX.Element | null {
  const { accessoryLeft, surface } = props;

  const backIconColor = useMemo((): string => {
    return surface === 'transparent' ? '#fff' : '#333';
  }, [surface]);

  const onBackPress = useCallback((): void => {
    goBack();
  }, []);

  if (isValidElement(accessoryLeft)) {
    return accessoryLeft;
  }
  if (accessoryLeft === 'back') {
    return (
      <Feather
        name="arrow-left"
        size={24}
        color={backIconColor}
        onPress={onBackPress}
      />
    );
  }
  return null;
}

AccessoryLeft.defaultProps = {
  accessoryLeft: undefined,
} as AccessoryLeftProps;

export default memo(AccessoryLeft, isEqual);

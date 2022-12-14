import * as ExpoLocation from 'expo-location';
import { PermissionStatus } from 'expo-modules-core/src/PermissionsInterface';
import { useCallback, useEffect, useState } from 'react';
import { Linking } from 'react-native';

type PermissionProps = {
  requestPermission: boolean;
};

type PermissionType = {
  status: PermissionStatus;
  checkLocationPermission: () => Promise<void>;
};

export function usePermission(props: PermissionProps): PermissionType {
  const { requestPermission } = props;
  const [status, setStatus] = useState<PermissionStatus>(
    PermissionStatus.UNDETERMINED
  );

  const checkLocationPermission = useCallback(async (): Promise<void> => {
    const result = await ExpoLocation.requestForegroundPermissionsAsync();
    setStatus(result.status);

    if (result.status === PermissionStatus.GRANTED) {
      const currentPosition = await ExpoLocation.getCurrentPositionAsync();
    } else {
      Linking.openSettings();
    }
  }, []);

  useEffect(() => {
    if (!requestPermission) {
      return;
    }

    (async (): Promise<void> => {
      await checkLocationPermission();
    })();
  }, []);

  return {
    status,
    checkLocationPermission,
  };
}

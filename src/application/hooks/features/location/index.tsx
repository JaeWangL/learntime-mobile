import { locationState } from '@application/recoils/location/atoms';
import { getCoordToAddressAsync } from '@infrastructure/apis/kakao/local/coordToAddress/services';
import {
  type CoordinatesModel,
  calculateDistance,
} from '@infrastructure/utils/coordinates_utils';
import * as ExpoLocation from 'expo-location';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

export function useLocation() {
  const [location, setLocation] = useRecoilState(locationState);

  const updateExistingLocationAsync = useCallback(
    async (newCoordinates: CoordinatesModel): Promise<void> => {
      if (!location) {
        return;
      }

      const distance = calculateDistance(
        {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        newCoordinates
      );
      if (distance < 100) {
        return;
      }

      const newAddress = await getCoordToAddressAsync({
        y: newCoordinates.latitude.toString(),
        x: newCoordinates.longitude.toString(),
      });

      setLocation((prev) => {
        return {
          latitude: newCoordinates.latitude,
          longitude: newCoordinates.longitude,
          address1DepthName: newAddress,
        };
      });
    },
    [location]
  );

  const updateLocationAsync = useCallback(async (): Promise<void> => {
    const currentPosition = await ExpoLocation.getCurrentPositionAsync();

    if (location) {
      updateExistingLocation({
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
      });
    } else {
    }
  }, [location]);
}

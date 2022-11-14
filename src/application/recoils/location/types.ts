export type LocationState = {
  latitude: number;
  longitude: number;
  address1DepthName: string;
  address2DepthName: string;
  address3DepthName: string;
};

export const defaultLocationState: LocationState | undefined = undefined;

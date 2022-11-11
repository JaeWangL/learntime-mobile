import { atom } from 'recoil';
import { RecoilStateKeys } from '../recoil_constants';
import { persistAtomEffect } from '../utils';
import { type LocationState, defaultLocationState } from './types';

export const locationState = atom<LocationState | undefined>({
  key: RecoilStateKeys.LOCATION,
  default: defaultLocationState,
  effects: [
    persistAtomEffect<LocationState | undefined>(RecoilStateKeys.LOCATION),
  ],
});

import { recoilStorage } from '@infrastructure/storage/mmkv';
import { type AtomEffect } from 'recoil';
import type { RecoilStateKeys } from './recoil_constants';

type CustomJSONParser = {
  reviver?: (key: string, value: string) => any;
  replacer?: (key: string, value: any) => any;
};

export const persistAtomEffect =
  <T>(key: RecoilStateKeys, parser?: CustomJSONParser): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    const savedValue = recoilStorage.getString(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue, parser?.reviver));
    }

    onSet((newValue: any, _, isReset: boolean) => {
      if (isReset || newValue === undefined) {
        recoilStorage.delete(key);
      } else {
        recoilStorage.set(key, JSON.stringify(newValue, parser?.replacer));
      }
    });
  };

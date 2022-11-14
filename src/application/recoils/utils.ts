import { recoilStorage } from '@infrastructure/storage/mmkv';
import { type AtomEffect } from 'recoil';

export const persistAtomEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    const savedValue = recoilStorage.getString(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _, isReset: boolean) => {
      if (isReset || newValue === undefined) {
        recoilStorage.delete(key);
      } else {
        recoilStorage.set(key, JSON.stringify(newValue));
      }
    });
  };

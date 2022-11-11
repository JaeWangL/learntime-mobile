import { MMKV } from 'react-native-mmkv';
import { StorageEncryptions, StorageIDs } from './constants';

export const recoilStorage = new MMKV({
  id: StorageIDs.GLOBAL_STATE,
  encryptionKey: StorageEncryptions[StorageIDs.GLOBAL_STATE],
});

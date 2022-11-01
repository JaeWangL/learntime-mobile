import { type FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

// NOTE: Copy-Paste from original 'SetValue' in firestore
export type FirestoreSetValue<T> = T extends FirebaseFirestoreTypes.Timestamp
  ? FirebaseFirestoreTypes.Timestamp | Date // allow Date in place of Timestamp
  : T extends object
  ? {
      [P in keyof T]:
        | FirestoreSetValue<T[P]>
        | FirebaseFirestoreTypes.FieldValue; // allow FieldValue in place of values
    }
  : T;

export type FirestoreSetValueExcept<
  T,
  K extends keyof T
> = T extends FirebaseFirestoreTypes.Timestamp
  ? FirebaseFirestoreTypes.Timestamp | Date // allow Date in place of Timestamp
  : T extends object
  ? Pick<T, K> & {
      [P in keyof T]:
        | FirestoreSetValue<T[P]>
        | FirebaseFirestoreTypes.FieldValue; // allow FieldValue in place of values
    }
  : T;

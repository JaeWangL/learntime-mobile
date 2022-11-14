import type { LocalMetaModel, TotalAddressModel } from '../models';

export type CoordToAddressParams = {
  x: string; //  longitude
  y: string; // latitude
  input_coord?: 'WGS84' | 'WCONGNAMUL' | 'CONGNAMU' | 'WTM' | 'TM';
};

export type CoordToAddressDTO = {
  meta: LocalMetaModel;
  documents: TotalAddressModel[];
};

import { request } from '@infrastructure/request/instance';
import { KaKaoEndpointTypes, ThirdPartyAPIKeys } from '../../../constants';
import type { CoordToAddressDTO, CoordToAddressParams } from './dtos';

export async function getCoordToAddressAsync(
  params: CoordToAddressParams
): Promise<CoordToAddressDTO> {
  const res = await request.get(
    KaKaoEndpointTypes.KAKAO_LOCAL_COORD_TO_ADDRESS,
    {
      params: {
        input_coord: params.input_coord,
        x: params.x,
        y: params.y,
      },
      headers: {
        Authorization: `KakaoAK ${ThirdPartyAPIKeys.KAKAO}`,
      },
    }
  );

  return res.data;
}

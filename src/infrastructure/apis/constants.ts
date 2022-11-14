export enum ApiCollectionTypes {
  POSTS = 'posts',
  PROVIDERS = 'providers',
}

export enum ThirdPartyEndpointTypes {
  KAKAO_V2 = 'https://dapi.kakao.com/v2',
}

export enum ThirdPartyAPIKeys {
  KAKAO = '',
}

export const KaKaoEndpointTypes = {
  KAKAO_LOCAL_COORD_TO_ADDRESS: `${ThirdPartyEndpointTypes.KAKAO_V2}/local/geo/coord2address.json`,
} as const;

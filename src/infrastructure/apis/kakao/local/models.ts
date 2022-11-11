export type LocalMetaModel = {
  total_count: number;
};

export type AddressModel = {
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  mountain_yn: 'Y' | 'N';
  main_address_no: string;
  sub_address_no: string;
};

export type LoadAddressModel = {
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  road_name: string;
  underground_yn: 'Y' | 'N';
  main_building_no: string;
  sub_building_no: string;
  building_name: string;
  zone_no: string;
};

export type TotalAddressModel = {
  address: AddressModel;
  road_address: LoadAddressModel;
};

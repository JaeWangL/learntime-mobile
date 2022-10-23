export type OffsetPaginationDTO<T> = {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  totalPages: number;
  totalElements: number;
};

export type CursorPaginationDTO<T> = {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  first: boolean;
  last: boolean;
};

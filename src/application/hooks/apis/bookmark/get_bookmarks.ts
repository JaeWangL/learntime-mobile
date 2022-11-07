import { bookmarkState } from '@application/recoils/bookmark/atoms';
import type { CursorPaginationQuery } from '@infrastructure/apis/pagination_models';
import type { PostInfoDTO } from '@infrastructure/apis/post/dtos';
import { getPostsByIds } from '@infrastructure/apis/post/services';
import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { QueryTypes } from '../query_constants';

type GetBookmarksType = {
  data?: PostInfoDTO[];
  isLoading: boolean;
  isFetching: boolean;
  refetch: () => void;
};

type GetBookmarksProps = {
  pagable: CursorPaginationQuery;
};

export function useGetBookmarks(props: GetBookmarksProps): GetBookmarksType {
  const { pagable } = props;
  const bookmark = useRecoilValue(bookmarkState);
  const { data, isFetching, isLoading, refetch } = useQuery(
    [QueryTypes.GET_BOOKMARKS],
    () => getPostsByIds(Array.from(bookmark.postIds), pagable),
    {
      enabled: bookmark.postIds.size > 0,
    }
  );

  return {
    data,
    isLoading,
    isFetching,
    refetch,
  };
}

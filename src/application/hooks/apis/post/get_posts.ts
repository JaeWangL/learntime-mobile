import type { CursorPaginationQuery } from '@infrastructure/apis/pagination_models';
import type { PostInfoDTO } from '@infrastructure/apis/post/dtos';
import { getPosts } from '@infrastructure/apis/post/services';
import { useQuery } from '@tanstack/react-query';
import { QueryTypes } from '../query_constants';

type GetPostsType = {
  data?: PostInfoDTO[];
  isLoading: boolean;
};

type GetPostsProps = {
  pagable: CursorPaginationQuery;
};

export function useGetPosts(props: GetPostsProps): GetPostsType {
  const { pagable } = props;
  const { data, isLoading } = useQuery([QueryTypes.GET_POSTS, pagable], () =>
    getPosts(pagable)
  );

  return {
    data,
    isLoading,
  };
}

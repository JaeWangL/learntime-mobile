import type { PostInfoDTO } from '@infrastructure/apis/post/dtos';
import { getPosts } from '@infrastructure/apis/post/services';

type GetPostsType = {
  data?: PostInfoDTO[];
  isLoading: boolean;
};

export function useGetPosts(): GetPostsType {
  return {
    data: getPosts().content,
    isLoading: false,
  };
}

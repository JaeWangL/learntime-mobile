import type { UpdatePostRequest } from '@infrastructure/apis/post/dtos';
import { updatePostAsync } from '@infrastructure/apis/post/services';
import { useMutation } from '@tanstack/react-query';

type UpdatePostType = {
  isLoading: boolean;
  isError: boolean;
  mutate: (request: UpdatePostRequest) => void;
  mutateAsync: (request: UpdatePostRequest) => Promise<boolean>;
};

export function useUpdatePost(): UpdatePostType {
  const { isError, isLoading, mutate, mutateAsync } =
    useMutation(updatePostAsync);

  return {
    isError,
    isLoading,
    mutate,
    mutateAsync,
  };
}

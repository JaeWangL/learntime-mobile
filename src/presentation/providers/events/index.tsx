import { QueryTypes } from '@application/hooks/apis/query_constants';
import Emitter from '@infrastructure/events/emitter';
import { ApplicationEventTypes } from '@infrastructure/events/types';
import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect } from 'react';

type ApplocationEventsProviderProps = {
  children: JSX.Element;
};

export function ApplocationEventsProvider(
  props: ApplocationEventsProviderProps
): JSX.Element {
  const { children } = props;
  const queryClient = useQueryClient();

  const onBookmarkToggled = useCallback((): void => {
    queryClient.refetchQueries([QueryTypes.GET_POSTS]);
  }, []);

  useEffect(() => {
    Emitter.on(ApplicationEventTypes.BOOKMARK_TOGGLED, onBookmarkToggled);
    return () => {
      Emitter.off(ApplicationEventTypes.BOOKMARK_TOGGLED, onBookmarkToggled);
    };
  }, []);

  return children;
}

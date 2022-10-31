import { useAppState } from '@application/hooks/use_app_state';
import { useOnlineManager } from '@application/hooks/use_online_manager';
import {
  focusManager,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useCallback } from 'react';
import type { AppStateStatus } from 'react-native';
import { Platform } from 'react-native';

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

type QueryProviderProps = {
  children: JSX.Element;
};

export function QueryProvider(props: QueryProviderProps): JSX.Element {
  const { children } = props;

  const onAppStateChange = useCallback((status: AppStateStatus) => {
    // React Query already supports in web browser refetch on window focus by default
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }, []);

  useOnlineManager();
  useAppState({ onChange: onAppStateChange });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

import { useEffect } from 'react';
import type { AppStateStatus } from 'react-native';
import { AppState } from 'react-native';

type AppStateProps = {
  onChange: (status: AppStateStatus) => void;
};

export function useAppState(props: AppStateProps): void {
  const { onChange } = props;

  useEffect(() => {
    const myListener = AppState.addEventListener('change', onChange);
    return () => {
      myListener.remove();
    };
  }, [onChange]);
}

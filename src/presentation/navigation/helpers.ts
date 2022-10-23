import { createNavigationContainerRef } from '@react-navigation/native';
import type { ScreenNames } from './types';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: ScreenNames, params?: any): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

export function goBack(): void {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export function resetRoot(params = { index: 0, routes: [] }): void {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot(params);
  }
}

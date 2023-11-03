import { useContext } from 'react';
import { RootStoreContext } from './store.context';

export const useStore = () => useContext(RootStoreContext);

export const useIsLoading = (actionKey: string | string[]) => {
  const {
    common: { loadingStates },
  } = useStore();
  if (typeof actionKey === 'string') {
    return loadingStates[actionKey] === 'loading';
  }
  return actionKey.some((key) => loadingStates[key] === 'loading');
};

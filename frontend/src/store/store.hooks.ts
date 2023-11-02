import { useContext } from 'react';
import { RootStoreContext } from './store.context';
import { ActionKey } from './store.types';

export const useStore = () => useContext(RootStoreContext);

export const useIsLoading = (actionKey: ActionKey) => {
  const {
    common: { loadingStates },
  } = useStore();
  return loadingStates[actionKey] === 'loading';
};

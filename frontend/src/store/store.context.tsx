import { createContext, FC, ReactNode } from 'react';
import RootStore from './root.store';

const rootStore = new RootStore();

export const RootStoreContext = createContext<RootStore>(rootStore);

export const RootStoreContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => (
  <RootStoreContext.Provider value={rootStore}>
    {children}
  </RootStoreContext.Provider>
);

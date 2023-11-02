import { LoadingSpinner } from '@saas-ui/react';
import { observer } from 'mobx-react-lite';
import { FC, ReactNode } from 'react';
import { useIsLoading } from 'store/store.hooks';
import { ActionKey } from 'store/store.types';

interface LoadingProps {
  actionKey: ActionKey;
  children: ReactNode;
}

const Loading: FC<LoadingProps> = observer(({ actionKey, children }) =>
  useIsLoading(actionKey) ? (
    <LoadingSpinner mx="auto" display="block" />
  ) : (
    <>{children}</>
  )
);

export default Loading;

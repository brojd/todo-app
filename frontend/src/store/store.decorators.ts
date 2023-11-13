import { HttpError } from 'types';
import commonStore from './common.store';
import { ActionKeyConfig } from './store.types';

export function AutoLoadingState(actionKeyConfig: ActionKeyConfig) {
  return function (
    _target: object,
    _key: string,
    descriptor: PropertyDescriptor
  ) {
    const originalFunction = descriptor.value;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    descriptor.value = async function (...args: any) {
      const actionKey =
        typeof actionKeyConfig !== 'string'
          ? actionKeyConfig.apply(this, args)
          : actionKeyConfig;

      commonStore.setLoadingState(actionKey, 'loading');
      commonStore.deleteError(actionKey);
      try {
        await originalFunction.apply(this, args);
        commonStore.setLoadingState(actionKey, 'success');
      } catch (err) {
        commonStore.setLoadingState(actionKey, 'error');
        commonStore.setError(actionKey, err as HttpError);
      }
    };
  };
}

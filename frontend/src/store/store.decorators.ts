import commonStore from './common.store';
import { LoadingStateOptions } from './store.types';

export function AutoLoadingState(options?: LoadingStateOptions) {
  return function (
    _target: object,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    const actionKey = options?.customActionKey || key;
    commonStore.setLoadingState(actionKey, 'loading');

    const childFunction = descriptor.value;
    descriptor.value = async function (...args: unknown[]) {
      commonStore.setLoadingState(actionKey, 'loading');
      try {
        await childFunction.apply(this, args);
        commonStore.setLoadingState(actionKey, 'success');
      } catch (err) {
        commonStore.setLoadingState(actionKey, 'error');
      }
    };
    return descriptor;
  };
}

import commonStore from './common.store';
import { ActionKeyConfig } from './store.types';

export function AutoLoadingState(actionKeyConfig?: ActionKeyConfig) {
  return function (
    _target: object,
    key: string,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    descriptor.value = async function (...args: any) {
      let actionKey = key;
      if (actionKeyConfig) {
        actionKey =
          typeof actionKeyConfig !== 'string'
            ? actionKeyConfig.apply(this, args)
            : actionKeyConfig;
      }

      commonStore.setLoadingState(actionKey, 'loading');
      try {
        await childFunction.apply(this, args);
        commonStore.setLoadingState(actionKey, 'success');
      } catch (err) {
        commonStore.setLoadingState(actionKey, 'error');
      }
    };
  };
}

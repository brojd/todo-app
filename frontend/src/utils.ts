import { isUndefined, omitBy } from 'lodash-es';

export const omitUndefined = <T extends Record<string, unknown>>(obj?: T) =>
  omitBy(obj, isUndefined);

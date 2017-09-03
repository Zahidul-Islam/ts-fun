import * as _ from './../index'

export function flatMap (array: Array <number | object>, func: (p: any) => any) {
  return _.flattenDeep(_.map(array, func))
}

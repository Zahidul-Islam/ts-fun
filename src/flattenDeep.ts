export function flattenDeep (array: Array <any>) {
  return array.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flattenDeep(cur) : cur), [])
}

export function flatten (array: Array<any>) {
  return array.reduce((acc, cur) => acc.concat(cur), [])
}

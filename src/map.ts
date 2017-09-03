export function map (array: Array<number | object>, func: (x: any) => any) {
  const result = []
  array.forEach(item => result.push(func(item)))
  return result
}


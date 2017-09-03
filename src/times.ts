export function times (n: number, func: () => any) {
  const result = []
  for (let i = 0; i < n; i += 1) {
    result.push(func())
  }
  return result
}

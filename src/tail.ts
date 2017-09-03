export function tail (array: Array <number | object>) {
  const [, ...xs] = array
  return xs
}

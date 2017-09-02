export default function chunk (array: Array<any>, size: number) {
  let index = 0
  let resIndex = 0
  const result = []
  const length = array == null ? 0 : array.length

  if (!length || size < 1) {
    return result
  }

  while (index < length) {
    result[resIndex] = array.slice(index, (index += size))
    resIndex += 1
  }
  return result
}

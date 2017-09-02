export default function chunk (array: Array<any>, size: number) {
  let index = 0
  let resIndex = 0
  const result = []

  if (!array.length || size < 1) {
    return result
  }

  while (index < array.length) {
    result[resIndex += 1] = array.slice(index, index += size)
  }
  return result
}

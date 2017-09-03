export function sortedUniq (array: Array<any>) {
  return Array.from(new Set(array)).sort()
}

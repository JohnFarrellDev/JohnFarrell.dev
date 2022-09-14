export const deepCopy = <T>(toCopy: T): T => {
  return JSON.parse(JSON.stringify(toCopy))
}

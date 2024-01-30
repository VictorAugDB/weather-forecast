import qs from 'qs'

export function generateQueryString(obj: Record<string, unknown>) {
  const newObj = Object.keys(obj).reduce(
    (acc, curr) => {
      if (obj[curr] !== null && obj[curr] !== undefined) {
        acc[curr] = obj[curr]
      }

      return acc
    },
    {} as Record<string, unknown>,
  )

  return qs.stringify(newObj)
}

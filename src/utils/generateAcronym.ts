export function generateAcronym(inputString: string) {
  const words = inputString.split(' ')
  if (words.length >= 2) {
    const acronym = (
      words[0][0].toUpperCase() + words[words.length - 1][0]
    ).toUpperCase()
    return acronym
  } else {
    return inputString
  }
}

const defaultMessage = ' Using word of the day instead.'

export function getDayNumber() {
  const now = new Date()
  const start = new Date(2022, 0, 0)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  while (day > answers.length) {
    day -= answers.length
  }
  return day
}
export function getWordOfTheDay(day: number) {
  return answers[day]
}

// copied from Wordle source
const answers = [
  'MAGIC',
  'Snape',
  'blood',
  'Draco',
  'boils',
  'wands',
  'Ahern',
  'Albus',
  'Algie',
  'ALLEY',
  'Argus',
  'Baron',
  'Beans',
  'Binns',
  'Bones',
  'cafru',
  'Caput',
  'Circe',
  'Cross',
  'Doris',
  'Duddy',
  'Filch',
  'Finch',
  'Flint',
  'Frogs',
  'Goyle',
  'Harry',
  'Hoggy',
  'Ickle',
  'Mimsy',
  'Morag',
  'Pucey',
  'Ronan',
  'slimy',
  'slugs',
  'slyly',
  'small',
  'SMASH',
  'smoke',
  'snake',
  'Snare',
]

export const allWords = [...answers]

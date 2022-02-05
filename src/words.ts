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
  'magic',
  'snape',
  'blood',
  'draco',
  'boils',
  'wands',
  'ahern',
  'albus',
  'algie',
  'alley',
  'argus',
  'baron',
  'beans',
  'binns',
  'bones',
  'cafru',
  'caput',
  'circe',
  'cross',
  'doris',
  'duddy',
  'filch',
  'finch',
  'flint',
  'frogs',
  'goyle',
  'harry',
  'hoggy',
  'ickle',
  'mimsy',
  'morag',
  'pucey',
  'ronan',
  'slimy',
  'slugs',
  'slyly',
  'small',
  'smash',
  'smoke',
  'snake',
  'snare',
]

export const allWords = [...answers]

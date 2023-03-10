export const fizzbuzz = (number) => {
  if(typeof number !== 'number') throw new Error('parameter proved must be a number')
  if(Number.isNaN(number)) throw new Error('parameter proved must be a number')

  if(number % 15 === 0) return 'fizzbuzz'
  if(number % 3 === 0) return 'fizz'
  if(number % 5 === 0) return 'buzz'

  return number
}
import { describe, expect, it, should } from "vitest"
import { fizzbuzz } from "../source/fizzbuzz"


describe('fizzbuzz', () => {
  // it('should be a function', () =>{
  //   expect(typeof fizzbuzz).toBe('function')
  // })

  it('should throw if not a number is provided as parameter', () =>{
    expect(() => fizzbuzz()).toThrow('parameter proved must be a number')
  })

  it('should throw a speficic error message if not a number is provided', () =>{
    expect(() => fizzbuzz(NaN)).toThrow('parameter proved must be a number')
  })

  it('should return 1 if number provided is 1', () =>{
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provided is 2', () =>{
    expect(fizzbuzz(2)).toBe(2)
  })
  
  it('should return fizz if number provided is 3', ()=>{
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return fizz if number provides is multiple of 3', () =>{
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  it('should return buzz if number provided is multiple of 5', () =>{
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  it('should return fizzbuzz if number provided is multiple of 3 and 5', ()=>{
    expect(fizzbuzz(15)).toBe('fizzbuzz')  
  })
})
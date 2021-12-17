const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    let test_arr = [1,2,3,4,5]
    test("checking that shuffleArray returns an array",()=>{
        expect(Array.isArray(shuffleArray(test_arr))).toBe(true)
    })
    test("checking that shuffleArray returns an array of same size",()=>{
        expect(shuffleArray(test_arr).length).toBe(test_arr.length)
    })
})
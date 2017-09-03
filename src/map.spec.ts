import 'mocha'
import { expect } from 'chai'

import * as _ from './../index'

describe('Map return an array by applying a function on each element in a provided collection', () => {
  it('should return an array of values by running each element in collection', () => {
    const result = _.map([4, 8], x => x * x)
    expect(result).to.be.an('array').that.includes(16)
  })

  it('should return an array of values [3, 4]', () => {
    const result = _.map([{ a: 3 }, { a: 4 }], obj => obj.a)
    expect(result).to.be.an('array').that.includes(3)
    expect(result).to.be.members([3, 4])
  })
})

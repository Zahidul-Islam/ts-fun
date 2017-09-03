import 'mocha'
import { expect } from 'chai'

import * as _ from './../index'

describe('sortedUniq method remove all duplicated values and return a sorted array', () => {
  it('should return a unique sorted array', () => {
    const result = _.sortedUniq([1, 1, 2, 3, 3, 3, 5, 8, 8])
    expect(result).to.be.an('array').that.have.lengthOf(5)
  })
})

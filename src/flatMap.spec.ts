import 'mocha'
import { expect } from 'chai'

import * as _ from './../index'

describe('flatMap', () => {
  it('should apply function to each element and then flatten the array', () => {
    const duplicate = n => [n, n]
    const result = _.flatMap([1, 2], duplicate)
    expect(result).to.be.an('array').that.has.lengthOf(4)
  })
  it('flatMap deep', () => {
    const duplicate = n => [[[n, n]]]
    const result = _.flatMap([1, 2], duplicate)
    expect(result).to.be.an('array').that.has.lengthOf(4)
  })
})

import 'mocha'
import { expect } from 'chai'

import * as _ from './../index'

describe('Tail of a collection', () => {
  it('should return tail of an array', () => {
    const result = _.tail([1, 2, 3, 4, 5])
    expect(result).to.be.an('array').that.has.lengthOf(4)
    expect(result).to.not.includes(1)
  })
})

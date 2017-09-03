import 'mocha'
import { expect } from 'chai'

import * as _ from './../index'

describe('Head of a collection', () => {
  it('should return head of an array', () => {
    const result = _.head([1, 2, 3, 4, 5])
    expect(result).to.be.a('number').that.is.equal(1)
  })
})

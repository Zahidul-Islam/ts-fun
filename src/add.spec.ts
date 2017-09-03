import 'mocha'
import { expect } from 'chai'

import * as _ from '../index'

describe('Add two number', () => {
  it('should return total of two number', () => {
    const result = _.add(3, 4)
    expect(result).to.be.equal(7)
  })
})

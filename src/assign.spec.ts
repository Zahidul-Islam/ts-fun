import 'mocha'
import { expect } from 'chai'

import * as _ from '../index'

describe('Assign', () => {
  it('should assigns properties of one or many objects to a source object', () => {
    const foo = { a: 'a property' }
    const bar = { b: 4, c: 'an other property' }
    const result = _.assign({ a: 'an old property' }, foo, bar)
    expect(result).to.be.deep.equal({ a: 'a property', b: 4, c: 'an other property' })
  })
})

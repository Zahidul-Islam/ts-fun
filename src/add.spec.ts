import 'mocha'
import { expect } from 'chai'

import add from './add'

describe('Add two number', () => {
  it('should return total of two number', () => {
      let result = add(3, 4)
      expect(result).to.be.equal(7)
  })
})
import 'mocha'
import { expect } from 'chai'

import * as _ from './../index'

describe('Flatten an array into single level deep', () => {
  const result = _.flattenDeep([[0, 1, [6, 7, [9, 23]]], [2, 3], [4, 5]])
  expect(result).to.be.an('array').that.have.lengthOf(10)
})

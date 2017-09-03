import 'mocha'
import { expect } from 'chai'

import * as _ from './../index'

describe('tiems function to execute n times and returns an array of the results', () => {
  const result = _.times(3, String)
  expect(result).to.be.an('array').that.has.lengthOf(3)
})

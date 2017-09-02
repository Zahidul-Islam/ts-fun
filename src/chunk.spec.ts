import 'mocha'
import { expect } from 'chai'
import chunk from './chunk'

describe('Split array into groups based on the length of size', () => {
  it('should split the array into two groups', () => {
    const result = chunk(['a', 'b', 'c', 'd'], 2)
    expect(result).to.be.an('array')
    expect(result.length).to.be.equal(2)
  })

  it('should split the array into three groups', () => {
    const result = chunk(['a', 'b', 'c', 'd', 'e'], 3)
    expect(result).to.be.an('array')
    expect(result.length).to.be.equal(2)
  })
})

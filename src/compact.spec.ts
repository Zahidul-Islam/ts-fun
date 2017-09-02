import 'mocha'
import { expect } from 'chai'

import compact from './compact'

describe('Creates an array with all falsey values removed', () => {
  it('should remove The values false, null, 0, "", undefined, and NaN', () => {
    const result = compact([0, 1, false, 2, '', 3, undefined])
    expect(result).to.not.include(undefined)
    expect(result).to.not.include(false)
    expect(result).to.not.include(null)
    expect(result).to.not.include(0)
    expect(result).to.not.include('')
    expect(result).to.not.include(NaN)
    expect(result).to.be.an('array').that.includes(3)
    expect(result).to.be.lengthOf(3)
  })
})

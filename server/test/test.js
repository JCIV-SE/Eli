const { expect } = require('chai')

describe('jest with chai', () => {
  it('can confirm that 2 + 2 equals 4', () => {
    expect(2 + 2).to.equal(4)
  })
})

const sizes = [
  ['iphone-6+', 'landscape'],
  'iphone-6+',
  ['iphone-x', 'landscape'],
  'iphone-x',
  'samsung-s10',
  'ipad-2',
  ['ipad-2', 'landscape'],
  [1920, 1080],
  'macbook-11',
  'macbook-13',
  'macbook-15'
]

describe('Visual regression test', () => {
  sizes.forEach(size => {
    it(`Should match previous screenshot 'Home Page' When '${size}' resolution`, () => {
      cy.setResolution(size)
      cy.visit('/')
      cy.matchImageSnapshot()
    })
  })
})

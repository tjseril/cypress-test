describe('Domain Website Testing', function() {

  let testdata

  before('Load test data', function() {
    cy.fixture('propsearchdata').then(function(propsearchdata){
      testdata = propsearchdata
    })
  })

  it('Open Domain homepage and check elements', function() {
    cy.visit({url: "/", headers: { "Accept-Encoding": "gzip, deflate"}})
    expect(cy.get('#fe-pa-domain-home-typeahead-input')).to.exist
    expect(cy.get('.css-oih30v')).to.exist
  })

  it('Search using string STR', function() {
    cy.get('#fe-pa-domain-home-typeahead-input').type(testdata.keyword)
    cy.get('.css-oih30v').click()
    cy.get('.is-first-in-list.css-1qp9106').should.exist
  })

  it('Open first result and verify listing matches keyword search', function() {
    var addressLine1
    var addressLine1Element = '#skip-link-content > div.css-1ned5tb > div.css-1mf5g4s > ul > li.is-first-in-list.css-1qp9106 > div > div.css-1n74r2t > div > a > h2 > span:nth-child(1)'
    cy.get(addressLine1Element).then($addressLine1Text, function() {
      addressLine1 = $addressLine1Text
    })
    cy.log(addressLine1)
  })
})
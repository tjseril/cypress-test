let testdata

describe('Domain Website Testing', function() {
  before('Load test data', function() {
    cy.fixture('propsearchdata').then(function(propsearchdata){
      testdata = propsearchdata
    })
  })

  it('Open Domain homepage and check elements', function() {
    cy.visit('/')
    expect(cy.get('#fe-pa-domain-home-typeahead-input')).to.exist
    expect(cy.get('.css-oih30v')).to.exist
  })

  it('Search using string STR', function() {
    cy.get('#fe-pa-domain-home-typeahead-input').type(testdata.suburb)
    cy.get('.css-oih30v').click()
    expect(cy.get('.css-1biynnu')).to.exist
  })
})
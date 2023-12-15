describe('Cypress ag Grid bug', () => {
  it('Should get the correct grid values', () => {
    cy.get('#my-table').getAgGridData((actualTable: {}) => {
      cy.agGridValidateRowsExactOrder(actualTable, {})
    })
  })
})

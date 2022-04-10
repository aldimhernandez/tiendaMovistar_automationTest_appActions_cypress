//Suitecase from Home Page

describe('detalles', () => {
    beforeEach(()=>{
        cy.visit('/'); //get baseUrl from cypress.json
    })
//CP001
    it('CP001 - Validar cuotas en compra de equipo - Cuotas.12 - Equipo.A52', ()=>{
        cy.search('A52');
        cy.get('#product-item-info_6115').click();
        cy.get('#installments-text').contains('12 cuotas');
        //Pending assertion
    })
})
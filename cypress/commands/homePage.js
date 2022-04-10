//Custom commands for home page
Cypress.Commands.add('search', (searchElement)=>{
    cy.fixture('homePage').then((homePage)=>{
        cy.get(homePage.searchBtn).click();
        cy.get(homePage.searchToolBar).type(searchElement);
        cy.get(homePage.searchBtn).click();
    })
})
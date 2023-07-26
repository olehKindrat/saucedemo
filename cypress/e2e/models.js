import { element } from "./selectors";
function typeCredentials(usedLogin, usedPassword) {
    cy.get('[placeholder="Username"]').click().clear().type(usedLogin);
    cy.get('[placeholder="Password"]').clear().type(usedPassword);
    cy.get('#login-button').click();
}


export function performLogin(usedLogin, usedPassword) {
    typeCredentials(usedLogin, usedPassword);
    
}
export function InvalidLoginValidateError() {
    cy.get("h3[data-test]").contains("Epic sadface:");
}
  

export function clickHamburgerMenu(){
    cy.get("#react-burger-menu-btn").click()
}
export function checkLogOutButton(){
        cy.get("#logout_sidebar_link").should("be.visible").click();
        cy.url().should("include", dataItems.url);
      
    
}
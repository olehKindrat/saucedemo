class LogInPage  {
    logInButton(){
      return cy.get('#login-button');
    }
    logInError(){
        return cy.get('.error-button');
    }
    userInputField(){
        return cy.get('[placeholder="Username"]');    
    }
    passwordInputField(){
        return cy.get('[placeholder="Password"]');
    }   
    burgerMenuButton() {
      return cy.get("#react-burger-menu-btn");
    }  
    logoutSidebarButton() {
      return cy.get("#logout_sidebar_link");
    } 
 }
  export const element = new LogInPage();
  
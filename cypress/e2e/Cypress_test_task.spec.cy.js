/// <reference types="Cypress"/>

import { dataItems } from "../fixtures/dataItems"
import { element } from "./selectors"
const { performLogin, InvalidLoginValidateError, clickHamburgerMenu, checkLogOutButton } = require("./models")


describe('Saucedemo test', () => {
  
  beforeEach(() => {
    cy.visit('/')
    cy.url().should("include", dataItems.url);
  });

  it('Verify LogIn Button', () => {
  cy.get(element.logInButton).should('be.visible')
  })

  it('Verify Input Fields', ()=>{
  cy.get(element.userInputField).should('be.visible')
  cy.get(element.passwordInputField).should('be.visible')
  });

  it("Invalid login, valid password", () => {
    performLogin(dataItems.invalid_login, dataItems.password);
    InvalidLoginValidateError();
  });

  it("Valid login, invalid password", () => {
    performLogin(dataItems.login, dataItems.invalid_password);
    InvalidLoginValidateError();
  });

  it("Invalid login and password", () => {
    performLogin(dataItems.invalid_login, dataItems.invalid_password);
    InvalidLoginValidateError();
  });

  it("Empty login, empty password", () => {
    performLogin(dataItems.empty_login, dataItems.empty_password);
    InvalidLoginValidateError();
  });

  it("Successful login ", () => {
    performLogin(dataItems.login, dataItems.password);
    cy.url().should("include",dataItems.main);
  });

  it("HamburgerMenu",()=>{
    clickHamburgerMenu
  });

  it("Ensure that logout button work", () => {
    checkLogOutButton
  });




})
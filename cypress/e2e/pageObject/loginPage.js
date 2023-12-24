/// <reference types="cypress" />
import { clearConfigCache } from "prettier";
const URL = 'https://www.saucedemo.com/'
const userName = '#user-name'

class loginPage{

    constructor(){
        this.idUser = "#password";
    }

    getUrl(){
        return URL
    }

    getLoginPage(){
        cy.clearAllCookies;
        cy.clearAllLocalStorage;
        cy.clearAllSessionStorage;
        cy.visit(URL);
    }

    getUserLogin(usrName){
        cy.get(userName).clear();
        cy.get(userName).type(usrName)
    }

    getPassLogin(pass){
        cy.get(this.idUser).clear();
        cy.get(this.idUser).type(pass)
    }
}
export default loginPage;
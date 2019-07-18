import { browser } from 'protractor';

export class BasePage {
    navigateTo(requiredURL:string){
     	return browser.get(requiredURL);
    }
}
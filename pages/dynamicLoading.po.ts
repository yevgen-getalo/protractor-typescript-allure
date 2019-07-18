import { browser, element, by, ExpectedConditions } from 'protractor';
import { BasePage } from './basePage.po';

export class DynamicLoadingPage extends BasePage{

    moveToInnerPage(name:string){
        element(by.xpath(`//a[contains(text(),"${name}")]`)).click();
    }  
  
    waitForElementToBeShown(){
        element(by.tagName('button')).click();
        return browser.wait(ExpectedConditions.visibilityOf(element(by.xpath('//div[@id="finish"]/child::h4'))), 10000);
    }

    getRequiredElement(name:string){
        this.moveToInnerPage(name)
        return element(by.xpath('//div[@id="finish"]/child::h4'));
    }
}
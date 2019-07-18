import { browser, element, by, WebElement } from 'protractor';
import { BasePage } from './basePage.po';

export class NestedFramesPage extends BasePage{
	
	getFrame(name: string){
		browser.switchTo().defaultContent();
		if(name !== 'BOTTOM'){
			let parentFrame:WebElement = element(by.name('frame-top')).getWebElement();
			browser.switchTo().frame(parentFrame);
		}
		let innerFrame:WebElement = element(by.name(`frame-${name.toLowerCase()}`)).getWebElement();
		return innerFrame;
	}

    getFrameText(name: string) {
		browser.switchTo().frame(this.getFrame(name));
		return element(by.tagName('body'));
    }

	checkLocation(coordinates:any){
		if((coordinates.x === 0 && coordinates.x < 450) && coordinates.y === 0){
			return 'LEFT';
		}else if((coordinates.x > 450 && coordinates.x < 900)&& coordinates.y === 0){
			return 'MIDDLE';
		}else if(coordinates.x > 900 && coordinates.y === 0){
			return 'RIGHT';
		}else if(coordinates.x === 0 && coordinates.y > 280){
			return 'BOTTOM';
		}
	}
}
import {DynamicLoadingPage} from '../pages/dynamicLoading.po';

describe('Dynamic loading for elements', () => {
    const dynamicPage = new DynamicLoadingPage();
    beforeEach(() => {
        dynamicPage.navigateTo('https://the-internet.herokuapp.com/dynamic_loading');
    })
    it(`Check that hidden element is resent in DOM and shown after processing`, (done) => {
        let element = dynamicPage.getRequiredElement('hidden');
        expect(element.isPresent()).toBe(true)
        expect(element.isDisplayed()).toBe(false);
        expect(dynamicPage.waitForElementToBeShown()).toBe(true);
        expect(element.getText()).toEqual('Hello World!');
        done();
    })

    it(`Check that not existed element is resent in DOM and shown after processing`, (done) => {
        let element = dynamicPage.getRequiredElement('rendered');
        expect(element.isPresent()).toBe(false)
        expect(dynamicPage.waitForElementToBeShown()).toBe(true);
        expect(element.getText()).toEqual('Hello World!');
        done();
    })
});
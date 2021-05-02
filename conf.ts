import { Config, browser } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';

export let config: Config = {
    framework: 'jasmine2',
    capabilities: {
      browserName: 'chrome',
    },
	noGlobals: true,
	maxSessions: 1,
	
    onPrepare: () => {
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
          }));
        browser.manage().window().setSize(1366, 768);
        browser.manage().timeouts().implicitlyWait(10000);
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
    },
    specs: [ 'specs/**/*spec.js' ]
};
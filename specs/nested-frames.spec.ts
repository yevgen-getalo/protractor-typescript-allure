import {NestedFramesPage} from '../pages/nestedFrames.po';

describe('Nested frames', () => {
    const framesPage = new NestedFramesPage();
    beforeEach(() => {
        framesPage.navigateTo('https://the-internet.herokuapp.com/nested_frames');
    })
    it(`Left frame's text should be match frame's name and location`, (done) => {
        let elem = framesPage.getFrameText('LEFT');
        expect(elem.getText()).toEqual('LEFT');
        framesPage.getFrame('LEFT').getLocation().then((loc) => expect(framesPage.checkLocation(loc)).toEqual('LEFT'));
        done();
    })

    it(`Middle frame's text should be match frame's name and location`, (done) => {
        let elem = framesPage.getFrameText('MIDDLE');
        expect(elem.getText()).toEqual('MIDDLE');
        framesPage.getFrame('MIDDLE').getLocation().then((loc) => expect(framesPage.checkLocation(loc)).toEqual('MIDDLE'));
        done();
    })
    
    it(`Right frame's text should be match frame's name and location`, (done) => {
        let elem = framesPage.getFrameText('RIGHT');
        expect(elem.getText()).toEqual('RIGHT');
        framesPage.getFrame('RIGHT').getLocation().then((loc) => expect(framesPage.checkLocation(loc)).toEqual('RIGHT'));
        done();
    })

    it(`Bottom frame's text should be match frame's name and location`, (done) => {
        let elem = framesPage.getFrameText('BOTTOM');
        expect(elem.getText()).toEqual('BOTTOM');
        framesPage.getFrame('BOTTOM').getLocation().then((loc) => expect(framesPage.checkLocation(loc)).toEqual('BOTTOM'));
        done();
    })    
});
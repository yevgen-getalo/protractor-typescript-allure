import {UploadFilePage} from '../pages/uploadFile.po';

describe('Upload file', () => {
    const uploadPage = new UploadFilePage();
    beforeEach(() => {
        uploadPage.navigateTo('https://the-internet.herokuapp.com/upload');
    })
    it(`Upload file using "Choose File" button`, (done) => {
        uploadPage.uploadFile('testFile.txt', 'via choose file button');
        expect(uploadPage.checkTitle().getText()).toEqual('File Uploaded!');
        expect(uploadPage.checkUploadedFileName().getText()).toEqual('testFile.txt');
        done();
    })

    it(`Upload file using drag n drop field`, (done) => {
        uploadPage.uploadFile('testFile.txt', 'via drag n drop field');
        expect(uploadPage.checkMarkForDragNDrop().getText()).toEqual('✔');
        expect(uploadPage.checkUploadedFileNameInDragNDrop().getText()).toEqual('testFile.txt');
        done();
    })
})
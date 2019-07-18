import { element, by } from 'protractor';
import * as path from 'path';
import { BasePage } from './basePage.po';

export class UploadFilePage extends BasePage{

    uploadFile(fileName:string, methodName:string){
        let fileToUpload = `../../utils/${fileName}`;
        let absolutePath = path.resolve(__dirname, fileToUpload);
        let method = methodName === 'via choose file button' ? 'file-upload' : 'drag-drop-upload';
        if(method === 'drag-drop-upload'){
            element(by.className('dz-hidden-input')).sendKeys(absolutePath);
        }else {
            element(by.id(method)).sendKeys(absolutePath);
            element(by.id('file-submit')).click();
        }
    }

    checkTitle(){
        return element(by.css('h3'));
    }

    checkUploadedFileName(){
        return element(by.id('uploaded-files'));
    }

    checkMarkForDragNDrop(){
        return element(by.xpath('//div/ancestor-or-self::div[@id="drag-drop-upload"]/descendant::div[@class="dz-success-mark"]/span'));
    }

    checkUploadedFileNameInDragNDrop(){
        return element(by.xpath('//div/ancestor-or-self::div[@id="drag-drop-upload"]/descendant::div[@class="dz-filename"]/span'));
    }
}
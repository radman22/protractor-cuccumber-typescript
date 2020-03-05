import { ElementFinder,element,by } from "protractor";

export class onBoardInformationPage
{
infoContent:ElementFinder;

constructor()
{

    //verify that the content really showed or not 
    this.infoContent=element(by.id("id of the element"));
    

}





}
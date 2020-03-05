import { ElementFinder,element,by } from "protractor";

export class programProgressPage
{
foldButton:ElementFinder;
UnfoldBuuton:ElementFinder;
weekHeading:ElementFinder;
contentCard:ElementFinder;
programInformation:ElementFinder;
programHeading:ElementFinder;
contentMenu:ElementFinder;


constructor()
{

    this.foldButton=element(by.id("the id of the element"));
    this.UnfoldBuuton=element(by.id("the id of the element"));
    this.weekHeading = element(by.id("the id of the element"));
    this.contentCard =element(by.id("the id of the element"));
    this.programInformation= element(by.id("the id of the element"));
    this.programHeading =element(by.id("the id of the element"));
    this.contentMenu= element(by.id("the id of the element"));
}





}
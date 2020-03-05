import { ElementFinder,element,by } from "protractor";

export class OnBoardSelectConditionPage
{
conditions:ElementFinder[];

constructor()
{

    this.conditions.push(element(by.css("css selector of first condition")));
    this.conditions.push(element(by.css("css selector of the second condition")));

}





}
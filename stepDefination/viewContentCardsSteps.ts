import { Given,When, Then } from "cucumber";
import { ElementFinder,element,by,browser } from "protractor";
import { programProgressPage } from "../pageObjects/programProgressPage";



import chai from "chai";
var expect = chai.expect;

let progress = new programProgressPage();



         Given('I am in the certain weeks progress', async ()=> {
            

          expect(progress.programHeading.isDisplayed()).tobe(true);
          expect(progress.programInformation.isDisplayed()).tobe(true);
          expect(progress.weekHeading.isDisplayed()).tobe(true);
          
           
          });
          When('I press the  unfold button ',  async()=> {
          
            
      
            await progress.UnfoldBuuton.click();
            
          });
          
          Then("A menu drops down and all of the content of the week is shown",async()=>{
           
            expect(progress.contentMenu.isDisplayed()).tobe(true);

          });


          Given('The weeks progress in unfolded', async ()=> {
            
            // all three I am just using one to save time 
  
            expect(progress.contentCard.isDisplayed()).tobe(true);
            
             
            });
            When('I press the ^ button ',  async()=> {
              
        
              await progress.foldButton.click();
              
            });
            
            Then("A menu pulls up and all of the content of the week disappears  ",async()=>{
             
              expect(progress.contentMenu.isDisplayed).tobe(false);
  
            });

          
          
            
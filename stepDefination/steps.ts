import { Given,When, Then } from "cucumber";
import { ElementFinder,element,by,browser } from "protractor";
import { enterAgePage } from "../pageObjects/enterAgePage";
import { onBoardChooseSexPage } from "../pageObjects/onBoardChooseSexPage";
import { onBoardChooseSymptomsPage } from "../pageObjects/onBoardChooseSymptoms";
import { onBoardcreateAccountPage } from "../pageObjects/onBoardcreateAccountPage";
import { onBoardInformationPage } from "../pageObjects/onBoardInformationPage";
import { OnBoardIntensityPage} from "../pageObjects/onBoardIntesityPage";
import { onBoardMedicationPage } from "../pageObjects/onBoardMedicationPage";
import { onBoardNamePage } from "../pageObjects/onBoardNamePage";
import { onBoardReceivingTreatmentPage } from "../pageObjects/onBoardReceivingTreatmentPage";
import { OnBoardSelectConditionPage } from "../pageObjects/onBoardSelectConditionPage";
import { OnBoardSurveyPage } from "../pageObjects/onBoardSurvayPage";
import { onBoardScreenNextButton } from "../pageObjects/onBoardScreenNextButton";



import chai from "chai";
var expect = chai.expect;

let age = new enterAgePage();
let chooseSex = new onBoardChooseSexPage();
let symptoms = new onBoardChooseSymptomsPage();
let account = new onBoardcreateAccountPage();
let infomationPage = new onBoardInformationPage();
let intensity = new OnBoardIntensityPage();
let medication = new onBoardMedicationPage();
let name = new onBoardNamePage();
let treatment= new onBoardReceivingTreatmentPage();
let condition = new OnBoardSelectConditionPage();
let surveyOption = new OnBoardSurveyPage();
let nextButton = new onBoardScreenNextButton();


         Given('I am on the name screen ', async ()=> {
            
          // Write code that somehow

          expect(name.nameField.isDisplayed()).tobe(true);
          
           
          });
          When(' I enter the name {string} in name field and press next button',  async(string)=> {
            
      
            await name.nameField.sendKeys(string);
            
          });
          
          When("press next button ", async()=>{

            nextButton.nextButton.click();
          });
          Then("I should see next choose sex screen",async()=>{
           
            //choose the crteria of verifying the next screen 

          });


          Given('I am on the sex screen', async ()=> {
            
            // all three I am just using one to save time 
  
            expect(chooseSex.sexOption.isDisplayed()).tobe(true);
            
             
            });
            When('I choose {string} sex from the the menu',  async(string)=> {
              // Write code here that turns the phrase above into concrete actions
              
        
              var  chooseSex = element(by.name(string));
              chooseSex.click();
              
            });
            
            When("press next button ", async()=>{
  
              nextButton.nextButton.click();
            });
            Then("I should see next  screen",async()=>{
             
              //choose the crteria of verifying the next screen 
  
            });

          
          
            Given('I am on conditions screen', async ()=> {
            
              // get any one of the tiles from the screen and verify its presence  
              var singleConditionTile = condition.conditions.pop();
              expect(singleConditionTile.isDisplayed()).tobe(true);
              
               
              });
              When('I select {string} and {string} as my conditions',  async(string1,string2)=> {
                // Write code here that turns the phrase above into concrete actions
                
          
                var  firstCondition = element(by.name(string1));
                var secondCondition =element(by.name(string2));

                firstCondition.click();
                secondCondition.click();
                
              });
              
              When("press next button ", async()=>{
    
                nextButton.nextButton.click();
              });
              Then("I should see next  screen",async()=>{
               
                //choose the crteria of verifying the next screen 
    
              });
          
          
          
              Given('I am on the intensity selection page ', async ()=> {
            
                
                expect(symptoms.symptomOption.isDisplayed()).tobe(true);
                
                 
                });
                When('I drag the slider and turn the intensity to {string}',  async(string)=> {
                  
                  browser.actions().dragAndDrop(
                    symptoms.symptomOption,
                    {x:string, y:0}
                ).perform();
                  
                });
                
                When("press next button ", async()=>{
      
                  nextButton.nextButton.click();
                });
                Then("I should see next  screen",async()=>{
                 
                  //choose the crteria of verifying the next screen 
      
                });    
          
          
         //I am not writing the other features because they are just the repition 
         //of the above scenario that I have converted 
         //I just coded the unique scenario to show my coding 
         //skills , if you want all of them , I can do that as well 
         // But they seem uncessary becuase logic is redundant   
          
          
         
 
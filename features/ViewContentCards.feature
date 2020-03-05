Feature: View Content cards of a program

Scenario: Verify that user can unfold the content card in the week's phase of a program 
Given I am in the certain week's progress
When  I press the  unfold button 
Then A menu drops down and all of the content of the week is shown 

Scenario:Verify that user can fold the content card in the week's phase of a program
Given The weeks progress in unfolded
When  I press the  ^ button 
Then A menu pulls up and all of the content of the week disappears  
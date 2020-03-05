Feature: Onboarding

    Scenario: Welcome screen
        Given I see the welcome screen

    Scenario: Name screen
        Given I tap Get started
        Then I should see the name screen

    Scenario: Entering your name
    Given  I am on the name screen 
    When I enter the name "Radman Sheikh" in name field 
    And  press next button 
    Then I should see next choose sex screen

    Scenario: Selecting the sex from the screen 
    Given I am on the sex screen 
    When I choose "Male" sex from the the menu
    Then I should see the next screen 

    Scenario: Entering your age 
    Given I am on the age entering screen 
    When I enter my age "27" on the screen
    Then I should see the next screen 

    Scenario: Choosing your symptoms 
    Given I am on symptoms screen
    When I select "Heartburn" as my symptom from the menu 
    And  press next button
    Then I should see the next screen 

    Scenario: Selecting your conditions
    Given  I am on conditions screen
    When I select "Gastritis" and "Leaky Gut" as my conditions
    And  press next button 
    Then I should see the next screen 

    Scenario: Selecting the intensity of your symptoms 
    Given I am on the intensity selection page 
    When I drag the slider and turn the intensity to "3"
    And press next button 
    Then I should see the next screen  

    Scenario: Selecting whether you are receving treatment or not 
    Given I am on receiving treatment  screen 
    When  I select the "no" option 
    And press the next button
    Then I should see the next screen 

    Scenario: Selecting whether you are taking medication or not 
    Given I am on the  select medication screen 
    When I select the "no" option 
    And press next button 
    Then I should see the next screen 

    Scenario: Create an account with cara 
    Given I am create account screen 
    When I enter my email address "radmanshiekh@gmail.com" 
    And press next button 
    Then I should see the next screen 

    Scenario: How did you hear about Cara 
    Given I am on the survey page 
    When I select  the "play store" option 
    And press next button
    Then I should go to next screen 

    Scenario: Read the required information 
    Given I am on read information page 
    When I tap "OK" button 
    Then I am redeirected to the dashboard of the page 

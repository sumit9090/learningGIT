@Sanity @Sanity
Feature: Login feature
 
 Background:
 Given  user navigates to facebook website
  When user validates the homepage title
  
 
  Scenario Outline: In order to login into facebook
  
  Then user entered the "<Username>" username and "<Password>" password
  And user selects age category
  |Age|location|
  |above 18|USA|
  |below 18|INDIA|
  Then user "<Status>" sucessfully logged in
  
  #Scenario: In order to login into facebook
  #Given  user navigates to facebook website
  #When user validates the homepage title
  #Then user entered the "<invalid>" username and "<invalid>" password
  #Then user "<shouldnotbe>" sucessfully logged in
  Examples:
  |Username|Password|Status|
  |valid|valid|shouldbe|
  |invalid|invalid|shouldnotbe|
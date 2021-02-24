@functional 
Feature: Login feature 

Background: 
	Given  user navigates to facebook website 
	When user validates the homepage title 
	
Scenario Outline: In order to login into facebook 

	Then user entered the "<Username>" username and "<Password>" password 
	And user validates the capcha image 
	Then user "<Status>" sucessfully logged in 
	
	Examples: 
		|Username|Password|Status|
		|valid|valid|shouldbe|
		|invalid|invalid|shouldnotbe|
		
		
		 #crtl+shift+f=pretty format feature
		

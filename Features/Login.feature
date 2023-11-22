Feature: Login Action

Scenario Outline: Successful Login with Valid Credentials
	Given user Launch Chrome Browser
	When User Open url "https://demo.guru99.com/V4/"
	And User enters <UserName> and <Password>
	
	And click on login
	Then Page title should be "Guru99 Bank Manager HomePage"
	Then User LogOut from the Application

	
	
	


	
      Examples:
       |UserName||Password|
       |mngr440587||jUpypUd|
      
Scenario: check for Invalid

        	Then check for Invalid
        	



         


	  
       


      
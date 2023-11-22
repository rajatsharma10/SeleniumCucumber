Feature: NewCustomer

Scenario Outline: Create the new customer
    Given Login again User enters <UserName>  and <Password>
  
	When Click On the NewCustomer Button
	Then Check title " Guru99 Bank New Customer Entry Page "
	
    Examples:
	  |UserName||Password|
      |mngr440587||jUpypUd|
      
	
Scenario Outline: table Form of new Customer
	Then Enter the CustomerName <NAME>
	Then Enter the Date <DATE>
	Then Enter the Address <ADD>
	Then Enter the City <CITY>
	Then Enter the State <STATE>
	Then Enter the PIN <PIN>
    Then Enter the MOB <MOB>
	Then Enter the Eamil <EMAIL>
	When Enter the Password <PASS>
	Then click on submit button 
      
 
      
    Examples:
       |NAME||DATE||ADD||CITY||STATE||PIN||MOB||EMAIL||PASS|
	   |RsCertds||0222022||295 Wisdon streethumdge gardeUSA||NEW YORK||North Eastern USA||452011||9111911946||rajatsharma.er@gmail.com||Rajat@123|
	   
        	
Scenario Outline: Click on edit customer 
       Given Click On Edit Customer "50441"
       Then Update the address <UpdateAddress>
       
       Examples:
       |UpdateAddress|
       |NSDL e-Governance Infrastructure Limited Kamala Mills Compound Senapati Bapat Marg Lower Parel Mumbai  400 013|
        	
	      
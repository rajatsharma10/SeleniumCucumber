package StepDefinations;

import PageObjects.EditCustomer;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class StepClickEdit {
	EditCustomer edit=new EditCustomer(StepNewCustomer.N.ldriver);
	@Given("Click On Edit Customer {string}")
	public void click_On_Edit_Customer(String Custid) {
	    edit.clickCustomerName(Custid);
	}
	@Then("^Update the address (.*)$")
	public void update_the_address_UpdateAddress(String UpdateADD) {
		edit.UpdateAddress(UpdateADD);
		Utilities.Baseclass.closeBrowser();
	   
	}




}

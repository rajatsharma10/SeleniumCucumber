package StepDefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import PageObjects.Login;
import PageObjects.NewCustomer;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepNewCustomer {
	public  WebDriver driver;
	static NewCustomer N =new NewCustomer(Steps.lp.ldriver);
	
		@Given("^Login again User enters (.*)  and (.*)$")
		public void login_again_User_enters_Username_and_password(String UserName,String Password) {
			
			N.setuid(UserName);
			N.setPassword(Password);
			N.setLogin();
			
		    
		}
		
		
		@When("Click On the NewCustomer Button")
		public void click_On_the_NewCustomer_Button() {
		    N.clickNewCustomer();
		}
		
		@Then("Check title {string}")
		public void check_title(String titleofcoustomerPage) {

			Assert.assertEquals(titleofcoustomerPage, " Guru99 Bank New Customer Entry Page ");
			
		
			}
		
        @Then("^Enter the CustomerName (.*)$")
		public void enter_the_CustomerName(String FstName) {
			 N.GiveFirstname(FstName);
		}

@Then("Enter the Date (.*)$")
public void enter_the_Date(String string) {
   N.Date();
}


@Then("Enter the Address (.*)$")
public void enter_the_Address(String add) {
  N.GiveAddress(add);
}

@Then("Enter the City (.*)$")
public void enter_the_City(String city) {
  N.GiveCity(city);
}

@Then("Enter the State (.*)$")
public void enter_the_State(String state) {
    N.GiveState(state);
}

@Then("Enter the PIN (.*)$")
public void enter_the_PIN(String pin) {
   N.GivePin(pin);
}

@Then("Enter the MOB (.*)$")
public void enter_the_MOB(String Mob) {
	N.GivePhoneNUM(Mob);
 
}

@Then("Enter the Eamil (.*)$")
public void enter_the_Eamil(String email) {
   N.GiveEmail(email);
}

@When("Enter the Password (.*)$")
public void enter_the_Password(String Pass) {
   N.GivePassword(Pass);
}

@Then("click on submit button")
public void click_on_submit_button() throws InterruptedException {
    N.Submit();
    
}







	}

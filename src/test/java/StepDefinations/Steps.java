package StepDefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import PageObjects.Login;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Steps  {
   public  WebDriver driver;
   public static Login lp;
   
	
	@Given("user Launch Chrome Browser")
	public void user_Launch_Chrome_Browser() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
		driver=new ChromeDriver();
		 lp=new Login(driver);
	  }
	
	@When("User Open url {string}")
	public void user_Open_url(String url) {
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		driver.manage().window().maximize();
	    driver.get(url);
	}

	@When("^User enters (.*) and (.*)$")
	public void user_enters_UserName_as_and_Password_as(String username, String pass) {
	   lp.setuid(username);
	   lp.setPassword(pass);
	}

	@When("click on login") 
	public void click_on_login() {
	   lp.setLogin();
	}

	@Then("Page title should be {string}")
	public void page_title_should_be(String title) throws InterruptedException {
		title=driver.getTitle();
		Assert.assertEquals(title, driver.getTitle());
     
		}

	@Then("User LogOut from the Application")
	public void user_LogOut_from_the_Application()  {
		
		lp.Logout();
		
		}
	@Then("check for Invalid")
	public void check_for_Invalid() {
	    lp.Invalid();
	}

}

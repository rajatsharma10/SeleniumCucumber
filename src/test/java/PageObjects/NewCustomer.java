package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;

public class NewCustomer {

public WebDriver ldriver;
	  public NewCustomer(WebDriver rdriver) {
			ldriver=rdriver;
			PageFactory.initElements(rdriver, this);
			
		}

	
	 @FindBy(name = "uid")
     	@CacheLookup
	 WebElement uid;

	 @FindBy(name = "password")
	 @CacheLookup
	 WebElement Password;

	 @FindBy(name = "btnLogin")
	 @CacheLookup
	 WebElement button;
	  @FindBy(xpath = "//a[text()='New Customer']")
	  @CacheLookup
	  WebElement NewCustomer;
	  @FindBy(xpath = "//input[@name='name']")
	  @CacheLookup
	  WebElement FirstName;
	  @FindBy(xpath = "//input[@id='dob']")
	  @CacheLookup
	  WebElement Date;
	  @FindBy(xpath = "//textarea[@onblur='validateAddress();']")
	  @CacheLookup
	  WebElement Address;
	  @FindBy(xpath = "//input[@name='city']")
	  @CacheLookup
	   WebElement city;
	  @FindBy(xpath = "//input[@name='state']")
	  @CacheLookup
	   WebElement state;
	  @FindBy(xpath = "//input[@name='pinno']")
	  @CacheLookup
	   WebElement pin;
	  @FindBy(xpath = "//input[@name='telephoneno']")
	 
	  @CacheLookup
	   WebElement PhoneNum;
	  @FindBy(xpath = "//input[@name='emailid']")
	  @CacheLookup
	  WebElement Email;
	  @FindBy(xpath = "//input[@name='password']")
	  @CacheLookup
	   WebElement Pass;
	  @FindBy(xpath = "//input[@type='submit']")
	  @CacheLookup
	   WebElement clicknewcustomer;
	  

	  public  void setuid(String userID) {
		
			uid.sendKeys(userID);
		}
		public void setPassword(String userPassword) {
			
			Password.sendKeys(userPassword);
		}
		public void setLogin() {
			button.click();
		}
	  
public void clickNewCustomer() {
NewCustomer.click();
}
public void GiveFirstname(String FIRSTNAME) {

FirstName.sendKeys(FIRSTNAME);
}
public void Date() {
Date.sendKeys("0222022");
}
public void GiveAddress(String ADDRESS) {
Address.sendKeys(ADDRESS);
}
public void GiveCity(String CITY) {
city.sendKeys(CITY);
}
public void GiveState(String STATE) {
state.sendKeys(STATE);
}
public void GivePin(String PIN) {
pin.sendKeys(PIN);
}
public void GivePhoneNUM(String PHONENUMBER) {
PhoneNum.sendKeys(PHONENUMBER);
}
public void GiveEmail(String EMAIL) {
Email.sendKeys(EMAIL);
}
public void GivePassword(String PASSWORD) {
Pass.sendKeys(PASSWORD);
}
public void Submit() throws InterruptedException {
clicknewcustomer.click();
Thread.sleep(3000);
ldriver.switchTo().alert().accept();
}
@After 
public void cleanUp(){ 
    ldriver.close(); 
 } 

}




package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;


import StepDefinations.Steps;
import Utilities.Baseclass;

public class Login  {

public WebDriver ldriver;
   public Login(WebDriver rdriver) {
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

@FindBy(xpath = "//a[text()='Log out']")
@CacheLookup
WebElement logout;

public  void setuid(String userID) {

	uid.sendKeys(userID);
}
public void setPassword(String userPassword) {

	Password.sendKeys(userPassword);
}
public void setLogin() {
	button.click();
}
public void Logout(){
	
	 logout.click();
	 

     ldriver.switchTo().alert().accept();
  }
public void Invalid() {
      
	  ldriver.findElement(By.xpath("//input[@name='uid']")).sendKeys("InvalidUser");
	  ldriver.findElement(By.name("password")).sendKeys("12345");
	  ldriver.findElement(By.name("btnLogin")).click();
	 
	  if( ldriver.switchTo().alert().getText()=="User or Password is not valid") {
			Assert.assertTrue(false);
		  
		 
	  }else {
		  ldriver.switchTo().alert().accept();
	        Assert.assertTrue(true);
			
		 
	  }
	  
	 
	  
	
}


}



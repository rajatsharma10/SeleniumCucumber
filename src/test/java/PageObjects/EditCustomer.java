package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import PageObjects.*;

public class EditCustomer {

public WebDriver ldriver;
	  public EditCustomer(WebDriver rdriver) {
			ldriver=rdriver;
			}
     
	public void clickCustomerName(String Custid) {
		
	ldriver.findElement(By.xpath("//a[text()='Edit Customer']")).click();
	
	ldriver.findElement(By.name("cusid")).sendKeys(Custid);
	
	ldriver.findElement(By.name("AccSubmit")).click();  
	
	ldriver.findElement(By.name("addr")).clear();
	
	}
	public void UpdateAddress(String Upd) { 
		ldriver.findElement(By.name("addr")).sendKeys(Upd);
		
		ldriver.findElement(By.name("sub")).click();
	
		ldriver.switchTo().alert().accept();
	}
	
}

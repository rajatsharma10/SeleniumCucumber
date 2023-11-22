package TestRunner;



import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import managers.FileReaderManager;
import com.cucumber.listener.Reporter;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)

@CucumberOptions(
		features=".//Features/",
		glue="StepDefinations",
		dryRun=false,
		monochrome=true,
		
	
		plugin={
				"pretty:target/cucumber-htmlreport.text",
				"json:target/cucmber-report.json",
				 "html:target/cucumber-report/cucumber.html",
				 "junit:target/cucumber-reports/Cucumber.xml",
				// "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"
				 
				 				}

		)
          
				

public class testRun {
	
//	@AfterClass
//	public static void writeExtentReport() {
//		Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getConfigReader().getReportConfigPath()));
//	}

}


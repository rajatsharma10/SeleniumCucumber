$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login Action",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User Open url \"https://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \u003cUserName\u003e and \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "name": "Page title should be \"Guru99 Bank Manager HomePage\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User LogOut from the Application",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "",
        "Password"
      ]
    },
    {
      "cells": [
        "mngr440587",
        "",
        "jUpypUd"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user Launch Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.Steps.user_Launch_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Open url \"https://demo.guru99.com/V4/\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.Steps.user_Open_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters mngr440587 and jUpypUd",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.Steps.user_enters_UserName_as_and_Password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.Steps.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Guru99 Bank Manager HomePage\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.Steps.page_title_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User LogOut from the Application",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.Steps.user_LogOut_from_the_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check for Invalid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "check for Invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.Steps.check_for_Invalid()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/NewCustomer.feature");
formatter.feature({
  "name": "NewCustomer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Create the new customer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Login again User enters \u003cUserName\u003e  and \u003cPassword\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "Click On the NewCustomer Button",
  "keyword": "When "
});
formatter.step({
  "name": "Check title \" Guru99 Bank New Customer Entry Page \"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "",
        "Password"
      ]
    },
    {
      "cells": [
        "mngr440587",
        "",
        "jUpypUd"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create the new customer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Login again User enters mngr440587  and jUpypUd",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.login_again_User_enters_Username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On the NewCustomer Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.click_On_the_NewCustomer_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Check title \" Guru99 Bank New Customer Entry Page \"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.check_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "table Form of new Customer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter the CustomerName \u003cNAME\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter the Date \u003cDATE\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter the Address \u003cADD\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter the City \u003cCITY\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter the State \u003cSTATE\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter the PIN \u003cPIN\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter the MOB \u003cMOB\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter the Eamil \u003cEMAIL\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter the Password \u003cPASS\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "NAME",
        "",
        "DATE",
        "",
        "ADD",
        "",
        "CITY",
        "",
        "STATE",
        "",
        "PIN",
        "",
        "MOB",
        "",
        "EMAIL",
        "",
        "PASS"
      ]
    },
    {
      "cells": [
        "RsCertds",
        "",
        "0222022",
        "",
        "295 Wisdon streethumdge gardeUSA",
        "",
        "NEW YORK",
        "",
        "North Eastern USA",
        "",
        "452011",
        "",
        "9111911946",
        "",
        "rajatsharma.er@gmail.com",
        "",
        "Rajat@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "table Form of new Customer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter the CustomerName RsCertds",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_CustomerName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Date 0222022",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_Date(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Address 295 Wisdon streethumdge gardeUSA",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_Address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the City NEW YORK",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_City(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the State North Eastern USA",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_State(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the PIN 452011",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_PIN(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the MOB 9111911946",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_MOB(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Eamil rajatsharma.er@gmail.com",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_Eamil(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Password Rajat@123",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_Password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Click on edit customer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click On Edit Customer \"50441\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Update the address \u003cUpdateAddress\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UpdateAddress"
      ]
    },
    {
      "cells": [
        "NSDL e-Governance Infrastructure Limited Kamala Mills Compound Senapati Bapat Marg Lower Parel Mumbai  400 013"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Click on edit customer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click On Edit Customer \"50441\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.StepClickEdit.click_On_Edit_Customer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Update the address NSDL e-Governance Infrastructure Limited Kamala Mills Compound Senapati Bapat Marg Lower Parel Mumbai  400 013",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepClickEdit.update_the_address_UpdateAddress(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027name\u0027]\"}\n  (Session info: chrome\u003d106.0.5249.119)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027CISM538\u0027, ip: \u0027192.168.8.29\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.4.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f6162d47cf5c4748ca10609e4cc9ee00, findElement {using\u003dxpath, value\u003d//input[@name\u003d\u0027name\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\RAJAT~1.S(2\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:62893}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62893/devtoo..., se:cdpVersion: 106.0.5249.119, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f6162d47cf5c4748ca10609e4cc9ee00\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:387)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:379)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy21.sendKeys(Unknown Source)\r\n\tat PageObjects.NewCustomer.GiveFirstname(NewCustomer.java:85)\r\n\tat StepDefinations.StepNewCustomer.enter_the_CustomerName(StepNewCustomer.java:45)\r\n\tat ✽.Enter the CustomerName RsCertds(file:///C:/Users/rajat.s(2608)/git/repository/CucumberDemo/./Features/NewCustomer.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter the Date 0222022",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_Date(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Address 295 Wisdon streethumdge gardeUSA",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_Address(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the City NEW YORK",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_City(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the State North Eastern USA",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_State(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the PIN 452011",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_PIN(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the MOB 9111911946",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_MOB(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Eamil rajatsharma.er@gmail.com",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_Eamil(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Password Rajat@123",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.enter_the_Password(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepNewCustomer.click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Click on edit customer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click On Edit Customer \"50441\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Update the address \u003cUpdateAddress\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UpdateAddress"
      ]
    },
    {
      "cells": [
        "NSDL e-Governance Infrastructure Limited Kamala Mills Compound Senapati Bapat Marg Lower Parel Mumbai  400 013"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Click on edit customer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Click On Edit Customer \"50441\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinations.StepClickEdit.click_On_Edit_Customer(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Edit Customer\u0027]\"}\n  (Session info: chrome\u003d106.0.5249.119)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.3.0\u0027, revision: \u0027a4995e2c09*\u0027\nSystem info: host: \u0027CISM538\u0027, ip: \u0027192.168.8.29\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.4.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f6162d47cf5c4748ca10609e4cc9ee00, findElement {using\u003dxpath, value\u003d//a[text()\u003d\u0027Edit Customer\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 106.0.5249.119, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\RAJAT~1.S(2\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:62893}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62893/devtoo..., se:cdpVersion: 106.0.5249.119, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f6162d47cf5c4748ca10609e4cc9ee00\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:387)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:379)\r\n\tat PageObjects.EditCustomer.clickCustomerName(EditCustomer.java:20)\r\n\tat StepDefinations.StepClickEdit.click_On_Edit_Customer(StepClickEdit.java:11)\r\n\tat ✽.Click On Edit Customer \"50441\"(file:///C:/Users/rajat.s(2608)/git/repository/CucumberDemo/./Features/NewCustomer.feature:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Update the address NSDL e-Governance Infrastructure Limited Kamala Mills Compound Senapati Bapat Marg Lower Parel Mumbai  400 013",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.StepClickEdit.update_the_address_UpdateAddress(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});
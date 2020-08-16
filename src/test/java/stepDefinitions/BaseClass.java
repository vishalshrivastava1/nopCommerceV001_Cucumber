package stepDefinitions;

import java.util.Properties;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

public class BaseClass {

	public WebDriver driver;
	public LoginPage lp;
	public AddCustomerPage addCust;
	public SearchCustomerPage searchCust ;
	public static Logger logger ;
	public Properties configProp;
	
	
	//Created for generating random string for unique email
	public static String randomestring() {
		String generatedstring = RandomStringUtils.randomAlphabetic(8);
		return generatedstring;
	}
	
	
	//Created for generating random number for unique numeric digit
	public static String randomenumber() {
		String generatednumber = RandomStringUtils.randomNumeric(8);
		return generatednumber;
	}
	
}

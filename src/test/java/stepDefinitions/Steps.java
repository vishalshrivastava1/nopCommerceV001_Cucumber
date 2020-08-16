package stepDefinitions;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

public class Steps extends BaseClass {
	
	//Hook Concept in Cucumber....
	@Before
	public void setup() throws IOException 
	{
		
		logger = Logger.getLogger("nopCommerce");  //Added Logger
		PropertyConfigurator.configure("Log4j.properties");
		
		//Reading properties
		configProp = new Properties();
		FileInputStream configPropFile = new FileInputStream("config.properties");
		configProp.load(configPropFile);
		
	
		String br = configProp.getProperty("browser");
		
		if(br.equals("chrome")) 
		{
		System.setProperty("webdriver.chrome.driver", configProp.getProperty("chromepath"));
		driver = new ChromeDriver();
		}
		else if(br.equals("firefox")) 
		{
		System.setProperty("webdriver.gecko.driver", configProp.getProperty("firefoxpath"));
		driver = new FirefoxDriver();
		}
		else if(br.equals("ie")) 
		{
		System.setProperty("webdriver.ie.driver", configProp.getProperty("iepath"));
		driver = new InternetExplorerDriver();
		}	
		
		logger.info("********Launching Browser********");
	}
	
	
	@Given("User Launch Chrome Browser")
	public void user_Launch_Chrome_Browser()  {
			
		lp = new LoginPage(driver);

	}

	//@When("User opens URL")
	@Given("User opens URL \"([^\"]*)\"")
	public void user_opens_URL(String url)  {
		logger.info("********Opening URL********");
		driver.get(url);
		driver.manage().window().maximize();
	}
   

    @When("User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"")
    public void user_enters_Email_as_and_Password_as(String email, String password)  {
		logger.info("********Providing login details user name and password********");
    	lp.setUserName(email);
    	lp.setPassword(password);
    }

    @When("Click on Login")
    public void click_on_Login() throws InterruptedException {
		logger.info("********Started Login********");
    	lp.clickLogin();
      	Thread.sleep(3000);
    }

    
    @Then("Page Title should be \"([^\"]*)\"")
    public void page_Title_should_be(String title) {

    	if(driver.getPageSource().contains("Login was unsuccessful.")) {
    		driver.close();
    		logger.info("********Login Pass********");
    		Assert.assertTrue(false);
    	}else {
    		logger.info("********Login Failed********");
    		Assert.assertEquals(title, driver.getTitle());
    	}
    }

    
    @When("User click on Logout Link")
    public void user_click_on_Logout_Link() throws InterruptedException {
		logger.info("********Click on Logout Link********");
    	lp.clickLogout();
    	Thread.sleep(3000);
    }

    @Then("close browser")
    public void close_browser() throws Throwable {
		logger.info("********Closing browser********");
    	driver.close();
    }
    
    // Customer Feature STep Definition--------------------------------------------------
    
    
    @Then("User can view Dashboard")
    public void user_can_view_Dashboard() { 	
    	addCust = new AddCustomerPage(driver);
    	Assert.assertEquals("Dashboard / nopCommerce administration", addCust.getPageTitle());
    }

    @When("User click on customers Menu")
    public void user_click_on_customers_Menu() throws InterruptedException  {
    	Thread.sleep(3000);
    	addCust.clickOnCustomersMenu();
    }

    @When("Click on customer Menu Item")
    public void click_on_customer_Menu_Item() throws InterruptedException  {
    	Thread.sleep(2000);
    	addCust.clickOnCustomersMenuItem();
    }

    @When("Click on Add new button")
    public void click_on_Add_new_button() throws InterruptedException  {
    	addCust.clickOnAddnew();
    	Thread.sleep(2000);
    }

    @Then("User can view Add new customer page")
    public void user_can_view_Add_new_customer_page()  {
    	Assert.assertEquals("Add a new customer / nopCommerce administration", addCust.getPageTitle());
    }

    @When("User enters customer information")
    public void user_enters_customer_information() throws InterruptedException  {
		logger.info("********Adding new customer********");
    	String email = randomestring() + "@gmail.com";
    	addCust.setEmail(email);
    	addCust.setPassword("test123");
    	
    	/*
     	 * Registered = Default.
    	 * The customer can not be in both'Guests' or 'Registered' customer roles.
    	 * Add customer to 'Guests' or 'Registered' customer roles.
    	 */
    	
    	addCust.setCustomerRoles("Guest");
    	Thread.sleep(3000);
    	addCust.setManagerOfVendor("Vendor 2");
    	addCust.setGender("Male");
    	addCust.setFirstName("Vishal");
    	addCust.setLastName("Shrivastava");
    	addCust.setDob("1/6/1980");  // Format: 'DD/MM/YYYY'
    	addCust.setCompanyName("Equifax");
    	addCust.setAdminContent("This for testing..........");

    }

    @When("Click on Save button")
    public void click_on_Save_button() throws InterruptedException {
		logger.info("********Saving customer data********");
    	Thread.sleep(3000);
    	addCust.clickOnSave();

    }

    @Then("User can view confirmation message \"([^\"]*)\"$")
    public void user_can_view_confirmation_message(String msg)  {
    	Assert.assertTrue(driver.findElement(By.tagName("body")).getText()
    			.contains("The new customer has been added successfully."));
		logger.info("********The new customer has been added successfully********");
    }


    // Steps for searching a customer using Email ID .......................................
    
    
    @When("Enter customer Email")
    public void enter_customer_Email() {
		logger.info("********Searching customer by using Email ID********");
    	searchCust = new SearchCustomerPage(driver);
    	searchCust.setEmail("victoria_victoria@nopCommerce.com");
    }

    @When("Click on search button")
    public void click_on_search_button() throws InterruptedException  {
		logger.info("********Search Button has been clicked********");
    	searchCust.clickSearch();
    	Thread.sleep(3000);
    }

    @Then("User should found Email in the search table")
    public void user_should_found_Email_in_the_search_table()  {
    	boolean status = searchCust.searchCustomerByEmail("victoria_victoria@nopCommerce.com");
		logger.info("********Email should be present in search table********");
    	Assert.assertEquals(true, status);
    }


    // STeps for searching a customer by using First name and Last name........................
    
    
    @When("Enter customer First name")
    public void enter_customer_First_name()  {
		logger.info("********Searching customer by name********");
    	searchCust = new SearchCustomerPage(driver);
    	searchCust.setFirstName("Victoria");

    }

    @When("Enter customer Last name")
    public void enter_customer_Last_name()  {
    	searchCust = new SearchCustomerPage(driver);
    	searchCust.setLastName("Terces");

    }

    @Then("User should found Name in the search table")
    public void user_should_found_Name_in_the_search_table()  { 
		logger.info("********Name is present in the search table********");
    	boolean status = searchCust .searchCustomerByName("Victoria Terces");
    	Assert.assertEquals(true, status);
    }



}

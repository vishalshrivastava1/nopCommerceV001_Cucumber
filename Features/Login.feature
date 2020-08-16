Feature: Login

@Sanity
  Scenario: Successful Login with Valid Credentials
    Given User Launch Chrome Browser
    When User opens URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    And User enters Email as "admin@yourstore.com" and Password as "admin"
    And Click on Login
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User click on Logout Link
    Then Page Title should be "Your store. Login"
    And close browser

@Regression
  Scenario Outline: Login Data Driven
    Given User Launch Chrome Browser
    When User opens URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    And User enters Email as "<email>" and Password as "<password>"
    And Click on Login
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User click on Logout Link
    Then Page Title should be "Your store. Login"
    And close browser
    
    Examples:
    | email               | password |
    | admin@yourstore.com | admin    |
    | admin@yourstore.com | admin123 |
    
    
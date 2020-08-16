Feature: Customers

  Background: Below are the common steps for each scenario
    Given User Launch Chrome Browser
    When User opens URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    And User enters Email as "admin@yourstore.com" and Password as "admin"
    And Click on Login
    Then User can view Dashboard
    When User click on customers Menu

@Sanity
  Scenario: Add new customer
    And Click on customer Menu Item
    And Click on Add new button
    Then User can view Add new customer page
    When User enters customer information
    And Click on Save button
    Then User can view confirmation message "The new customer has been added sucessfully"
    And close browser

@Regression
  Scenario: Search Customer by EmailID
    And Click on customer Menu Item
    And Enter customer Email
    When Click on search button
    Then User should found Email in the search table
    And close browser

@Regression
  Scenario: Search Customer by EmailID
    And Click on customer Menu Item
    And Enter customer First name
    And Enter customer Last name
    When Click on search button
    Then User should found Name in the search table
    And close browser

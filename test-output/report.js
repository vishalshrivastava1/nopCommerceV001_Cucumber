$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Customer.feature");
formatter.feature({
  "line": 1,
  "name": "Customers",
  "description": "",
  "id": "customers",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8305080600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_Browser()"
});
formatter.result({
  "duration": 105620000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 7346395700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 189820800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 14928757200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 7959400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customers_Menu()"
});
formatter.result({
  "duration": 3091153400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Add new customer",
  "description": "",
  "id": "customers;add-new-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Click on customer Menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Add new button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User can view Add new customer page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters customer information",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User can view confirmation message \"The new customer has been added sucessfully\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_customer_Menu_Item()"
});
formatter.result({
  "duration": 4094989700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_new_button()"
});
formatter.result({
  "duration": 5004364000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Add_new_customer_page()"
});
formatter.result({
  "duration": 16193800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_customer_information()"
});
formatter.result({
  "duration": 10006605800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Save_button()"
});
formatter.result({
  "duration": 7815738200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added sucessfully",
      "offset": 36
    }
  ],
  "location": "Steps.user_can_view_confirmation_message(String)"
});
formatter.result({
  "duration": 167051900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 377772600,
  "status": "passed"
});
formatter.before({
  "duration": 5224011700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_Browser()"
});
formatter.result({
  "duration": 421000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 7520064600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 212282200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 15976681500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 5553300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customers_Menu()"
});
formatter.result({
  "duration": 3080239400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search Customer by EmailID",
  "description": "",
  "id": "customers;search-customer-by-emailid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Click on customer Menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter customer Email",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User should found Email in the search table",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_customer_Menu_Item()"
});
formatter.result({
  "duration": 4187713000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_Email()"
});
formatter.result({
  "duration": 195706200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "duration": 3060728600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_found_Email_in_the_search_table()"
});
formatter.result({
  "duration": 60115300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 51046600,
  "status": "passed"
});
formatter.before({
  "duration": 5372064900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_Browser()"
});
formatter.result({
  "duration": 388500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 6321420000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 180944700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 10744443600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 13950100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customers_Menu()"
});
formatter.result({
  "duration": 3081492500,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Search Customer by EmailID",
  "description": "",
  "id": "customers;search-customer-by-emailid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Click on customer Menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Enter customer First name",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Enter customer Last name",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User should found Name in the search table",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_customer_Menu_Item()"
});
formatter.result({
  "duration": 3325189000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_First_name()"
});
formatter.result({
  "duration": 101305900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_Last_name()"
});
formatter.result({
  "duration": 88213100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "duration": 3073006200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_found_Name_in_the_search_table()"
});
formatter.result({
  "duration": 77447900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 49184200,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5172545800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on Logout Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_Browser()"
});
formatter.result({
  "duration": 240100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 6818856900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 223772000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 10517367400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 43089500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Logout_Link()"
});
formatter.result({
  "duration": 4349799700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 18672900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 61011200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click on Logout Link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login;login-data-driven;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 26,
      "id": "login;login-data-driven;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 27,
      "id": "login;login-data-driven;;2"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin123"
      ],
      "line": 28,
      "id": "login;login-data-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5100676400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click on Logout Link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_Browser()"
});
formatter.result({
  "duration": 150600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 5862474400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 193121800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 11509755800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 25349100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Logout_Link()"
});
formatter.result({
  "duration": 5083311300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 10149100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 39463200,
  "status": "passed"
});
formatter.before({
  "duration": 5052330900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click on Logout Link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_Browser()"
});
formatter.result({
  "duration": 272200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 7354799300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin123",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 179832400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 4467833400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 53775500,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepDefinitions.Steps.page_Title_should_be(Steps.java:96)\r\n\tat ✽.Then Page Title should be \"Dashboard / nopCommerce administration\"(Login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_click_on_Logout_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});
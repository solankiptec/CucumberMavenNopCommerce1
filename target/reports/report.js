$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/HomeWork14/Books.feature");
formatter.feature({
  "line": 1,
  "name": "Categories List Menu and Book Category",
  "description": "As a user\r\nI want to see Categories List on Home page\r\nSo that I can go to those categories Page",
  "id": "categories-list-menu-and-book-category",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "I can see the Categories List on Home page",
  "description": "",
  "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Books"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on Books",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I can see the Categories heading on left side of Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can see \"\u003cCategory List\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;",
  "rows": [
    {
      "cells": [
        "Category List"
      ],
      "line": 13,
      "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;1"
    },
    {
      "cells": [
        "Computers"
      ],
      "line": 14,
      "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;2"
    },
    {
      "cells": [
        "Electronics"
      ],
      "line": 15,
      "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;3"
    },
    {
      "cells": [
        "Apparel"
      ],
      "line": 16,
      "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;4"
    },
    {
      "cells": [
        "Digital downloads"
      ],
      "line": 17,
      "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;5"
    },
    {
      "cells": [
        "Books"
      ],
      "line": 18,
      "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;6"
    },
    {
      "cells": [
        "Jewellery"
      ],
      "line": 19,
      "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;7"
    },
    {
      "cells": [
        "Gift Cards"
      ],
      "line": 20,
      "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13986598110,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I can see the Categories List on Home page",
  "description": "",
  "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Books"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on Books",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I can see the Categories heading on left side of Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can see \"Computers\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BooksStepdefs.iClickOnBooks()"
});
formatter.result({
  "duration": 644932853,
  "status": "passed"
});
formatter.match({
  "location": "BooksStepdefs.iCanSeeTheCategoriesHeadingOnLeftSideOfHomePage()"
});
formatter.result({
  "duration": 1864433930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 11
    }
  ],
  "location": "BooksStepdefs.iCanSee(String)"
});
formatter.result({
  "duration": 145128280,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertTrue(Assert.java:41)\r\n\tat org.testng.Assert.assertTrue(Assert.java:51)\r\n\tat PageObjects.BooksPage.verifyUseCanSeeListOfAllCategoriesItems(BooksPage.java:27)\r\n\tat HomeWork14.BooksStepdefs.iCanSee(BooksStepdefs.java:28)\r\n\tat ✽.And I can see \"Computers\"(src/test/Resources/HomeWork14/Books.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1195100570,
  "status": "passed"
});
formatter.before({
  "duration": 10289949523,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "I can see the Categories List on Home page",
  "description": "",
  "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Books"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on Books",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I can see the Categories heading on left side of Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can see \"Electronics\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BooksStepdefs.iClickOnBooks()"
});
formatter.result({
  "duration": 421501011,
  "status": "passed"
});
formatter.match({
  "location": "BooksStepdefs.iCanSeeTheCategoriesHeadingOnLeftSideOfHomePage()"
});
formatter.result({
  "duration": 2616636647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 11
    }
  ],
  "location": "BooksStepdefs.iCanSee(String)"
});
formatter.result({
  "duration": 102793443,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertTrue(Assert.java:41)\r\n\tat org.testng.Assert.assertTrue(Assert.java:51)\r\n\tat PageObjects.BooksPage.verifyUseCanSeeListOfAllCategoriesItems(BooksPage.java:27)\r\n\tat HomeWork14.BooksStepdefs.iCanSee(BooksStepdefs.java:28)\r\n\tat ✽.And I can see \"Electronics\"(src/test/Resources/HomeWork14/Books.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 705730997,
  "status": "passed"
});
formatter.before({
  "duration": 10156882944,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "I can see the Categories List on Home page",
  "description": "",
  "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Books"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on Books",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I can see the Categories heading on left side of Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can see \"Apparel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BooksStepdefs.iClickOnBooks()"
});
formatter.result({
  "duration": 411355943,
  "status": "passed"
});
formatter.match({
  "location": "BooksStepdefs.iCanSeeTheCategoriesHeadingOnLeftSideOfHomePage()"
});
formatter.result({
  "duration": 1600064315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 11
    }
  ],
  "location": "BooksStepdefs.iCanSee(String)"
});
formatter.result({
  "duration": 118114105,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertTrue(Assert.java:41)\r\n\tat org.testng.Assert.assertTrue(Assert.java:51)\r\n\tat PageObjects.BooksPage.verifyUseCanSeeListOfAllCategoriesItems(BooksPage.java:27)\r\n\tat HomeWork14.BooksStepdefs.iCanSee(BooksStepdefs.java:28)\r\n\tat ✽.And I can see \"Apparel\"(src/test/Resources/HomeWork14/Books.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 697559436,
  "status": "passed"
});
formatter.before({
  "duration": 10810861860,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "I can see the Categories List on Home page",
  "description": "",
  "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Books"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on Books",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I can see the Categories heading on left side of Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can see \"Digital downloads\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BooksStepdefs.iClickOnBooks()"
});
formatter.result({
  "duration": 405585091,
  "status": "passed"
});
formatter.match({
  "location": "BooksStepdefs.iCanSeeTheCategoriesHeadingOnLeftSideOfHomePage()"
});
formatter.result({
  "duration": 1563766316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 11
    }
  ],
  "location": "BooksStepdefs.iCanSee(String)"
});
formatter.result({
  "duration": 131883329,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertTrue(Assert.java:41)\r\n\tat org.testng.Assert.assertTrue(Assert.java:51)\r\n\tat PageObjects.BooksPage.verifyUseCanSeeListOfAllCategoriesItems(BooksPage.java:27)\r\n\tat HomeWork14.BooksStepdefs.iCanSee(BooksStepdefs.java:28)\r\n\tat ✽.And I can see \"Digital downloads\"(src/test/Resources/HomeWork14/Books.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 703470979,
  "status": "passed"
});
formatter.before({
  "duration": 13991279363,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "I can see the Categories List on Home page",
  "description": "",
  "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Books"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on Books",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I can see the Categories heading on left side of Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can see \"Books\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BooksStepdefs.iClickOnBooks()"
});
formatter.result({
  "duration": 498984381,
  "status": "passed"
});
formatter.match({
  "location": "BooksStepdefs.iCanSeeTheCategoriesHeadingOnLeftSideOfHomePage()"
});
formatter.result({
  "duration": 2090786478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 11
    }
  ],
  "location": "BooksStepdefs.iCanSee(String)"
});
formatter.result({
  "duration": 128970748,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertTrue(Assert.java:41)\r\n\tat org.testng.Assert.assertTrue(Assert.java:51)\r\n\tat PageObjects.BooksPage.verifyUseCanSeeListOfAllCategoriesItems(BooksPage.java:27)\r\n\tat HomeWork14.BooksStepdefs.iCanSee(BooksStepdefs.java:28)\r\n\tat ✽.And I can see \"Books\"(src/test/Resources/HomeWork14/Books.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 998373300,
  "status": "passed"
});
formatter.before({
  "duration": 10310451764,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "I can see the Categories List on Home page",
  "description": "",
  "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Books"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on Books",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I can see the Categories heading on left side of Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can see \"Jewellery\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BooksStepdefs.iClickOnBooks()"
});
formatter.result({
  "duration": 576484429,
  "status": "passed"
});
formatter.match({
  "location": "BooksStepdefs.iCanSeeTheCategoriesHeadingOnLeftSideOfHomePage()"
});
formatter.result({
  "duration": 1743068563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewellery",
      "offset": 11
    }
  ],
  "location": "BooksStepdefs.iCanSee(String)"
});
formatter.result({
  "duration": 124313014,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertTrue(Assert.java:41)\r\n\tat org.testng.Assert.assertTrue(Assert.java:51)\r\n\tat PageObjects.BooksPage.verifyUseCanSeeListOfAllCategoriesItems(BooksPage.java:27)\r\n\tat HomeWork14.BooksStepdefs.iCanSee(BooksStepdefs.java:28)\r\n\tat ✽.And I can see \"Jewellery\"(src/test/Resources/HomeWork14/Books.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1112790125,
  "status": "passed"
});
formatter.before({
  "duration": 12237501262,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "I can see the Categories List on Home page",
  "description": "",
  "id": "categories-list-menu-and-book-category;i-can-see-the-categories-list-on-home-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Books"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on Books",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I can see the Categories heading on left side of Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can see \"Gift Cards\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BooksStepdefs.iClickOnBooks()"
});
formatter.result({
  "duration": 458242462,
  "status": "passed"
});
formatter.match({
  "location": "BooksStepdefs.iCanSeeTheCategoriesHeadingOnLeftSideOfHomePage()"
});
formatter.result({
  "duration": 2370010639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 11
    }
  ],
  "location": "BooksStepdefs.iCanSee(String)"
});
formatter.result({
  "duration": 94491883,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertTrue(Assert.java:41)\r\n\tat org.testng.Assert.assertTrue(Assert.java:51)\r\n\tat PageObjects.BooksPage.verifyUseCanSeeListOfAllCategoriesItems(BooksPage.java:27)\r\n\tat HomeWork14.BooksStepdefs.iCanSee(BooksStepdefs.java:28)\r\n\tat ✽.And I can see \"Gift Cards\"(src/test/Resources/HomeWork14/Books.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 923765734,
  "status": "passed"
});
});
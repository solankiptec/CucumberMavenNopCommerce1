package HomeWork14;

import HomeWork14.BasePage;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.List;

public class BooksStepdefs extends BasePage {
    @When("^I click on Books$")
    public void iClickOnBooks() {
        homePage.navigateToBooks();
    }

    @Then("^I can see the Categories heading on left side of Home page$")
    public void iCanSeeTheCategoriesHeadingOnLeftSideOfHomePage() {
        booksPage.verifyUserCanSeeCategoriesAsTitle();
    }


    @And("^I can see Category List$")
    public void iCanSeeCategoryList()  {
        booksPage.verifyUseCanSeeListOfAllCategoriesItems("category");

    }
}

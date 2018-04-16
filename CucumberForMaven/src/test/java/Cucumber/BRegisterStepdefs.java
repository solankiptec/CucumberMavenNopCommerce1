package Cucumber;

import PageObjects.AHomePage;
import PageObjects.BRegisterPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;


public class BRegisterStepdefs extends BasePage {

    @Given("^User is on home page$")
    public void user_is_on_home_page(){
        AHomePage aHomePage = new AHomePage();
        aHomePage.navigateToRegistrationPage();

    }

    @When("^User enter valid credential$")
    public void user_enter_valid_credential(){
        BRegisterPage bRegisterPage = new BRegisterPage();
        bRegisterPage.userShouldAbleToRegisterSuccessfully();

    }

    @Then("^User should able to register successfully$")
    public void user_should_able_to_register_successfully(){

        String expected = "Your registration completed";
        String actual = driver.findElement(By.className("result")).getText();
        Assert.assertEquals(actual, expected, "Assertion to verify if user is able to register successfully on NopCommerce registration page has failed. Please check details again.");
    }

    }






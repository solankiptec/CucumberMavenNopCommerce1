package Cucumber;

import PageObjects.AHomePage;
import PageObjects.CEuropage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;


public class CEuroPageStepdefs extends BasePage{



    @Given("^User is on euro page$")
    public void user_is_on_euro_page(){

        AHomePage aHomePage = new AHomePage();
        aHomePage.navigateToRegistrationPage();
    }

    @When("^User select valid currency$")
    public void user_select_valid_currency(){
        CEuropage cEuropage = new CEuropage();
        cEuropage.userShouldAbleChangeCurrency();

    }

    @Then("^User should able to change currency successfully$")
    public void user_should_able_to_change_currency_successfully(){
        String expected = "Euro";
        String actual = driver.findElement(By.id("customerCurrency")).getText();
        Assert.assertEquals(actual, expected, "User is able to change currency");
    }


}




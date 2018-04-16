package HomeWork14;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;

public class RegisterStepdefs extends BasePage{
    @Given("^User is on register page$")
    public void userIsOnRegisterPage() {
        homePage.navigateToRegisterPage();    }

    @When("^User has to fill register form with valid details$")
    public void userHasToFillRegisterFormWithValidDetails() {

        registerPage.useHasToFillRegisterationFormWithValidDeatils();
    }

    @Then("^User registered successfully and see the message \"([^\"]*)\"$")
    public void userRegisteredSuccessfullyAndSeeTheMessage(String expectedMessage) {
        String actualMessage = Utils.actualText(By.xpath("//form/div/div[2]/div"));
        expectedMessage = "Your registration completed";
        Assert.assertEquals(actualMessage,expectedMessage,"User is NOT able to register");
    }
}

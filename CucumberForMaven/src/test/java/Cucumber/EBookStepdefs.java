package Cucumber;


import PageObjects.AHomePage;
import PageObjects.EBookPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by Welcome on 25/03/2018.
 */
public class EBookStepdefs {
    @Given("^User is on book page$")
    public void userIsOnBookPage() {
        AHomePage aHomePage = new AHomePage();
        aHomePage.navigateToRegistrationPage();

    }

    @When("^User select any product$")
    public void userSelectAnyProduct()  {
        EBookPage eBookPage = new EBookPage();
        eBookPage.userShouldableToBuyBook();

    }

    @Then("^User should able to buy product successfully$")
    public void userShouldAbleToBuyProductSuccessfully() {

    }


}

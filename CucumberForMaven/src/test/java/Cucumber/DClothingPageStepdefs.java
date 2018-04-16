package Cucumber;

import PageObjects.AHomePage;
import PageObjects.DClothinPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class DClothingPageStepdefs extends BasePage {



    @Given("^User is on clothing page$")
    public void user_is_on_clothing_page(){
        AHomePage aHomePage = new AHomePage();
        aHomePage.navigateToRegistrationPage();
    }
    @When("^User click on position and display$")
    public void user_click_on_position_and_display(){
        DClothinPage dClothinPage = new DClothinPage();
        dClothinPage.userShouldAbleToChangePositionAndDisplayOfProduct();

    }

    @Then("^User should able to change prise high to low and display (\\d+) product successfully$")
    public void user_should_able_to_change_prise_high_to_low_and_display_product_successfully(int arg1) {
    }




}

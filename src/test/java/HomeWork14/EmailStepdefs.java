package HomeWork14;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;

import static HomeWork14.BasePage.*;

public class EmailStepdefs {

    @When("^User navigates to Build your own computer page$")
    public void userNavigatesToBuildYourOwnComputerPage() {
        Utils.homePage(loadProp.getProperty("baseUrl"));
        homePage.navigateToBuildYourOwnComputerPage();
    }

    @When("^Clicks on Email A Friend Button$")
    public void clicksOnEmailAFriendButton() {
        buildYourOwnComputerPage.navigateToEmailAFriendPage();
    }

    @When("^Enters all valid details for Email A Friend page$")
    public void entersAllValidDetailsForEmailAFriendPage() {
        emailAFriendPage.fillEmailAFriendForm();
    }

    @Then("^User can send email successfully$")
    public void userCanSendEmailSuccessfully() {
        String actualMessage = Utils.actualText(By.xpath("//div[3]/div/div/div/div[2]/div[2]"));
        String expectedMessage = loadProp.getProperty("expectedMessageEmailAFriend");
        Assert.assertEquals(actualMessage,expectedMessage,"Existing user is not able to email a friend"); //hard assert
    }


    @Then("^User NOT able to email a friend and see \"([^\"]*)\"$")
    public void userNOTAbleToEmailAFriendAndSee(String expectedMessage) {
        String actualMessage = Utils.actualText(By.xpath("//form/div/div/ul/li"));
        softAssert.assertEquals(actualMessage,expectedMessage,"Existing user is not able to email a friend"); //soft assert
        softAssert.assertAll();
    }
}

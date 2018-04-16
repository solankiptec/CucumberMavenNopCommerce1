package PageObjects;

import HomeWork14.BasePage;
import HomeWork14.Utils;
import org.openqa.selenium.By;

public class BuildYourOwnComputerPage extends BasePage {

    private By _EmailAFriendButton = By.cssSelector("input[value=\"Email a friend\"]");

    public void navigateToEmailAFriendPage(){
        Utils.clickElement(_EmailAFriendButton);
    }
}

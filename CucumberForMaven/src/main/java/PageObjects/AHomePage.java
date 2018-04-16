package PageObjects;

import Cucumber.BasePage;
import Cucumber.Utils;
import org.openqa.selenium.By;

public class AHomePage extends BasePage {

    public void navigateToRegistrationPage()
    {

        driver.findElement(By.linkText("Register")).click();

    }
    public void navigationToEmailFriend() {
        driver.findElement(By.name("register-continue")).click();
    }

    public void enterLogInCredentials(String uname, String pward){

        Utils.clearAndEnter(By.id("txtUsername"),uname);
        Utils.clearAndEnter(By.id("txtPassword"),pward);
        Utils.clickElement(By.id("btnLogin"));
    }

}
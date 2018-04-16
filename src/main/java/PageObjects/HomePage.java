package PageObjects;

import HomeWork14.BasePage;
import HomeWork14.Utils;
import org.openqa.selenium.By;

public class HomePage extends BasePage {

    private By _Register = By.linkText("Register");
    private By _BuildYourOwnComputer = By.linkText("Build your own computer");
    private By _Apparel = By.linkText("Apparel");
    private By _Clothing = By.linkText("Clothing");
    private By _Books = By.linkText("Books");

    public void navigateToRegisterPage() {
        Utils.clickElement(_Register);
    }

    public void navigateToBuildYourOwnComputerPage(){
        Utils.clickElement(_BuildYourOwnComputer);
    }

    public void navigateToClothingPageHoverOnApparel(){ Utils.hoverEffect(_Apparel, _Clothing); }

    public void navigateToBooks(){Utils.clickElement(_Books);}
}
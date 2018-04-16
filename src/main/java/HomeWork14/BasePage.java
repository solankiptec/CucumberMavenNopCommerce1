package HomeWork14;

import PageObjects.*;
import org.openqa.selenium.WebDriver;
import org.testng.asserts.SoftAssert;

public class BasePage {
    protected static WebDriver driver;

    protected static BrowserSelector browserSelector=new BrowserSelector();
    protected static LoadProp loadProp=new LoadProp();
    protected static SoftAssert softAssert = new SoftAssert();
    protected static HomePage homePage = new HomePage();
    protected static RegisterPage registerPage = new RegisterPage();
    protected static BuildYourOwnComputerPage buildYourOwnComputerPage=new BuildYourOwnComputerPage();
    protected static EmailAFriendPage emailAFriendPage=new EmailAFriendPage();
    protected static ClothingPage clothingPage = new ClothingPage();
    protected static ShoppingCartPage shoppingCartPage = new ShoppingCartPage();
    protected static CheckoutPage checkoutPage = new CheckoutPage();
    protected static BooksPage booksPage = new BooksPage();
}

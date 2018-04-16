package PageObjects;

import HomeWork14.BasePage;
import HomeWork14.Utils;
import org.openqa.selenium.By;

public class ClothingPage extends BasePage {

    private By _ProductNameOnClothingPage1 = By.linkText("Custom T-Shirt");
    private By _Product1 = By.xpath("//div[2]/input");
    private By _tShirtText = By.id("product_attribute_12");
    private By _AddToCartProduct1 =  By.id("add-to-cart-button-29");
    private By _ProductNameOnClothingPage2 = By.linkText("Levi's 511 Jeans");
    private By _AddToCartProduct2 = By.xpath("//div[2]/div/div[2]/div[3]/div[2]/input");
    private By _CloseShoppingCartNotificationBar = By.xpath("//div[@id=\"bar-notification\"]/span");
    private By _ShoppingCart = By.linkText("Shopping cart");
    private By _ProductNameOnShoppingCart1 = By.linkText("Custom T-Shirt");
    private By _ProductNameOnShoppingCart2 = By.linkText("Levi's 511 Jeans");

    public void selectProductsAndAddToCart(){


        Utils.clickElement(_Product1);
        Utils.isEnabledThenEnterValue(_tShirtText,"HELLO WORLD");
        Utils.clickElement(_AddToCartProduct1);
        Utils.clickElement(_CloseShoppingCartNotificationBar);

        homePage.navigateToClothingPageHoverOnApparel();


        Utils.clickElement(_AddToCartProduct2);
        Utils.clickElement(_CloseShoppingCartNotificationBar);

        Utils.clickElement(_ShoppingCart);

        String actualProductName1= Utils.actualText(_ProductNameOnClothingPage1);
        String expectedProductName1 = Utils.actualText(_ProductNameOnShoppingCart1);
        softAssert.assertEquals(actualProductName1,expectedProductName1,"Wrong product1 selected");

        String actualProductName2= Utils.actualText(_ProductNameOnClothingPage2);
        String expectedProductName2 = Utils.actualText(_ProductNameOnShoppingCart2);
        softAssert.assertEquals(actualProductName2,expectedProductName2,"Wrong product2 selected");

        softAssert.assertAll();
    }
}


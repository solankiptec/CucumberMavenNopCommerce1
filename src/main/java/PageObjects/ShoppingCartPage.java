package PageObjects;

import HomeWork14.BasePage;
import HomeWork14.Utils;
import org.openqa.selenium.By;

public class ShoppingCartPage extends BasePage {

    private By _countryID = By.id("CountryId");
    private By _termsOfService = By.id("termsofservice");
    private By _checkOut = By.id("checkout");

    public void verifySelectedProductsAreInShoppingCartAndNavigateToCheckoutPage() {

        Utils.selectFromListByText(_countryID, loadProp.getProperty("country"));
        try{
            boolean flag = Utils.isAlertPresent();
            System.out.println("Alert = " +flag);
        }catch (Exception e){
            e.printStackTrace();
        }
        Utils.clickElement(_termsOfService);

        Utils.clickElement(_checkOut);
    }
}


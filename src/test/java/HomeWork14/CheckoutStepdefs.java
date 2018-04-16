package HomeWork14;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;

public class CheckoutStepdefs extends BasePage {
    @When("^User select product\\(s\\)$")
    public void user_select_product_s() {
        homePage.navigateToClothingPageHoverOnApparel();
        clothingPage.selectProductsAndAddToCart();
        shoppingCartPage.verifySelectedProductsAreInShoppingCartAndNavigateToCheckoutPage();
    }

    @When("^Enters all valid details for checkout page$")
    public void enters_all_valid_details_for_checkout_page() {
        checkoutPage.fillBillingAddressForm();
    }

    @Then("^User has placed order successfully$")
    public void user_has_placed_order_successfully() {
        String actualMessage = Utils.actualText(By.xpath("//div[@class=\"section order-completed\"]/div/strong"));
        String expectedMessage = loadProp.getProperty("expectedMessageCheckout");
        Assert.assertEquals(actualMessage,expectedMessage,"User is NOT able to place order");
    }
}

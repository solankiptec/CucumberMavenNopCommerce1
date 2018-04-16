package PageObjects;

import Cucumber.LoadProp;
import Cucumber.Utils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;


public class EBookPage extends Utils {
    //objects of the pages
    LoadProp loadProp = new LoadProp();
    BRegisterPage bRegisterPage = new BRegisterPage();

    private By book = By.xpath("html/body/div[6]/div[2]/ul[1]/li[5]/a");
    private By sort = By.xpath("//*[@id=\"products-orderby\"]");
    private By add = By.xpath("//input[@value='Add to cart']");
    private By close = By.className("close");
    private By cart = By.xpath("//*[@id=\"topcartlink\"]/a/span[1]");
    private By terms = By.id("termsofservice");
    private By chechout = By.id("checkout");
    private By name = By.id("BillingNewAddress_FirstName");
    private By lastname = By.id("BillingNewAddress_LastName");
    private By emailadd = By.id("BillingNewAddress_Email");
    private By company = By.id("BillingNewAddress_Company");
    private By country = By.id("BillingNewAddress_CountryId");
    private By states = By.id("BillingNewAddress_StateProvinceId");
    private By city = By.id("BillingNewAddress_City");
    private By address = By.id("BillingNewAddress_Address1");
    private By addresss = By.id("BillingNewAddress_Address2");
    private By postcode = By.id("BillingNewAddress_ZipPostalCode");
    private By phonenu = By.id("BillingNewAddress_PhoneNumber");
    private By couninue = By.xpath("//input[@value='Continue']") ;
    private By cuntinuee = By.className("cart-label");



    //Method
    public  void userShouldableToBuyBook() {

        bRegisterPage.userShouldAbleToRegisterSuccessfully();

        clickElement(book);
        selectByVisibleText(sort,"Name: A to Z");
        clickElement(add);
        clickElement(close);
        waitUntilClickable(cart);
        //WebDriverWait wait = new WebDriverWait(driver, 6);
       // WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.className("Shopping cart")));
       clickElement(cart);
        String expectedRegisterUrl ="http://demo.nopcommerce.com/cart";
        Assert.assertTrue(driver.getCurrentUrl().contains(expectedRegisterUrl),"navigate to cart page");
        clickElement(terms);
        clickElement(chechout);
        clearAndEnter(name,loadProp.getProperty("firstname"));
        clearAndEnter(lastname,loadProp.getProperty("lastName"));
        clearAndEnter(emailadd,loadProp.getProperty("email").toLowerCase()+Utils.randomNumber()+"@gmail.com");
        clearAndEnter(company,loadProp.getProperty("company "));
        selectByVisibleText(country,"United States");
        selectByVisibleText(states,"California");
        clearAndEnter(city,loadProp.getProperty("city"));
        clearAndEnter(address,loadProp.getProperty("address1"));
        clearAndEnter(addresss,loadProp.getProperty("address2"));
        clearAndEnter(postcode,loadProp.getProperty("zipcode"));
        clearAndEnter(phonenu,loadProp.getProperty("phone"));
        clickElement(couninue);
        clickElement(cuntinuee);



    }
}

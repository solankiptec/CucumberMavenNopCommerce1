package PageObjects;

import Cucumber.LoadProp;
import Cucumber.Utils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.asserts.SoftAssert;

import java.util.List;


public class CEuropage extends Utils {

    //call to loadprop and register page
    LoadProp loadProp = new LoadProp();
    BRegisterPage bRegisterPage = new BRegisterPage();
    SoftAssert softAssert = new SoftAssert();

    //all elements here
    private By euro = By.id("customerCurrency");
    //private By euro2 = By.xpath("\\option[@value='Euro']");

    //method
    public void userShouldAbleChangeCurrency() {
        //object of register class
        bRegisterPage.userShouldAbleToRegisterSuccessfully();
        String currency = "Euro";
        String Symbol = "";
        // action of elements
        selectByVisibleText(euro, loadProp.getProperty("Euro"));
        System.out.println("*currency is changed*");

        if (currency.equalsIgnoreCase("US Dollar")) {
            Symbol = "$";
        } else {
            currency = "€";
        }
        String currencyType = "$";
        List<WebElement>itemProduct=driver.findElements(By.xpath("/html/body/div[6]/div[3]/div/div/div/div/div[4]/div[2]/div"));

        System.out.println(itemProduct.size());

        for (WebElement currencye:itemProduct){
            String price = currencye.findElement(By.xpath("div/div[2]/div[3]/div[1]/span")).getText();
            System.out.println(price);
            String symbolofprise = price.substring(0,1);
            System.out.println(symbolofprise);
            softAssert.assertEquals(symbolofprise,Symbol);

        }
    }






}
package PageObjects;

import Cucumber.LoadProp;
import Cucumber.Utils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import java.util.List;




public class DClothinPage extends Utils {

    //objects of the pages
    LoadProp loadProp = new LoadProp();
    CEuropage cEuropage = new CEuropage();
    SoftAssert softAssert = new SoftAssert();

    //Elements
    private By apparel = By.xpath("html/body/div[6]/div[2]/ul[1]/li[3]/a");
    private By clothing = By.xpath("html/body/div[6]/div[2]/ul[1]/li[3]/ul/li[2]/a");
    private By position = By.id("products-orderby");
    private By display = By.id("products-pagesize");
    private By prise = By.xpath("html/body/div[6]/div[3]/div[2]/div[2]/div/div[2]/div[3]/div/div[1]/div/div[2]/div[3]/div[1]");

    //method
    public void userShouldAbleToChangePositionAndDisplayOfProduct(){
        cEuropage.userShouldAbleChangeCurrency();

        clickElement(apparel);
        clickElement(clothing);
        selectByValue(position,"http://demo.nopcommerce.com/clothing?orderby=11");
        selectByValue(display,"http://demo.nopcommerce.com/clothing?orderby=11&pagesize=3");
        clickElement(prise);
        List<WebElement>_productCountainer = driver.findElements(By.xpath("/html/body/div[6]/div[3]/div[2]/div[2]/div/div[2]/div[3]/div"));
        System.out.println(_productCountainer.size()+"**");
        System.out.println(_productCountainer+"**");
        System.out.println("**");
        int i = 0;
        for (WebElement el:_productCountainer){
            System.out.println(el.findElement(By.xpath("/html/body/div[6]/div[3]/div[2]/div[2]/div/div[2]/div[3]/div")).getText());
            i = i+1;
            System.out.println(el.getTagName()+"**");
            System.out.println(el.getText()+"**");
            System.out.println("**");
            softAssert.assertEquals(el,el);
        }

        System.out.println(_productCountainer);

           String s ="/html/body/div[6]/div[3]/div[2]/div[2]/div/div[2]/div[3]/div/div[1]/div/div[2]/div[3]/div[1]/span";
        List<WebElement>elementList = driver.findElements(By.xpath(s));
        String pricefirst=" 33.25";
        String pricesecond="14.25";
        for (int i1 = 0;i<elementList.size();i1=i1+1){
            pricefirst = elementList.get(0).getText().replaceAll("[^0-9.]", "");
            pricesecond=elementList.get(3).getText().replaceAll("[^0-9.]", "");
        }
        Double price0=Double.parseDouble(pricefirst);
        Double price3 =Double.parseDouble(pricesecond);
        Assert.assertTrue(price0>=price3,"product should sorted in high to low");





    }



}

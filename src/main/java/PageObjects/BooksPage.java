package PageObjects;

import HomeWork14.BasePage;
import HomeWork14.Utils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.List;

public class BooksPage extends BasePage{

    private By _Categories = By.xpath("//div/strong");

    public void verifyUserCanSeeCategoriesAsTitle(){
        String actualText = Utils.actualText(_Categories);
        String expectedText = "Categories";
        Assert.assertEquals(actualText,expectedText,"User cannot see categories list on home page");
    }

    public void verifyUseCanSeeListOfAllCategoriesItems(String category){
        List<WebElement> categoriesName = driver.findElements(By.xpath("//*[@class='block block-category-navigation']/div[2]/ul/li/a"));
        java.util.Iterator<WebElement> x = categoriesName.iterator();
        while (x.hasNext()) {
            WebElement categoryName = x.next();
            System.out.println(categoryName.getText());
            Assert.assertTrue(categoryName.getText().contains(category));
        }
    }
}

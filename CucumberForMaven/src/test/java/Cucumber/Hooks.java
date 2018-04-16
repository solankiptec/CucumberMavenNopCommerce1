package Cucumber;

import cucumber.api.java.Before;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.testng.ITestResult;

import java.io.File;
import java.util.concurrent.TimeUnit;


public class Hooks extends BasePage{

    @Before
    public void openBrowser()
    {
        BrowserSelector browserSelector = new BrowserSelector();
        LoadProp loadProp = new LoadProp();
        browserSelector.selectBrowser(loadProp.getProperty("browser"));
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(loadProp.getProperty("baseUrl"));
        driver.manage().deleteAllCookies();
    }
//@After
public static void tearDown(ITestResult result)
{
    // Here will compare if test is failing then only it will enter into if condition
    if(ITestResult.FAILURE==result.getStatus())
    {
        try
        {
            // Create reference of TakesScreenshot
            TakesScreenshot ts=(TakesScreenshot)driver;

            // Call method to capture screenshot
            File source=ts.getScreenshotAs(OutputType.FILE);

            // Copy files to specific location here it will save all screenshot in our project home directory and
            // result.getName() will return name of test case so that screenshot name will be same
            FileUtils.copyFile(source, new File("./Screenshots/"+result.getName()+".png"));

            System.out.println("Screenshot taken");
        }
        catch (Exception e)
        {
            System.out.println("Exception while taking screenshot "+e.getMessage());
        }
    }
    // close application
    driver.quit();
     }
}

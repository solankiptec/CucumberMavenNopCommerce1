package HomeWork14;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BasePage {

    @Before
    public void setupBrowser(){
        browserSelector.LaunchBrowser(loadProp.getProperty("browser"));
        Utils.maxWindow();
        Utils.implicitWait(Integer.parseInt(loadProp.getProperty("waitInSec")));
        Utils.setupUrl(loadProp.getProperty("baseUrl"));
        Utils.delallCookies();
    }

    @After
    /**
     * Embed a screenshot in test report if test is marked as failed
     */
    public void quitDriver(Scenario scenario) {
        if(scenario.isFailed()) {
            Utils.captureScreenshot(driver,scenario.getName());
        }
       /* try
        {
            driver.close();
            Runtime.getRuntime().exec("taskkill /F /IM IEDriverServer.exe");

        }
        catch (Exception anException)
        {
            anException.printStackTrace();
        }*/

    }
}

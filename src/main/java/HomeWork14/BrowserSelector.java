package HomeWork14;

//import org.apache.log4j.BasicConfigurator;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class BrowserSelector extends BasePage {

    // if - else ladder
    public void LaunchBrowser(String browser) {
        if (browser.equalsIgnoreCase("firefox")) {
            driver =new FirefoxDriver();
            System.out.println("Firefox Browser launched");
        } else if (browser.equalsIgnoreCase("chrome")) {
            System.setProperty("webdriver.chrome.driver", "C:\\Users\\admin\\Desktop\\SoftwareTesting\\CucumberMavenNopCommerce\\src\\test\\Resources\\Drivers\\chromedriver.exe");
            driver = new ChromeDriver();
            //BasicConfigurator.configure();
            System.out.println("Google Chrome Browser launched");
        }else if(browser.equalsIgnoreCase("ie")){
            System.setProperty("webdriver.ie.driver","C:\\Users\\admin\\Desktop\\SoftwareTesting\\CucumberMavenNopCommerce\\src\\test\\Resources\\Drivers\\IEDriverServer.exe");
            driver = new InternetExplorerDriver();
            System.out.println("Internet Explorer Browser launched");
        }else{
            System.out.println("Browser name is empty or invalid");
        }
    }

    // switch case
    public void launchSwitchBrowser(String browser) {
        switch (browser) {
            case "firefox":
                driver = new FirefoxDriver();
                System.out.println("Setup Firefox Browser");
                break;
            case "chorme":
                System.setProperty("webdriver.chrome.driver", "\\src\\main\\resources");
                driver = new ChromeDriver();
                System.out.println("Setup Google Chrome Browser");
                break;
            case "ie":
                System.setProperty("webdriver.ie.driver", "\\src\\main\\resources");
                driver = new InternetExplorerDriver();
                System.out.println("Setup Internet Explorer Browser");
            default:
                System.out.println("Browser name is empty or invalid");
        }
    }
}
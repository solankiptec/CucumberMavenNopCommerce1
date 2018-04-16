package HomeWork14;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".", tags = "@Books", format = {"pretty","html:target/reports"})
public class RunTest {
}

//tags = "@Register, @Email-Sent, @Email-NOT-Sent, @Checkout, @Books" - run as per alphabetical order
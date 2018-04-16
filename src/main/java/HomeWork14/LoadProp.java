package HomeWork14;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class LoadProp {
    static Properties prop = new Properties();
    static String inputFileName = "TestDataConfig.properties";
    static String fileLocation = "C:\\Users\\Welcome\\IdeaProjects\\CucumberMavenNopCommerce\\src\\test\\Resources\\";
    static FileInputStream input;

    public String getProperty(String key) {

        try {
            input = new FileInputStream(fileLocation + inputFileName);
            prop.load(input);
            input.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return prop.getProperty(key);
    }
}

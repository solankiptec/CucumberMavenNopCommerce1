package PageObjects;
import Cucumber.BasePage;
import Cucumber.LoadProp;
import Cucumber.Utils;
import org.openqa.selenium.By;


public class BRegisterPage extends Utils {
    //call to loadprop
    LoadProp loadProp = new LoadProp();
    //All elements are here
    private By genderMaleField = By.id("gender-male");
    private By FirstNameField = By.id("FirstName");
    private By LastNameField = By.id("LastName");
    private By DateOfBirthDay = By.name("DateOfBirthDay");
    private By DateOfBirthMonth = By.name("DateOfBirthMonth");
    private By DateOfBirthYear = By.name("DateOfBirthYear");
    private By Email = By.id("Email");
    private By Company = By.id("Company");
    private By Newsletter = By.id("Newsletter");
    private By Password = By.id("Password");
    private By ConfirmPassword = By.id("ConfirmPassword");
    private By Register = By.id("register-button");
    //Method
    public void userShouldAbleToRegisterSuccessfully(){
        //action of Elements
        clickElement(genderMaleField);
        clearAndEnter(FirstNameField, loadProp.getProperty("firstname"));
        clearAndEnter(LastNameField,loadProp.getProperty("lastName"));
        selectByVisibleText(DateOfBirthDay,loadProp.getProperty("dateOfBirthDay"));
        selectByVisibleText(DateOfBirthMonth,loadProp.getProperty("dateOfBirthMonth"));
        selectByVisibleText(DateOfBirthYear,loadProp.getProperty("dateOfBirthYear"));
        clearAndEnterText(Email,loadProp.getProperty("email").toLowerCase() + Utils.randomNumber() + "@gmail.com");
        clearAndEnterText(Company,loadProp.getProperty("company"));
        clickElement(Newsletter);
        clearAndEnterText(Password,loadProp.getProperty("password"));
        clearAndEnterText(ConfirmPassword,loadProp.getProperty("confirmPassword"));
        //Try to use Thread.sleep in minute
        //        try {
        //            thread();
        //        } catch (InterruptedException e) {
       //            e.printStackTrace();
       //        }
        clickElement(Register);



    }





}

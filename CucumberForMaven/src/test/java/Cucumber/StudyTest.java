package Cucumber;

import org.testng.annotations.Test;

/**
 * Created by Welcome on 25/03/2018.
 */
public class StudyTest {
    @Test
    public void studyTime(){
        String firstproduct ="From €33.25";
        String secondproduct ="€14.25";
//        String text = "-jaskdh2367sd.27askjdfh23";
//        String digits = text.replaceAll("[^0-9.]", "");
//        System.out.println(digits);
        String digits = firstproduct.replaceAll("[^0-9.]", "");
        System.out.println(digits);
        digits = secondproduct.replaceAll("[^0-9.]", "");
        System.out.println(digits);
        Double price0 = Double.parseDouble(firstproduct) ;
        Double price3 = Double.parseDouble(secondproduct);












    }
}

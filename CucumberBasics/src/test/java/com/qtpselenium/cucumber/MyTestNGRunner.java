package com.qtpselenium.cucumber;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)

@CucumberOptions(
		dryRun=false,
		strict=true,
		monochrome=true,
		features= {"src/test/resources/"},
		glue = {"com.qtpselenium.cucumber"}
		
		//tags= {"@functional,@santiy"}
)

public class MyTestNGRunner extends AbstractTestNGCucumberTests {
	
}

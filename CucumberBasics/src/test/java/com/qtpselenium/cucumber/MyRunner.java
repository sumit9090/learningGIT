package com.qtpselenium.cucumber;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
		dryRun=false,
		strict=false,
		monochrome=true,
		features= {"src/test/resources/"},
		glue = {"com.qtpselenium.cucumber"},//tags= "not @functional",
		//plugin={"pretty","html:taget/cucumber","com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"}
		plugin = { "pretty", "html:test-output", "json:target/cucumber.json",
		"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:","rerun:target/failedRerun.txt"} 	
		
)
// mvn test -Dcucumber.options.tags="@functional"
//mvn test -Dcucumber.options.filter="@functional"--cucumber 6
//mvn test -Dcucumber.options="--tags '@Sanity and not @functional'"

public class MyRunner
{
	
	


}

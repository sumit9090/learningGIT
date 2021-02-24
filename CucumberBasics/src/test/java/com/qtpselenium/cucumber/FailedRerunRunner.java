package com.qtpselenium.cucumber;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
@RunWith(Cucumber.class)
@CucumberOptions(
		dryRun=false,
		strict=true,
		monochrome=true,
		features= {"@target/failedRerun.txt"},
		glue = {"com.qtpselenium.cucumber"},//tags= "not @functional",
		//plugin={"pretty","html:taget/cucumber","com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"}
		plugin = { "pretty", "html:test-output", "json:target/cucumber.json",
		"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:","rerun:target/failedRerun.txt"} 	
		
)

public class FailedRerunRunner {

}


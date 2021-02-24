package com.qtpselenium.cucumber;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStep {
	@Before
	public void setUp()
	{
		System.out.println("Launch a broweser");
		//Assert.assertTrue(false);
	}
@After
	public void tearDown()
	{
		System.out.println("quitting the browser");
	}


@Before("@functional")
public void setUpfunctional()
{
	System.out.println("Launch a broweser for functional scenario only");
	System.out.println("making changes for git learning");
}
@After("@functional")
public void tearDownfunctional()
{
	System.out.println("quitting the browser for functional scenario only");
	System.out.println("making changes for git learning");
}



/*
 * @Given("^user navigates to facebook website$") public void
 * user_navigates_to_facebook() throws Throwable {
 * System.out.println("Given-user navigates to facebook website"); }
 */
	@When("^user validates the homepage title$")
	public void user_validates_the_homepage_title() throws Throwable
	{
		System.out.println("When-user validates the homepage title");
	}
	@Then("^user entered the \"([^\"]*)\" username and \"([^\"]*)\" password$") 
	public void user_entered_the_username(String username,String password) throws Throwable
	{
		System.out.println("Then-user entered the "+username+" username and "+password+" password");
	}
	
	
	
	@Then("^user \"([^\"]*)\" sucessfully logged in$")
	public void user_should_be_sucessfully_logged_in(String status) {
	   
		System.out.println("user "+status+" sucessfully logged in");
	}
	
	@And("user selects age category")
	public void user_selects_age_category(DataTable table)
	{
		List<Map<String, String>> data = table.asMaps(String.class,String.class);
		for(Map<String, String>e:data)
		{
			System.out.println("user selects age category "+e);
		}
		
		//System.out.println("user selects age category "+data.get(0).get("Age")+data.get(0).get("location"));
		/*
		 * List<List<String>> userlist=table.asLists(String.class); for(List<String>
		 * e:userlist) { System.out.println("user selects age category "+e);
		 * 
		 * }
		 */
	}

	/*
	@And("user selects age category")
	public void user_selects_age_category(List<String> list)
	{
		System.out.println("user selects age category "+list.get(1));
	}
	*/
	
}

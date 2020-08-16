package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
		(

/*
			// To execute just 1 feature file...................	
			features = ".//Features/Customer.feature",
			glue = "stepDefinitions",
			dryRun =false,
			monochrome=true,
			plugin = {"pretty", "html:test-output" }

*/

/*			// To execute all feature files..................
			features = ".//Features/",
			glue = "stepDefinitions",
			dryRun =false,
			monochrome=true,
			plugin = {"pretty", "html:test-output" }

*/

/*
			// To execute multiple feature files..................	
			features = {".//Features/Login.Feature",".//Features/Customer.feature"},
			glue = "stepDefinitions",
			dryRun =false,
			monochrome=true,
			plugin = {"pretty", "html:test-output" }			
				
*/				


			// To execute all Tagged feature Scenarios..................
			features = ".//Features/",
			glue = "stepDefinitions",
			dryRun =false,
			monochrome=true,
			plugin = {"pretty", "html:test-output" },
			tags = {"@Sanity, @Regression"}
			//tags = {"@Sanity"}


		)

public class testRun {

}

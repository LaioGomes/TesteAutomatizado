package stepsDefinitions;

import static utils.Utils.*;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.core.api.Scenario;

public class Hooks {
	
	@Before()
	public void setUp() {
		acessarSistema();	
	}
	
	@After()
	public void tearDown(Scenario scenario) {
		capturarTela(scenario);
//		driver.quit();
	}

}

package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BasePage {
	
	@FindBy(xpath = "//*[@id=\"__next\"]/div/div[2]/div/div[1]/form/div[3]/button[2]")
	public WebElement botaoRegistrar;
	
	
	public void acionarBotaoRegistrar() {
		botaoRegistrar.click();
	}

}

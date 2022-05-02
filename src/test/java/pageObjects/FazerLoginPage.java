package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class FazerLoginPage {

	
	@FindBy(xpath = "//*[@id=\"__next\"]/div/div[2]/div/div[1]/form/div[1]/input")
	public WebElement campoEmail;
	
	@FindBy(xpath = "//*[@id=\"__next\"]/div/div[2]/div/div[1]/form/div[2]/div/input")
	public WebElement campoSenha;

	@FindBy(xpath = "//*[@id=\"__next\"]/div/div[2]/div/div[1]/form/div[3]/button[1]")
	public WebElement botaoAcessar;
	
	
	public void informarCampoEmailLogin(String email) {
		campoEmail.sendKeys(email);
	}	
	
	public void informarCampoSenhaLogin(String senha) {
		campoSenha.sendKeys(senha);
	}
	public void acionarBotaoAcessar() {
		botaoAcessar.click();
	}
	
}

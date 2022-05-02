package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CadastrarUsuarioPage {

	
	@FindBy(xpath = "//*[@id=\"__next\"]/div/div[2]/div/div[2]/form/div[2]/input")
	public WebElement campoEmailElement;
	
	@FindBy(xpath =  "//*[@id=\"__next\"]/div/div[2]/div/div[2]/form/div[3]/input")
	public WebElement campoNomeElement;
	
	@FindBy(xpath = "//*[@id=\"__next\"]/div/div[2]/div/div[2]/form/div[4]/div/input")
	public WebElement campoSenhaElement;
	
	@FindBy(xpath = "//*[@id=\"__next\"]/div/div[2]/div/div[2]/form/div[5]/div/input")
	public WebElement campoConfirmacaoSenhaElement;
	
	@FindBy(xpath = "//*[@id=\"toggleAddBalance\"]")
	public WebElement botaoContaComSaldo;
	
	@FindBy(xpath = "//*[@id=\"__next\"]/div/div[2]/div/div[2]/form/button")
	public WebElement botaoCadastrar;
	
	@FindBy(xpath = "//*[@id=\"btnCloseModal\"]")
	public WebElement botaoFechar;
	
	public void informarCampoEmail(String email) {
		campoEmailElement.sendKeys(email);
	}	
	public void informarCampoNome(String nome) {
		campoNomeElement.sendKeys(nome);	
	}
	public void informarCampoSenha(String senha) {
		campoSenhaElement.sendKeys(senha);
	}
	public void informarCampoConfirmacaoSenha(String senha) {
		campoConfirmacaoSenhaElement.sendKeys(senha);
	}
	public void acionarBotaoContaComSaldo() {
		botaoContaComSaldo.click();
	}
	public void acionarBotaoCadastrar() {
		botaoCadastrar.click();
	}
	public void acionarBotaoFechar() {
		botaoFechar.click();
	}
	
}

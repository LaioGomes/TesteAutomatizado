package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TesteDaContaPage {

	
	@FindBy(id = "btn-TRANSFERÊNCIA")
	public WebElement botaoTransferir;
	
	@FindBy(xpath =  "//*[@id=\"__next\"]/div/div[3]/form/div[1]/div[1]/input")
	public WebElement campoNumeroDaConta;
	
	@FindBy(xpath = "//*[@id=\"__next\"]/div/div[3]/form/div[1]/div[2]/input")
	public WebElement campoNumeroDoDigito;
	
	@FindBy(xpath = "//*[@id=\"__next\"]/div/div[3]/form/div[2]/input")
	public WebElement campoValorDaTransferencia;
	
	@FindBy(xpath = "//*[@id=\"__next\"]/div/div[3]/form/div[3]/input")
	public WebElement CampoDescricao;
	
	@FindBy(xpath = "//*[@id=\"__next\"]/div/div[3]/form/button")
	public WebElement botaoTransferirAgora;
		
	@FindBy(xpath = "//*[@id=\"btnCloseModal\"]")
	public WebElement botaoFechar;
	
	@FindBy(xpath = "//*[@id=\"btnBack\"]")
	public WebElement botaoVoltar;
	
	@FindBy(id = "btn-EXTRATO")
	public WebElement botaoExtrato;
	
	
	
	public void euClicarNoBotaoTransferir() {
		botaoTransferir.click();
	}	
	public void informarONumeroDaConta(String conta) {
		campoNumeroDaConta.sendKeys(conta);	
	}
	public void informarONumeroDoDigito(String digito) {
		campoNumeroDoDigito.sendKeys(digito);
	}
	public void informarOValorDaTransferencia(String valor) {
		campoValorDaTransferencia.sendKeys(valor);
	}
	public void informarADescricao(String descricao) {
		CampoDescricao.sendKeys(descricao);
	}
	public void clicarNoBotaoTransferir() {
		botaoTransferirAgora.click();
	}
	public void clicoNoBotaoFechar() {
		botaoFechar.click();
	}
	public void clicoNoBotaoVoltar() {
		botaoVoltar.click();
	}
	public void clicarNoBotaoExtrato() {
		botaoExtrato.click();
	}
	
}

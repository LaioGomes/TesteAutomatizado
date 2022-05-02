package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static utils.Utils.*;

import org.openqa.selenium.By;

import io.cucumber.java.it.Quando;
import io.cucumber.java.pt.Entao;
import pageObjects.TesteDaContaPage;

public class TesteDaContaSteps {
	
	@Quando("eu clicar no botao transferir")
	public void euClicarNoBotaoTransferir() {
	    Na(TesteDaContaPage.class).euClicarNoBotaoTransferir();;
	}
	@Quando("informar o numero da conta {string}")
	public void informarONumeroDaConta(String string) {
		Na(TesteDaContaPage.class).informarONumeroDaConta(string);
	}
	@Quando("informar o numero do digito {string}")
	public void informarONumeroDoDigito(String string) {
		Na(TesteDaContaPage.class).informarONumeroDoDigito(string);
	}
	@Quando("informar o valor da transferencia {string}")
	public void informarOValorDaTransferencia(String string) {
		Na(TesteDaContaPage.class).informarOValorDaTransferencia(string);
	}
	@Quando("informar a descricao {string}")
	public void informarADescricao(String string) {
		Na(TesteDaContaPage.class).informarADescricao(string);
	}
	@Quando("clicar no botao transferir")
	public void clicarNoBotaoTransferir() {
		Na(TesteDaContaPage.class).clicarNoBotaoTransferir();
	}
	@Quando("o sistema retornar erro")
	public void oSistemaRetornarErro() {
		assertEquals("", driver.findElement(By.xpath("//*[@id=\"modalText\"]")).getText());
	}
	@Entao("clico no botao fechar")
	public void clicoNoBotaoFechar() {
		Na(TesteDaContaPage.class).clicoNoBotaoFechar();
	}
	@Entao("clico no botao voltar")
	public void clicoNoBotaoVoltar() {
		Na(TesteDaContaPage.class).clicoNoBotaoVoltar();
	}
	@Quando("clicar no botao extrato")
	public void clicarNoBotaoExtrato() {
		Na(TesteDaContaPage.class).clicarNoBotaoExtrato();
	}
	@Entao("confiro o extrato")
	public void confiroOExtrato() {
		assertEquals("R$ 1.000,00", driver.findElement(By.id("textBalanceAvailable")).getText());
	}







}

package stepsDefinitions;

import io.cucumber.java.it.Quando;
import io.cucumber.java.pt.Entao;
import pageObjects.BasePage;
import pageObjects.CadastrarUsuarioPage;

import static org.junit.Assert.assertEquals;
import static utils.Utils.*;

import org.openqa.selenium.By;

public class CadastrarUsuarioSteps {


	@Quando("eu acionar o botao registrar")
	public void euAcionarOBotaoRegistrar() {
	    Na(BasePage.class).acionarBotaoRegistrar();
	}
	@Quando("informar no campo email {string}")
	public void informarNoCampoEmail(String email) {
	    Na(CadastrarUsuarioPage.class).informarCampoEmail(email);
	}
	@Quando("informar no campo nome {string}")
	public void informarNoCampoNome(String nome) {
	    Na(CadastrarUsuarioPage.class).informarCampoNome(nome);
	}
	@Quando("informar no campo senha {string}")
	public void informarNoCampoSenha(String senha) {
	    Na(CadastrarUsuarioPage.class).informarCampoSenha(senha);
	}
	@Quando("informar no campo confirmacao senha {string}")
	public void informarNoCampoConfirmacaoSenha(String senha) {
	    Na(CadastrarUsuarioPage.class).informarCampoConfirmacaoSenha(senha);
	}
	@Quando("clicar no botao conta com saldo")
	public void clicarNoBotaoContaComSaldo() {
	    Na(CadastrarUsuarioPage.class).acionarBotaoContaComSaldo();
	}
	@Quando("clicar no botao cadastrar")
	public void clicarNoBotaoCadastrar() {
	    Na(CadastrarUsuarioPage.class).acionarBotaoCadastrar();
	}
	@Quando("o sistema confirma a conta aberta")
	public void oSistemaConfirmaAContaAberta() {
		assertEquals("", driver.findElement(By.id("modalText")).getText());
	}	
	@Entao("eu clico no botao fechar")
	public void clicarNoBotaoFechar() {
	    Na(CadastrarUsuarioPage.class).acionarBotaoFechar();
	    
	}
	
}



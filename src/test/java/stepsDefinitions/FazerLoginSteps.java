package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static utils.Utils.*;

import org.openqa.selenium.By;
import io.cucumber.java.it.Quando;
import io.cucumber.java.pt.Entao;
import pageObjects.FazerLoginPage;

public class FazerLoginSteps {
	
	
	@Quando("eu informar no campo email {string}")
	public void euInformarNoCampoEmailLogin(String email) {
		Na(FazerLoginPage.class).informarCampoEmailLogin(email);
	}
	@Quando("eu informar no campo senha {string}")
	public void informarNoCampoSenhaLogin(String senha) {
	    Na(FazerLoginPage.class).informarCampoSenhaLogin(senha);
	}
	@Quando("clicar no botao acessar")
	public void clicarNoBotaoAcessarLogin() {
		Na(FazerLoginPage.class).acionarBotaoAcessar();
	}
	@Entao("o sistema cadastra conta")
	public void oSistemaCadastraConta() {
	    assertEquals("Olá caio souza,", driver.findElement(By.id("textName")).getText());
	}
	@Entao("o sistema exibe a mensagem de usuario invalido")
	public void oSistemaExibeAMensagemDeUsuarioInvalido() {
		assertEquals("", driver.findElement(By.xpath("//*[@id=\"modalText\"]")).getText());
	}







}

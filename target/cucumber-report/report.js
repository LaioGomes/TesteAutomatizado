$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CadastrarUsuario.feature");
formatter.feature({
  "name": "Cadastrar usuario",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@cadastro"
    }
  ]
});
formatter.background({
  "name": "cadastrar usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euAcionarOBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo email \"asdasd@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo nome \"caio souza\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo senha \"Billion750\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo confirmacao senha \"Billion750\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoConfirmacaoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao conta com saldo",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoContaComSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema confirma a conta aberta",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaConfirmaAContaAberta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico no botao fechar",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "transferencia",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    },
    {
      "name": "@transferencia"
    }
  ]
});
formatter.step({
  "name": "eu informar no campo email \"asdasd@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "FazerLoginSteps.euInformarNoCampoEmailLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo senha \"Billion750\"",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.informarNoCampoSenhaLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.clicarNoBotaoAcessarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TesteDaContaSteps.euClicarNoBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero da conta \"234\"",
  "keyword": "E "
});
formatter.match({
  "location": "TesteDaContaSteps.informarONumeroDaConta(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o numero do digito \"6\"",
  "keyword": "E "
});
formatter.match({
  "location": "TesteDaContaSteps.informarONumeroDoDigito(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o valor da transferencia \"600\"",
  "keyword": "E "
});
formatter.match({
  "location": "TesteDaContaSteps.informarOValorDaTransferencia(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar a descricao \"Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "TesteDaContaSteps.informarADescricao(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao transferir",
  "keyword": "E "
});
formatter.match({
  "location": "TesteDaContaSteps.clicarNoBotaoTransferir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema retornar erro",
  "keyword": "E "
});
formatter.match({
  "location": "TesteDaContaSteps.oSistemaRetornarErro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botao fechar",
  "keyword": "Entao "
});
formatter.match({
  "location": "TesteDaContaSteps.clicoNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botao voltar",
  "keyword": "E "
});
formatter.match({
  "location": "TesteDaContaSteps.clicoNoBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "cadastrar usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euAcionarOBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo email \"asdasd@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo nome \"caio souza\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo senha \"Billion750\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo confirmacao senha \"Billion750\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoConfirmacaoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao conta com saldo",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoContaComSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema confirma a conta aberta",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaConfirmaAContaAberta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico no botao fechar",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login incorreto",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    },
    {
      "name": "@loginIncorreto"
    }
  ]
});
formatter.step({
  "name": "eu informar no campo email \"dsfgdd@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "FazerLoginSteps.euInformarNoCampoEmailLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo senha \"Bill750\"",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.informarNoCampoSenhaLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.clicarNoBotaoAcessarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem de usuario invalido",
  "keyword": "Entao "
});
formatter.match({
  "location": "FazerLoginSteps.oSistemaExibeAMensagemDeUsuarioInvalido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "cadastrar usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euAcionarOBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo email \"asdasd@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo nome \"caio souza\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo senha \"Billion750\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo confirmacao senha \"Billion750\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoConfirmacaoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao conta com saldo",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoContaComSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema confirma a conta aberta",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaConfirmaAContaAberta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico no botao fechar",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "login correto",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    },
    {
      "name": "@loginCorreto"
    }
  ]
});
formatter.step({
  "name": "eu informar no campo email \"asdasd@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "FazerLoginSteps.euInformarNoCampoEmailLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo senha \"Billion750\"",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.informarNoCampoSenhaLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.clicarNoBotaoAcessarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema cadastra conta",
  "keyword": "Entao "
});
formatter.match({
  "location": "FazerLoginSteps.oSistemaCadastraConta()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "cadastrar usuario",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao registrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euAcionarOBotaoRegistrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo email \"asdasd@gmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo nome \"caio souza\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoNome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo senha \"Billion750\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo confirmacao senha \"Billion750\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoConfirmacaoSenha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao conta com saldo",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoContaComSaldo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao cadastrar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoCadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema confirma a conta aberta",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaConfirmaAContaAberta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico no botao fechar",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.clicarNoBotaoFechar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "conferir extrato",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastro"
    },
    {
      "name": "@extrato"
    }
  ]
});
formatter.step({
  "name": "eu informar no campo email \"asdasd@gmail.com\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "FazerLoginSteps.euInformarNoCampoEmailLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo senha \"Billion750\"",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.informarNoCampoSenhaLogin(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao acessar",
  "keyword": "E "
});
formatter.match({
  "location": "FazerLoginSteps.clicarNoBotaoAcessarLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao extrato",
  "keyword": "E "
});
formatter.match({
  "location": "TesteDaContaSteps.clicarNoBotaoExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "confiro o extrato",
  "keyword": "Entao "
});
formatter.match({
  "location": "TesteDaContaSteps.confiroOExtrato()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
});
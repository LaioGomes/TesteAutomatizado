#language: pt
#enconding: UTF-8


@cadastro
Funcionalidade: Cadastrar usuario

Contexto: cadastrar usuario
Quando eu acionar o botao registrar
E informar no campo email "asdasd@gmail.com"
E informar no campo nome "caio souza"
E informar no campo senha "Billion750"
E informar no campo confirmacao senha "Billion750"
E clicar no botao conta com saldo
E clicar no botao cadastrar
E o sistema confirma a conta aberta
Entao eu clico no botao fechar

@loginCorreto
Cenario: login correto
Quando eu informar no campo email "asdasd@gmail.com"
E eu informar no campo senha "Billion750"
E clicar no botao acessar
Entao o sistema cadastra conta

@loginIncorreto
Cenario: login incorreto
Quando eu informar no campo email "dsfgdd@gmail.com"
E eu informar no campo senha "Bill750"
E clicar no botao acessar
Entao o sistema exibe a mensagem de usuario invalido

@transferencia
Cenario: transferencia
Quando eu informar no campo email "asdasd@gmail.com"
E eu informar no campo senha "Billion750"
E clicar no botao acessar
E eu clicar no botao transferir
E informar o numero da conta "234"
E informar o numero do digito "6"
E informar o valor da transferencia "600"
E informar a descricao "Teste"
E clicar no botao transferir
E o sistema retornar erro
Entao clico no botao fechar
E clico no botao voltar

@extrato
Cenario: conferir extrato
Quando eu informar no campo email "asdasd@gmail.com"
E eu informar no campo senha "Billion750"
E clicar no botao acessar
E clicar no botao extrato
Entao confiro o extrato




	
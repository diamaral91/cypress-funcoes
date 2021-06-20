/// <reference types='cypress' />

import{
    inputText,
    clearText,
    validateText,
    validateElementEnabled,
    validateElementNotEnabled,
    validateValue,
    focusItem,    
    clickItem,
    visitPage,
    clickItemContains, clickItemList, inputTextList, checkText
}from '../support/util/funcoes'

import * as CE from '../support/util/commomElementLogin'

describe('validação de perfil para nova simulação',() =>{

    const usuarioValido = ''
    const senhaValida = ''
    const cpf = '906'

    beforeEach(() => {
        visitPage('https://com.br/login', 2)       
            
        validateText('body','Bem-vindo')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' Esqueci a senha ')
        inputText(CE.usuarioLogin, usuarioValido)
        validateValue(CE.usuarioLogin, cpf)
        validateElementNotEnabled(CE.botaoEntrar)
        inputText(CE.senhaLogin, senhaValida)
        validateElementEnabled(CE.botaoEntrar)
        clickItem(CE.botaoEntrar, 3)

        validateText('body','você precisar ler e aceitar')

        clickItem(CE.btnLerTermosUso)
        clickItem(CE.btnPoliticaPrivacidadeProtecao)
        clickItem(CE.checkTenhoConhecimento)
        focusItem(CE.btnAceitar)
        clickItem(CE.btnAceitar, 3)   
      })

      it('Preencher cliente PJ',() =>{            
        clickItem(CE.btnMenu)
        clickItem(CE.btnNovaSimulacao)
        
        validateText('body','Seleção de perfil') 

        inputText(CE.filtro, 'Globo Renault Florianópolis')
        validateText('body', 'Carregar mais')
        clickItem(CE.concessionaria, 1)
        clickItem(CE.selecioneVendedor, 1)
        clickItemContains(CE.vendedores, 'MIRIAN LANDOLFI LA PORTA', 1)
        clickItem(CE.iniciarSimulacao)       
        
        validateText('body', 'Concessionária Globo Renault Florianópolis')
        validateText('body', 'MIRIAN LANDOLFI LA PORTA')

        inputText(CE.cpfCnpj, '42593234000130')
        inputText(CE.razaoSocial, 'Empresa Teste')
        inputText(CE.dataAberturaEmpresa, '23/10/1996')
        inputText(CE.telefoneEmpresa, '51338999980')
        inputText(CE.emailEmpresa, 'teste@gmail.com')
        inputText(CE.cepEmpresa, '56324-970')
        clickItemContains(CE.ufCliente, 'Minas Gerais')

        inputText(CE.cpfAvalista, cpf)
        inputTextList(CE.nomeCliente, 'teste automacao', 1)
        inputTextList(CE.dataNascimentoCliente, '23/10/1984', 1)
        inputTextList(CE.telefoneCliente, '51338999989', 1)
        inputTextList(CE.emailCliente, 'teste@gmail.com', 1)
        inputTextList(CE.cepCliente, '56324-970', 1)
        clickItemList(CE.ufCliente, 1)
        inputText(CE.ufSearch, 'Alagoas')
        clickItem(CE.txtUf)
        checkText(CE.ufCliente, 'Alagoas', 1)

        clickItem(CE.btnContinuarCliente)
    })
    
    it('Preencher cliente PF',() =>{            
        clickItem(CE.btnMenu)
        clickItem(CE.btnNovaSimulacao)
        
        validateText('body','Seleção de perfil') 

        inputText(CE.filtro, 'Globo Renault Florianópolis')
        validateText('body', 'Carregar mais')
        clickItem(CE.concessionaria, 1)
        clickItem(CE.selecioneVendedor, 1)
        clickItemContains(CE.vendedores, 'MIRIAN LANDOLFI LA PORTA', 1)
        clickItem(CE.iniciarSimulacao)       
        
        validateText('body', 'Concessionária Globo Renault Florianópolis')
        validateText('body', 'MIRIAN LANDOLFI LA PORTA')

        inputText(CE.cpfCliente, cpf)
        validateText('body', 'Dados pessoais')
        inputTextList(CE.nomeCliente, 'automacao teste', 0)
        inputTextList(CE.dataNascimentoCliente, '23/10/1984', 0)
        inputTextList(CE.telefoneCliente, '51338999989', 0)
        inputTextList(CE.emailCliente, 'teste@gmail.com', 0)
        inputTextList(CE.cepCliente, '56324-970', 0)
        validateText(CE.ufClienteDadosPessoais, 'Minas Gerais')

        clickItem(CE.btnContinuarCliente)
    })
})

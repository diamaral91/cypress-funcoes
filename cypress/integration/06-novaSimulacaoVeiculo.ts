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
    validateCheckboxIsChecked, findAndClickItem, selectItem, clickItemContains, validateUrl, findAndValidateElementVisible, clickItemList, checkText, inputTextList
}from '../support/util/funcoes'

import * as CE from '../support/util/commomElementLogin'

describe('validação de veículo para nova simulação',() =>{

    const usuarioValido = ''
    const senhaValida = ''
    const cpf = ''

    beforeEach(() => {
        visitPage('https://login', 2)       
            
        validateText('body','Bem-vi')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' Esqueci a senha ')
        inputText(CE.usuarioLogin, usuarioValido)
        validateValue(CE.usuarioLogin, cpf)
        validateElementNotEnabled(CE.botaoEntrar)
        inputText(CE.senhaLogin, senhaValida)
        validateElementEnabled(CE.botaoEntrar)
        clickItem(CE.botaoEntrar, 5)

        validateText('body','você precisar ler e aceitar')

        clickItem(CE.btnLerTermosUso, 2)
        clickItem(CE.btnPoliticaPrivacidadeProtecao, 2)
        clickItem(CE.checkTenhoConhecimento)
        focusItem(CE.btnAceitar)
        clickItem(CE.btnAceitar, 3)   
      })

      it('Prencher aba veículo com as informações de simulação',() =>{            
        clickItem(CE.btnMenu)
        clickItem(CE.btnNovaSimulacao)
        
        validateText('body','Seleção de perfil') 

        inputText(CE.filtro, 'Globo Renault Florianópolis')
        validateText('body', 'Carregar mais')
        clickItem(CE.concessionaria, 1)
        clickItem(CE.selecioneVendedor)
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

        clickItem(CE.btnContinuarCliente, 3)

        validateText('body', '42.593.234/0001-30')
        validateText('body', 'RENATA AKABANE')
        validateText('body', '23/10/1996')
        validateText('body', '56.324-970')
        validateText('body', 'BA')

        clickItem(CE.btnShowroom)
        const veiculo = 'CAPTUR'
        clickItemContains(CE.veiculos, veiculo)

        clickItem(CE.anoFabricacao)
        clickItemContains(CE.txtAno, '2020')
        clickItem(CE.anoModelo)
        clickItemContains(CE.txtAno, '2020')

        clickItem(CE.btnSimular)

        validateText('body',veiculo)
        validateText('body','Resumo da simulação selecionada')
        clickItem(CE.btnVerPlanoPagamento)
        findAndValidateElementVisible(CE.dadosParcela, CE.parcela)

        clickItem(CE.btnContinuarSimulacao)
    })            
})

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
    validateCheckboxIsChecked, findAndClickItem, selectItem, clickItemContains, validateUrl, findAndValidateElementVisible
}from '../support/util/funcoes'

import * as CE from '../support/util/commomElementLogin'

describe('validação de veículo para nova simulação',() =>{

    const usuarioValido = ''
    const senhaValida =''
    const cpf = ''

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
        inputText(CE.dataAberturaEmpresa, '23/10/1996')
        inputText(CE.telefoneEmpresa, '51338999980')
        inputText(CE.emailEmpresa, 'teste@gmail.com')
        inputText(CE.cepEmpresa, '56324-970')
        clickItem(CE.ufEmpresa)
        inputText(CE.selecioneUfEmpresa, 'Bahia')
        clickItem(CE.txtUfEmpresa)

        inputText(CE.cpfAvalista, cpf)
        inputText(CE.dataNascimento, '23/10/1984')
        inputText(CE.telefoneCliente, '51338999989')
        inputText(CE.emailCliente, 'teste@gmail.com')
        inputText(CE.cepCliente, '56324-970')
        clickItem(CE.ufCliente)
        inputText(CE.ufSearchAvalista, 'Alagoas')
        clickItem(CE.txtUfAvalista)

        clickItem(CE.btnContinuarCliente, 3)

        validateText('body', '42.593.234/0001-30')
        validateText('body', 'RENATA AKABANE')
        validateText('body', '23/10/1996')
        validateText('body', '56.324-970')
        validateText('body', 'BA')

        clickItem(CE.btnShowroom)
        const veiculo = 'CAPTUR'
        clickItemContains(CE.veiculos, veiculo)

        clickItem(CE.anoFabricacao, 1)
        clickItemContains(CE.txtAno, '2020')
        clickItem(CE.anoModelo)
        clickItemContains(CE.txtAno, '2020')

        clickItem(CE.btnSimular)

        validateText('body',veiculo)
        validateText('body','Resumo da simulação selecionada')
        clickItem(CE.btnVerPlanoPagamento)
        findAndValidateElementVisible(CE.dadosParcela, CE.parcela)

        clickItem(CE.btnContinuarSimulacao)

        validateText('body', 'Informações para proposta')

        clickItemContains(CE.btnInformacoesProposta, 'Submissão')

        // clickItem(CE.nomeAgenteCertificado)
        inputText(CE.cpfSubmissao, cpf)
        inputText(CE.numeroCertificado, '123456')
        inputText(CE.vencimentoCertificado, '10/10/2030')
        clickItemContains(CE.btnInformacoesProposta, 'Submissão')
        
        clickItemContains(CE.btnInformacoesProposta, 'Dados Pessoais')

        inputText(CE.nomeClienteDadosPessoais, 'teste dados pessoais')
        inputText(CE.cpfDadosPessoais, cpf)
        inputText(CE.dataNascimentoDadosPessoais, '01/02/1930')
        inputText(CE.emailDadosPessoais, 'teste@teste.com')
        inputText(CE.residencialDadosPessoais, '51 33455444')
        inputText(CE.celularDadosPessoais, '51 9 93037226')
        clickItem(CE.estadoCivilDadosPessoais)
        clickItem(CE.dataNascimentoDadosPessoais)
        clickItem(CE.ufDadosPessoais)
        inputText(CE.ufSearchDadosPessoais, 'RS')
        clickItem(CE.txtUf)
        clickItemContains(CE.btnInformacoesProposta, 'Dados Pessoais')

        clickItemContains(CE.btnInformacoesProposta, 'Documentos')
        
    })            
})

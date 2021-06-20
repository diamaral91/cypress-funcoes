/// <reference types="cypress" />

import{
    inputText,
    validateText,
    validateElementEnabled,
    validateElementNotEnabled,
    validateValue,
    focusItem,    
    clickItem,
    visitPage, clickItemContains
}from '../support/util/funcoes'

import * as CE from '../support/util/commomElementLogin'

describe('validação de de perfil para nova simulação',() =>{

    beforeEach(() => {
        visitPage('https://develop.com.br/login', 2)

        const usuarioValido = ""
        const senhaValida = ""
        const cpf = "9069"
            
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

        clickItem(CE.btnLerTermosUso, 3)
        clickItem(CE.btnPoliticaPrivacidadeProtecao)
        clickItem(CE.checkTenhoConhecimento)
        focusItem(CE.btnAceitar)
        clickItem(CE.btnAceitar, 3)   
      })

      it('Selecionar perfil e iniciar simulação',() =>{            
        clickItem(CE.btnMenu, 3)
        clickItem(CE.btnNovaSimulacao)

        validateText('body','Seleção de perfil') 

        inputText(CE.filtro, "Globo Renault Florianópolis")
        validateText('body', 'Carregar mais')
        clickItem(CE.concessionaria, 2)
        clickItem(CE.selecioneVendedor, 2)
        clickItemContains(CE.vendedores, 'MIRIAN LANDOLFI LA PORTA', 2)
        clickItem(CE.iniciarSimulacao, 3) 
        
        validateText('body', 'Concessionária Globo Renault Florianópolis')
    })            
})

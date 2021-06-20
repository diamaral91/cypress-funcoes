/// <reference types="cypress" />

import {
    inputText,
    validateText,
    validateElementEnabled,
    validateElementNotEnabled,
    validateValue,
    clickItem,
    visitPage,
    clickItemContains,
} from '../support/util/funcoes'

import * as CE from '../support/util/commomElementLogin'

describe('validação da função esqueci de mim ', () => {

    beforeEach(() => {
        visitPage('https:///', 2)
    })

    it('Validar Lembrar de Mim com Login com usuario e senha válidos', () => {
        const usuarioValido = ""
        const senhaValida = ""
        const cpf = ""

        validateText('body', ' Lembrar de mim ')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' Esqueci a senha ')
        clickItem(CE.checkLembrarDeMim, 2)
        inputText(CE.usuarioLogin, usuarioValido)
        validateValue(CE.usuarioLogin, cpf)
        validateElementNotEnabled(CE.botaoEntrar)
        inputText(CE.senhaLogin, senhaValida)
        validateElementEnabled(CE.botaoEntrar)
        cy.wait(2000)
        clickItem(CE.botaoEntrar, 8)
        clickItemContains('body', 'Usuário')
        cy.wait(2000)
        clickItem('.menu > :nth-child(3)', 3)
        validateValue(CE.usuarioLogin, cpf)
    })
})

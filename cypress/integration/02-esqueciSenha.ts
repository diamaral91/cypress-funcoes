/// <reference types="cypress" />

import {
    inputText,
    clearText,
    validateText,
    validateElementEnabled,
    validateElementNotEnabled,
    validateValue,
    validateElementExists,
    clickItem,
    clickItemContains,
    visitPage,
} from '../support/util/funcoes'

import * as CE from '../support/util/commomElementLogin'

describe('validação da funcao esqueci a senha', () => {
    beforeEach(() => {
        visitPage('https:///', 2)
    })

    it('Validar funcao Esqueci a senha ', () => {
        const usuarioValido = ""
        const usuarioMascara = ""

        validateElementExists(CE.btnEsqueciSenha)
        inputText(CE.usuarioLogin, usuarioValido)
        clickItem(CE.btnEsqueciSenha, 4)
        validateText('body', 'Esqueceu sua senha?')
        validateElementNotEnabled(CE.btnContinuar)
        validateElementEnabled(CE.btnCancelar)
        inputText(CE.cpf, usuarioValido)
        validateValue(CE.cpf, usuarioMascara)
        validateElementEnabled(CE.btnContinuar)
        validateElementEnabled(CE.btnCancelar)
        clickItem(CE.btnContinuar, 2)
        validateText('body', 'Verifique seu Email')
        validateElementEnabled(CE.btnCancelar)

    })

    it('Validar funcao Esqueci a senha sem preenchendo usuario e CPF ', () => {
        const usuarioValido = "56470720030"

        validateElementExists(CE.btnEsqueciSenha)
        clickItem(CE.btnEsqueciSenha, 4)
        validateText('body', 'Esqueceu sua senha?')
        validateElementNotEnabled(CE.btnContinuar)
        validateElementEnabled(CE.btnCancelar)
        inputText(CE.cpf, usuarioValido)
        clearText(CE.cpf)
        clickItemContains('body', 'Esqueceu sua senha?')
        validateText('body', ' Este campo é obrigatório.')
        validateElementNotEnabled(CE.btnContinuar)
        validateElementEnabled(CE.btnCancelar)
        clickItem(CE.btnCancelar)
        validateText('body', 'RCI Direct 3.0')
    })

    it('Validar funcao Esqueci com CPF invalido ', () => {
        const usuarioInvalido = "00000000000"

        validateElementExists(CE.btnEsqueciSenha)
        clickItem(CE.btnEsqueciSenha, 4)
        validateText('body', 'Esqueceu sua senha?')
        validateElementNotEnabled(CE.btnContinuar)
        validateElementEnabled(CE.btnCancelar)
        inputText(CE.cpf, usuarioInvalido)
        clickItemContains('body', 'Esqueceu sua senha?')
        validateText('body', ' CPF inválido.')
        validateElementNotEnabled(CE.btnContinuar)
        validateElementEnabled(CE.btnCancelar)
    })

    it('Validar entrada de letras no campo CPF', () => {
        const cpf = 'Test@'

        validateElementExists(CE.btnEsqueciSenha)
        clickItem(CE.btnEsqueciSenha, 4)
        validateText('body', 'Esqueceu sua senha?')
        validateElementNotEnabled(CE.btnContinuar)
        validateElementEnabled(CE.btnCancelar)
        inputText(CE.cpf, cpf)
        validateValue(CE.cpf, '')
    })
})

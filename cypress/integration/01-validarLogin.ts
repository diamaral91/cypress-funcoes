/// <reference types="cypress" />

import {
    inputText,
    clearText,
    validateText,
    validateElementEnabled,
    validateElementNotEnabled,
    validateValue,
    focusItem,
    clickItem,
    visitPage,
    logoutNoCheck,
    clearStorage,
    validateElementExists,
} from '../support/util/funcoes'

import * as CE from '../support/util/commomElementLogin'

describe('validação de usuário', () => {

    beforeEach(() => {
        visitPage('https://.com.br/', 2)
    })

    it('Login com usuario e senha válidos', () => {
        const usuarioValido = ""
        const senhaValida = ""
        const cpf = ""

        validateText('body', 'Lembrar de mim')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' Esqueci a senha ')
        inputText(CE.usuarioLogin, usuarioValido)
        validateValue(CE.usuarioLogin, cpf)
        validateElementNotEnabled(CE.botaoEntrar)
        inputText(CE.senhaLogin, senhaValida)
        validateElementEnabled(CE.botaoEntrar)
        clickItem(CE.botaoEntrar, 8)
        validateText('body', 'Usuário')
        validateElementExists(CE.btnMenu)
        cy.wait(2000)
        logoutNoCheck()
        clearStorage()
        cy.wait(4000)

    })

    it('Login com usuario inválido e senha válida', () => {
        const usuarioInvalido = "00000000000"
        const senhaValida = "Led@2020"

        validateText('body', 'Lembrar de mim')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' Esqueci a senha ')
        inputText(CE.usuarioLogin, usuarioInvalido)
        validateElementNotEnabled(CE.botaoEntrar)
        inputText(CE.senhaLogin, senhaValida)
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' CPF inválido.')
    })

    it('Login com usuario válido e senha inválida', () => {
        const usuarioValido = "90632765089"
        const senhaInvalida = "A"

        validateText('body', 'Lembrar de mim')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' Esqueci a senha ')
        inputText(CE.usuarioLogin, usuarioValido)
        validateElementNotEnabled(CE.botaoEntrar)
        inputText(CE.senhaLogin, senhaInvalida)
        clickItem(CE.botaoEntrar, 3)
        validateText('body', 'Usuário ou Senha inválidos.')

    })

    it('Login com usuario válido e senha inválida - sem caracter especial', () => {
        const usuarioValido = "90632765089"
        const senhaInvalida = "Qa123"

        validateText('body', 'Lembrar de mim')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' Esqueci a senha ')
        inputText(CE.usuarioLogin, usuarioValido)
        validateElementNotEnabled(CE.botaoEntrar)
        inputText(CE.senhaLogin, senhaInvalida)
        validateElementEnabled(CE.botaoEntrar)
        clickItem(CE.botaoEntrar, 3)
        validateText('body', 'Usuário ou Senha inválidos.')

    })

    it('Login com usuario válido e senha inválida - sem números', () => {
        const usuarioValido = "90632765089"
        const senhaInvalida = "Qa@"

        validateText('body', 'Lembrar de mim')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' Esqueci a senha ')
        inputText(CE.usuarioLogin, usuarioValido)
        validateElementNotEnabled(CE.botaoEntrar)
        inputText(CE.senhaLogin, senhaInvalida)
        validateElementEnabled(CE.botaoEntrar)
        clickItem(CE.botaoEntrar, 3)
        validateText('body', 'Usuário ou Senha inválidos.')

    })

    it('Login com usuario válido e senha inválida - sem letra maiuscula', () => {
        const usuarioValido = "90632765089"
        const senhaInvalida = "a@2020"

        validateText('body', 'Lembrar de mim')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' Esqueci a senha ')
        inputText(CE.usuarioLogin, usuarioValido)
        validateElementNotEnabled(CE.botaoEntrar)
        inputText(CE.senhaLogin, senhaInvalida)
        validateElementEnabled(CE.botaoEntrar)
        clickItem(CE.botaoEntrar, 3)
        validateText('body', 'Usuário ou Senha inválidos.')

    })

    it('Login com usuario válido e senha inválida - sem letra minuscula', () => {
        const usuarioValido = "90632765089"
        const senhaInvalida = "Q@2020"

        validateText('body', 'Lembrar de mim')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' Esqueci a senha ')
        inputText(CE.usuarioLogin, usuarioValido)
        validateElementNotEnabled(CE.botaoEntrar)
        inputText(CE.senhaLogin, senhaInvalida)
        validateElementEnabled(CE.botaoEntrar)
        clickItem(CE.botaoEntrar, 3)
        validateText('body', 'Usuário ou Senha inválidos.')

    })

    it('Login com usuario e senha inválidos', () => {
        const usuarioInvalido = "00000000000"
        const senhaInvalida = "A"

        validateText('body', 'Lembrar de mim')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' Esqueci a senha ')
        inputText(CE.usuarioLogin, usuarioInvalido)
        validateElementNotEnabled(CE.botaoEntrar)
        inputText(CE.senhaLogin, senhaInvalida)
        validateText('body', ' CPF inválido.')
        validateElementNotEnabled(CE.botaoEntrar)

    })

    it('Login com usuario em branco e senha válida', () => {
        const usuarioInvalido = "1234"
        const senhaValida = "Led@2020"

        validateText('body', 'Lembrar de mim')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' Esqueci a senha ')
        inputText(CE.usuarioLogin, usuarioInvalido)
        clearText(CE.usuarioLogin)
        validateElementNotEnabled(CE.botaoEntrar)
        inputText(CE.senhaLogin, senhaValida)
        validateText('body', 'Este campo é obrigatório.')

    })
    it('Login com usuario válido e senha em branco', () => {
        const usuarioValido = "90632765089"
        const senhaInvalida = "Le"

        validateText('body', 'Lembrar de mim')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' Esqueci a senha ')
        inputText(CE.usuarioLogin, usuarioValido)
        validateElementNotEnabled(CE.botaoEntrar)
        inputText(CE.senhaLogin, senhaInvalida)
        clearText(CE.senhaLogin)
        focusItem(CE.usuarioLogin)
        validateText('body', 'Este campo é obrigatório.')
        validateElementNotEnabled(CE.botaoEntrar)
    })
    it('Login com usuario e senha em branco', () => {
        const usuarioInvalido = "123"
        const senhaInvalida = "Led"

        validateText('body', 'Lembrar de mim')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', ' Esqueci a senha ')
        inputText(CE.usuarioLogin, usuarioInvalido)
        clearText(CE.usuarioLogin)
        focusItem(CE.senhaLogin)
        validateText('body', 'Este campo é obrigatório.')
        validateElementNotEnabled(CE.botaoEntrar)
        inputText(CE.senhaLogin, senhaInvalida)
        clearText(CE.senhaLogin)
        focusItem(CE.usuarioLogin)
        validateText('body', 'Este campo é obrigatório.')
        validateElementNotEnabled(CE.botaoEntrar)
    })

    it('Validar entrada de letras no campo Usuário', () => {
        const usuarioInvalido = "AB$"

        validateText('body', 'Lembrar de mim')
        validateElementNotEnabled(CE.botaoEntrar)
        validateText('body', 'Esqueci a senha')
        inputText(CE.usuarioLogin, usuarioInvalido)
        validateValue(CE.usuarioLogin, '')
    })
})

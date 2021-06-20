import {
  login,
  logoutNoCheck,
  inputText,
  clearText,
  validateText,
  validateElementEnabled,
  validateElementNotEnabled,
  validateValue,
  focusItem,
  clickItem,
  visitPage,
  clearStorage,
} from '../support/util/funcoes'

import * as CE from '../support/util/commomElementLogin'

describe('Validação do Resumo da Proposta', () => {

  beforeEach(() => {
    visitPage('https://', 2)
  })

  afterEach(() => {
    logoutNoCheck()
    clearStorage()
  })

  it('inserir dados do cliente', () => {
    const usuarioValido = ""
    const senhaValida = "2020"
    const cpf = ""

    login()

  //  inputText(CE.usuarioLogin, usuarioValido)
  //  inputText(CE.senhaLogin, senhaValida)
  //  validateElementEnabled(CE.botaoEntrar)
  //  clickItem(CE.botaoEntrar, 8)

    cy.pause()
  })
})

//Login

//Campos
export const usuarioLogin = '[data-testid="input-text_login-username"]'
export const senhaLogin = '[data-testid="input-text_login-password"]'
export const cpf = '[data-testid="cpf"]'
export const code = '[data-testid="code"]'

//Botão
export const botaoEntrar = '[data-testid="login_button"]'
export const btnEsqueciSenha = '[data-testid="login_forgot-password"]'
export const btnContinuar = '[data-testid="user-register_button-register"]'
export const btnCancelar = '[data-testid="user-register_button-cancel"]'
export const checkLembrarDeMim = '[data-testid="checkbox_login-remember"]'
export const reenviarCode = '#seta_link'
export const btnEyes = '#eyes'
export const btnMenu = '#ico-menu'
export const btnSair = '#Layer_2'
export const btnLerTermosUso = "li:nth-child(1) > a"
export const btnPoliticaPrivacidadeProtecao = 'li:nth-child(2) > a'
export const btnAceitar = '[data-testid="dialog-lgpd-login_button-accept"]'

//Nova Simulacao
export const iniciarSimulacao = '[data-testid=dealership-table_btn-init-simulation]'
export const btnNovaSimulacao = 'ul > :nth-child(1) > a' // alterar para data-testeid

export const filtro = '[data-testid=top-table_input-text-search]'
export const concessionaria = '.dealership-td'
export const selecioneVendedor = '[data-testid=dealership-table_btn-seller-Change]'
export const vendedores = '.mat-option-text'

//Nova Simulação - Cliente

export const cpfCnpj = '[data-testid="input-text_document"]'
export const razaoSocial = '[data-testid="input-text_company-name"]'
export const dataAberturaEmpresa = '[data-testid="datepicker_company-date"]'
export const telefoneEmpresa = '[data-testid="input-text_company-phone"]'
export const emailEmpresa = '[data-testid="input-text_company-email"]'
export const cepEmpresa = '[data-testid="input-text_company-cep"]'
export const ufCliente = '[data-testid="uf"]'
export const ufClienteDadosPessoais = '[data-testid="client-uf"]'
export const cpfCliente = '[data-testid=input-text_document]'
export const cpfAvalista = '[data-testid="input-text_client_document_pf"]'
export const nomeCliente = '[data-testid="input-text_client-name"]' 
export const documentoCliente = '[data-testid="input-text_document"]'
export const dataNascimentoCliente = '[data-testid="datepicker_client-dateBirth"]'
export const telefoneCliente = '[data-testid="input-text_client-phone"]'
export const emailCliente = '[data-testid="input-text_client-email"]'
export const cepCliente = '[data-testid="input-text_client-cep"]'
export const ufSearch = '[aria-label="dropdown search"]'
export const txtUf = '[id="select_client-uf-panel"] > mat-option:nth-child(2) > span'

export const btnContinuarCliente = '[data-testid="operator-register_button-register"]'

//Nova Simulação - Veículo

export const btnShowroom = '[id="mat-button-toggle-1-button"]' //solicitar inclusao de data-testeid
export const btnVendaDireta = '[id="mat-button-toggle-2-button"]' //solicitar inclusao de data-testeid
export const btnUsado = '[id="mat-button-toggle-3-button"]' //solicitar inclusao de data-testeid
export const btnSimular = '[data-testid="user-register_button-register"]'

export const naoIsento = '[id="mat-radio-2"]' //solicitar inclusao de data-testeid
export const isento = '[id="mat-radio-3"]' //solicitar inclusao de data-testeid

export const veiculos = '[class="car-name"]'

export const anoFabricacao = '[data-testid="vehicle_select-factureYear"]'
export const txtAno = '.mat-option-text'
export const anoModelo = '[data-testid="vehicle_select-modelYear"]' 

//Nova Simulação - Simulação

export const btnVerPlanoPagamento = '[data-test-id="payment-plans_accordion-head"]'
export const dadosParcela = '[class="table-line ng-star-inserted"]'
export const parcela = '[data-testid="table_body-0-number"]'
export const btnContinuarSimulacao = '[data-testid=summary-tab_button-continue]'

//Nova Simulação - Ficha Cliente

export const btnInformacoesProposta = '[class="accordion-header--title"]'

export const nomeAgenteCertificado = '[data-testid="agentName"]'
export const cpfSubmissao = '[data-testid="agentCpf"]'
export const numeroCertificado = '[data-testid="certificateNumber"]'
export const vencimentoCertificado = '[data-testid="certificateEndDate"]'

export const nomeClienteDadosPessoais = '[data-testid="name"]'
export const cpfDadosPessoais = '[data-testid="cpfCnpj"]'
export const dataNascimentoDadosPessoais = '[data-testid="dateBirth"]'
export const emailDadosPessoais = '[data-testid="email"]'
export const residencialDadosPessoais = '[data-testid="phone"]'
export const celularDadosPessoais = '[data-testid="whatsapp"]'
export const estadoCivilDadosPessoais = '[data-testid="civilstate"]'
export const nacionalidadeDadosPessoais = '[data-testid="nacionality"]'
export const naturalidadeDadosPessoais = '[data-testid="provinceBirth"]'
export const ufDadosPessoais = '[data-testid="provinceBirth"]'
export const ufSearchDadosPessoais = '[aria-label="dropdown search"]' //solicitar inclusao data-testeid
export const formaRecebimento = '[data-testid="shippingWay"]'
export const txtFormaRecebimento = '#mat-option-127 > span'
//documentos
export const tipoDocumentoCarteiraIdentidade = '[data-testid="documentType-CARTEIRA DE IDENTIDADE"]'
export const tipoDocumentoCarteiraHabilitacao = '[data-testid="documentType-CARTEIRA DE HABILITAÇÃO"]'
export const numeroDocumento = '[data-testid="documentNumber"]'
export const paisDocumento = '[data-testid="documentEmissionerCountry"]'
export const ufDocumento = '[data-testid="documentEmissionerProvince"]'
export const dataEmissao = '[data-testid="documentEmissionDate"]'
export const orgaoExpedidor = '[data-testid="documentEmissioner"]'
export const nomeMae = '[data-testid="motherName"]'
export const pessoaExpostaNao = '[data-testid="politicalExposition-NÃO"]'
export const pessoaExpostaEmExercicio = '[data-testid="politicalExposition-EM EXERCÍCIO"]'
//dados residenciais
export const cepDadosResidenciais = '[data-testid="postCode"]'
export const enderecoDadosResidenciais = '[data-testid="address"]'
export const numeroDadosResidenciais = '[data-testid="number"]]'
export const complementoDadosResidenciais = '[data-testid="complement"]'
export const bairroDadosResidenciais = '[data-testid="neighborhood"]'
export const ufDadosResidenciais = '[data-testid="uf"]'
export const cidadeDadosResidenciais = '[data-testid="city"]'
//dados profissionais 
export const nomeEmpresaDadosProfissionais = '[data-testid="EmployerDetail"]'
export const ocupacaoDadosProfissionais = '[data-testid="occupation"]'
export const cargoFuncaooDadosProfissionais = '[data-testid="profession"]'
export const patrimonio = '[data-testid="income"]'
export const rendaMensalDadosProfissionais = '[data-testid="otherIncome"]'
export const foneComercialDadosProfissionais = '[data-testid="phone"]'
//dados veiculos
export const numeroChassiDadosVeiculo = '[data-testid="chassi"]'
export const renavamDadosVeiculo = '[data-testid="renavam"]'
export const placaVeiculoDadosVeiculo = '[data-testid="renavam"]'
export const estadoRegistroDadosVeiculo = '[data-testid="ufRegistration"]'
export const estadoLicenciamentoDadosVeiculo = '[data-testid="ufLicensing"]'
export const corDadosProfissionais = '[data-testid="color"]'
//dados pessoais avalista 1
export const tipoAvalista = '[data-testid="guarantorType-Avalista"]'
export const tipoCoobrigado = '[data-testid="guarantorType-Coobrigado"]'
export const nomeAvalistaUm = '[data-testid="name"]'
export const cpfAvalistaUm = '[data-testid="cpfCnpj"]'
export const nascimentoAvalistaUm = '[data-testid="dateBirth"]'
export const emailAvalistaUm = '[data-testid="email"]'
export const foneResidencialAvalistaUm = '[data-testid="phone"]'
export const foneCelularAvalistaUm = '[data-testid="whatsapp"]'
export const sexoFemininoAvalistaUm = '[data-testid="gender-F"]'
export const sexoMasculinoAvalistaUm = '[data-testid="gender-M"]'
export const estadoCivilAvalistaUm = '[data-testid="civilstate"]'
export const nacionalidadeAvalistaUm = '[data-testid="nacionality"]'
export const ufAvalistaUm = '[data-testid="provinceBirth"]'
export const naturalidadeAvalistaUm = '[data-testid="provinceBirth"]'
export const formaRecebimentoAvalistaUm = '[data-testid="shippingWay"]'
//documentos avalista 1
export const identidadeDocumentoAvalistaUm = '[data-testid="documentType-CARTEIRA DE IDENTIDADE"]'
export const habilitacaoDocumentoAvalistaUm = '[data-testid="documentType-CARTEIRA DE HABILITAÇÃO"]'
export const numeroDocumentoAvalistaUm = '[data-testid="documentNumber"]'
export const paisDocumentoAvalistaUm = '[data-testid="documentEmissionerCountry"]'
export const ufDocumentoAvalistaUm = '[data-testid="documentEmissionerProvince"]'
export const dataEmissaoAvalistaUm = '[data-testid="documentEmissionDate"]'
export const orgaoEmissorAvalistaUm = '[data-testid="documentEmissioner"]'
export const nomeMaeAvalistaUm = '[data-testid="motherName"]'

export const salvarSimulacao = '[data-testid="proposal-register_button-save"]'
export const enviarProposta = '[data-testid="proposal-register_button-register"]'

//CheckBox
export const checkTenhoConhecimento = '[data-testid="checkbox_lgpd-login-accept"]'

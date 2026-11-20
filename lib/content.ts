export const contentMeta = {
  reviewedAt: "2026-11-19",
  authorship: "Conteúdo informativo de caráter geral. A revisão e a autoria de Virgínia Pereira devem ser confirmadas antes da publicação.",
} as const

export const principles = [
  {
    title: "Escuta e atenção",
    text: "Compreensão das particularidades de cada situação.",
  },
  {
    title: "Clareza na orientação",
    text: "Comunicação objetiva sobre direitos, procedimentos e possibilidades jurídicas.",
  },
  {
    title: "Responsabilidade profissional",
    text: "Atuação fundamentada na legislação e na análise individualizada.",
  },
] as const

export const practices = [
  {
    id: "rescisao",
    number: "01",
    title: "Rescisão e verbas",
    intro:
      "Orientação sobre o encerramento do contrato de trabalho e a conferência das parcelas, conforme a modalidade de desligamento e os documentos do caso.",
    cta: "Informações sobre rescisão e verbas",
    topics: [
      {
        title: "Rescisão do contrato de trabalho",
        description: "Informações sobre pedido de demissão, dispensa sem justa causa, justa causa e acordo, sem tratar essas modalidades como equivalentes.",
        enabled: true,
      },
      {
        title: "Verbas rescisórias",
        description: "Conferência de saldo de salário, férias, décimo terceiro, aviso-prévio e outras parcelas a partir do termo e dos recibos.",
        enabled: true,
      },
      {
        title: "FGTS",
        description: "Orientação sobre depósitos na conta vinculada e sobre as hipóteses legais de movimentação, que dependem do tipo de desligamento.",
        enabled: true,
      },
      {
        title: "Aviso-prévio",
        description: "Informações sobre cumprimento, indenização ou desconto do aviso, conforme a forma de encerramento e o tempo de contrato.",
        enabled: true,
      },
    ],
  },
  {
    id: "jornada",
    number: "02",
    title: "Jornada, vínculo e proteção",
    intro:
      "Atuação em questões sobre como o trabalho era prestado: jornada, registro, adicionais e condutas no ambiente profissional.",
    cta: "Informações sobre jornada e vínculo",
    topics: [
      {
        title: "Horas extras",
        description: "Análise da jornada, dos controles de ponto e das regras legais ou coletivas, inclusive banco de horas quando houver.",
        enabled: true,
      },
      {
        title: "Vínculo empregatício",
        description: "Avaliação de pessoalidade, habitualidade, remuneração e subordinação, mesmo quando não houve anotação na carteira.",
        enabled: true,
      },
      {
        title: "Insalubridade e periculosidade",
        description: "Informações sobre os critérios legais e a necessidade de examinar as condições reais de trabalho.",
        enabled: true,
      },
      {
        title: "Assédio moral",
        description: "Orientação sobre relatos de condutas humilhantes ou repetidas no ambiente de trabalho e os caminhos que podem ser avaliados.",
        enabled: true,
      },
      {
        title: "Estabilidade da gestante",
        description: "Informações sobre a garantia prevista na Constituição, que depende da gravidez, do vínculo e das datas envolvidas.",
        enabled: true,
      },
      {
        title: "Acidentes e doenças do trabalho",
        description: "Orientação sobre comunicação do ocorrido e direitos que podem ser analisados a partir dos fatos e dos documentos.",
        enabled: true,
      },
    ],
  },
] as const

export const quickAnswers = [
  {
    question: "Quais verbas podem ser devidas após uma demissão?",
    answer:
      "As parcelas mudam conforme o tipo de desligamento, o contrato e o que já foi pago. Em geral, entram na conferência o saldo de salário, férias e décimo terceiro. Aviso-prévio, FGTS e multa dependem da modalidade e não valem para todo encerramento. O termo de rescisão, os recibos e as datas precisam ser lidos antes de qualquer conclusão.",
    href: "#faq-verbas",
  },
  {
    question: "O que muda na demissão sem justa causa?",
    answer:
      "Na dispensa sem justa causa, além das parcelas comuns do contrato, costumam ser analisados o aviso-prévio, o saque do FGTS e a multa de 40%. O seguro-desemprego só entra se os requisitos próprios forem cumpridos. Nada disso dispensa a leitura do termo de rescisão e dos pagamentos já feitos. Cada contrato pode alterar o resultado.",
    href: "#faq-sem-justa-causa",
  },
  {
    question: "Como funciona o pagamento de horas extras?",
    answer:
      "Hora extra é o trabalho além da jornada aplicável e, como regra, deve ser pago com adicional de pelo menos 50% sobre a hora normal. Acordo ou convenção coletiva pode prever percentual maior. A conta depende dos horários, do ponto e de eventual banco de horas válido. Cargo, intervalo e regime especial podem mudar a regra.",
    href: "#faq-horas-extras",
  },
  {
    question: "Como funciona o reconhecimento de vínculo empregatício?",
    answer:
      "O reconhecimento observa como o trabalho acontecia, e não só o nome do contrato. A CLT considera, em regra, pessoalidade, não eventualidade, onerosidade e subordinação. Mensagens, escalas, recibos e testemunhas ajudam a esclarecer os fatos. A conclusão depende das provas de cada relação e não de uma presunção automática.",
    href: "#faq-vinculo",
  },
] as const

export const faqs = [
  {
    id: "faq-verbas",
    question: "Quais verbas podem ser devidas após uma demissão?",
    answer:
      "Não existe uma lista única para toda demissão. O primeiro passo é identificar a modalidade de desligamento e ler o termo de rescisão. Saldo de salário, férias com o terço constitucional e décimo terceiro proporcional costumam ser conferidos na maior parte dos contratos. Aviso-prévio, saque do FGTS, multa de 40% e seguro-desemprego dependem da forma de encerramento e de outros requisitos. Descontos, faltas e parcelas já pagas também alteram o cálculo. A conclusão só é possível depois da análise dos documentos daquele contrato.",
    sourceLabel: "Consolidação das Leis do Trabalho",
    sourceUrl: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
  },
  {
    id: "faq-sem-justa-causa",
    question: "O que muda na demissão sem justa causa?",
    answer:
      "Na dispensa sem justa causa, o empregador encerra o contrato sem imputar falta grave ao empregado. Em regra, são analisados saldo de salário, aviso-prévio, décimo terceiro proporcional, férias vencidas ou proporcionais com o terço constitucional, além da movimentação do FGTS com a multa de 40%. O seguro-desemprego pode ser pleiteado se a pessoa cumprir os requisitos da lei específica, e não decorre automaticamente da dispensa. Acordo, contrato por prazo determinado e valores já recebidos mudam a conta. O termo de rescisão precisa ser conferido.",
    sourceLabel: "Consolidação das Leis do Trabalho",
    sourceUrl: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
  },
  {
    id: "faq-demissao",
    question: "Quem pede demissão tem direito a quais verbas?",
    answer:
      "Quem pede demissão pode ter direito, em regra, ao saldo de salário, ao décimo terceiro proporcional e às férias vencidas ou proporcionais, com o terço constitucional. Nessa modalidade, normalmente não há saque do FGTS pela rescisão nem multa de 40%, e o aviso-prévio pode ser trabalhado ou descontado quando não cumprido, conforme o caso. O seguro-desemprego não é devido no pedido de demissão. Acordos, faltas e parcelas já pagas alteram o resultado. O termo de rescisão e os recibos precisam ser conferidos antes de qualquer conclusão.",
    sourceLabel: "Consolidação das Leis do Trabalho",
    sourceUrl: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
  },
  {
    id: "faq-horas-extras",
    question: "Como funciona o pagamento de horas extras?",
    answer:
      "As horas extras correspondem ao trabalho que ultrapassa a jornada aplicável e, como regra, devem ser pagas com adicional. A Constituição estabelece remuneração do serviço extraordinário pelo menos 50% superior à hora normal, e acordo, convenção coletiva ou lei específica podem prever percentual maior. A apuração depende dos horários praticados, dos controles de ponto, de eventual banco de horas válido e da categoria profissional. Nem todo período além do contrato é automaticamente extra: intervalos, cargos de confiança e regimes especiais podem ter regras próprias.",
    sourceLabel: "Constituição Federal, art. 7º, XVI",
    sourceUrl: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
  },
  {
    id: "faq-vinculo",
    question: "Uma pessoa que trabalhou sem carteira assinada pode ter direitos trabalhistas?",
    answer:
      "Sim. A ausência de registro na carteira não impede, por si só, o reconhecimento de direitos. A CLT considera empregada a pessoa que presta serviço com pessoalidade, não eventualidade, onerosidade e subordinação, ainda que o contrato tenha recebido outro nome. Mensagens, escalas, recibos, testemunhas e registros de pagamento podem ajudar a demonstrar como o trabalho acontecia. Se o vínculo for reconhecido, parcelas como férias, décimo terceiro e FGTS podem ser analisadas. Tudo depende da prova dos fatos, e não de uma presunção automática.",
    sourceLabel: "Consolidação das Leis do Trabalho",
    sourceUrl: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
  },
  {
    id: "faq-fgts",
    question: "Quando o FGTS pode ser sacado após o desligamento?",
    answer:
      "O saque da conta vinculada não ocorre em todo desligamento. A Lei nº 8.036/1990 autoriza a movimentação, entre outras hipóteses, na despedida sem justa causa, inclusive a indireta. No pedido de demissão e na dispensa por justa causa, em regra, a rescisão não libera o saldo. A multa de 40% também está ligada à despedida sem justa causa, e não ao pedido de demissão. O termo de rescisão e o tipo de contrato precisam ser conferidos antes de afirmar se há saque ou multa.",
    sourceLabel: "Lei nº 8.036/1990",
    sourceUrl: "https://www.planalto.gov.br/ccivil_03/leis/l8036consol.htm",
  },
  {
    id: "faq-adicionais",
    question: "Quando podem ser devidos insalubridade ou periculosidade?",
    answer:
      "Os adicionais não decorrem apenas do nome da função. A insalubridade depende de atividade ou operação em condições previstas nas normas do Ministério do Trabalho, em grau máximo, médio ou mínimo. A periculosidade está ligada a contato com inflamáveis, explosivos, energia elétrica, segurança pessoal ou motocicleta, nas hipóteses legais. A apuração considera o ambiente real e, quando cabível, laudo ou perícia. Acordo coletivo não substitui a análise das condições de trabalho daquele contrato.",
    sourceLabel: "Consolidação das Leis do Trabalho",
    sourceUrl: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
  },
  {
    id: "faq-assedio",
    question: "O que pode caracterizar assédio moral no trabalho?",
    answer:
      "Assédio moral costuma ser associado a condutas repetidas que humilham, isolam ou constrangem a pessoa no ambiente de trabalho, com prejuízo à dignidade. Um conflito isolado ou uma cobrança regular de metas, por si só, não descreve automaticamente essa situação. Relatos, mensagens, testemunhas e registros ajudam a compreender o que ocorreu e com que frequência. Dependendo dos fatos, podem ser avaliadas medidas internas, rescisão indireta e outras providências. A conclusão exige análise do caso, e não de um rótulo genérico.",
    sourceLabel: "Constituição Federal, art. 1º, III, e art. 5º, X",
    sourceUrl: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
  },
  {
    id: "faq-maternidade",
    question: "A gestante tem estabilidade no emprego?",
    answer:
      "A Constituição assegura, no Ato das Disposições Constitucionais Transitórias, a estabilidade da gestante desde a confirmação da gravidez até cinco meses após o parto. A garantia não depende de o empregador já conhecer a gravidez no momento da dispensa, mas a aplicação considera o tipo de contrato e as datas. Contrato de experiência, aviso-prévio e admissão durante a gestação têm discussões próprias e não devem ser tratados como uma resposta única. A análise parte do exame, da data da dispensa e dos documentos do vínculo.",
    sourceLabel: "Constituição Federal, ADCT, art. 10, II, b",
    sourceUrl: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
  },
  {
    id: "faq-acidente",
    question: "O que pode ser analisado após um acidente ou uma doença do trabalho?",
    answer:
      "Um acidente ou uma doença relacionada ao trabalho pode gerar questões distintas, e elas não se resolvem com uma única providência. No contrato, costumam ser examinados a comunicação do ocorrido, o afastamento e a estabilidade provisória de doze meses após a cessação do auxílio-doença acidentário, quando essa hipótese legal se confirma. Também podem ser avaliados danos, conforme a prova da culpa e do nexo. A conclusão depende do CAT, dos documentos médicos e das datas, e não apenas do diagnóstico.",
    sourceLabel: "Lei nº 8.213/1991, art. 118",
    sourceUrl: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm",
  },
  {
    id: "faq-online",
    question: "É possível iniciar o contato pela internet?",
    answer:
      "Sim. O contato pode começar pelos canais digitais informados neste site, como formulário, e-mail ou WhatsApp, quando estiverem disponíveis. Nessa primeira mensagem, basta descrever o assunto de forma geral. Não envie documentos, dados de saúde ou outras informações sensíveis antes de uma orientação sobre o meio adequado. O envio da mensagem não cria, por si só, uma relação advogado-cliente nem autoriza qualquer atuação. Os próximos passos são esclarecidos conforme a natureza da demanda.",
  },
  {
    id: "faq-contato",
    question: "Como entrar em contato com Virgínia Pereira?",
    answer:
      "O contato deve ser feito pelos canais oficiais publicados nesta página, como WhatsApp, e-mail ou telefone, quando estiverem confirmados. Se algum canal ainda não aparecer, ele não foi configurado e não deve ser substituído por um dado não verificado. Use a seção de contato deste site e evite encaminhar documentos ou informações sensíveis na primeira mensagem. A resposta organiza apenas o início da comunicação e não representa aceite automático de atuação.",
  },
] as const

export const contactSteps = [
  {
    number: "01",
    title: "Entre em contato",
    text: "Utilize um dos canais informados para apresentar, de maneira inicial, o assunto sobre o qual deseja orientação.",
  },
  {
    number: "02",
    title: "Apresente sua demanda",
    text: "As informações compartilhadas permitem identificar o tema e orientar os próximos passos de comunicação.",
  },
  {
    number: "03",
    title: "Receba orientações sobre o atendimento",
    text: "Conforme a natureza da demanda, serão esclarecidos os procedimentos para a análise jurídica individualizada.",
  },
] as const

export const navigation = [
  { label: "Início", href: "/#inicio" },
  { label: "Atuação", href: "/#atuacao" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Dúvidas frequentes", href: "/#perguntas" },
  { label: "Contato", href: "/#contato" },
] as const

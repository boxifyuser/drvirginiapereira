export const practices = [
  {
    id: "previdenciario",
    number: "01",
    title: "Direito Previdenciário",
    intro:
      "Orientação jurídica sobre benefícios previdenciários, requerimentos administrativos e análise de direitos perante o INSS.",
    topics: [
      ["Aposentadorias", "Análise de requisitos e do histórico contributivo conforme as regras aplicáveis."],
      ["Benefícios por incapacidade", "Orientação sobre benefícios temporários ou permanentes, conforme avaliação e documentação."],
      ["BPC/LOAS", "Informações sobre os critérios legais e sociais considerados na análise do benefício assistencial."],
      ["Pensão por morte", "Orientação sobre dependência, qualidade de segurado e demais requisitos legais."],
      ["Salário-maternidade", "Informações sobre regras previdenciárias aplicáveis a cada categoria de segurada."],
      ["Revisão e indeferimento", "Análise dos fundamentos da decisão e dos documentos disponíveis em cada situação."],
      ["Planejamento previdenciário", "Organização do histórico contributivo para compreender possibilidades previstas em lei."],
    ],
  },
  {
    id: "trabalhista",
    number: "02",
    title: "Direito do Trabalho",
    intro:
      "Atuação em questões relacionadas às relações de trabalho, com análise de direitos, obrigações e possíveis medidas jurídicas.",
    topics: [
      ["Rescisão e verbas rescisórias", "Conferência das parcelas e dos documentos relacionados ao encerramento do contrato."],
      ["Jornada e horas extras", "Análise de horários, registros e regras aplicáveis à jornada de trabalho."],
      ["FGTS", "Orientação sobre depósitos e questões relacionadas à conta vinculada."],
      ["Insalubridade e periculosidade", "Análise das condições de trabalho e dos critérios técnicos e legais pertinentes."],
      ["Vínculo empregatício", "Avaliação das circunstâncias concretas da prestação de serviços e dos requisitos legais."],
      ["Assédio e proteção no trabalho", "Orientação sobre situações relatadas no ambiente profissional e caminhos possíveis."],
      ["Maternidade, acidentes e doenças", "Análise de direitos e garantias conforme o vínculo e as circunstâncias documentadas."],
    ],
  },
] as const

export const quickAnswers = [
  {
    question: "O que fazer quando o INSS nega um benefício?",
    answer:
      "Leia a decisão e identifique o motivo do indeferimento. O processo administrativo, os documentos apresentados e o histórico previdenciário ajudam a avaliar se cabe novo requerimento ou outra medida. Os caminhos e prazos podem variar conforme o benefício e a situação; uma análise individual é importante antes de decidir como prosseguir.",
    href: "#faq-inss-negado",
  },
  {
    question: "Como saber se já posso me aposentar?",
    answer:
      "A resposta depende do seu histórico de contribuições, idade, categoria de segurado e da regra aplicável. O simulador do Meu INSS pode oferecer uma estimativa, mas não substitui a conferência dos vínculos e recolhimentos registrados nem uma análise das regras de transição.",
    href: "#faq-aposentadoria",
  },
  {
    question: "Quais verbas podem ser devidas após uma demissão?",
    answer:
      "As parcelas dependem do tipo de desligamento, do contrato e de fatores como saldo de salário, férias e décimo terceiro proporcionais, aviso-prévio e FGTS. A conferência deve considerar o termo de rescisão, recibos e datas; não há uma lista única aplicável a todos os casos.",
    href: "#faq-demissao",
  },
  {
    question: "Como funciona o reconhecimento de vínculo empregatício?",
    answer:
      "A análise considera como o trabalho acontecia na prática, incluindo pessoalidade, habitualidade, remuneração e subordinação. Registros, mensagens e comprovantes podem ajudar a esclarecer os fatos. A existência de vínculo depende das circunstâncias concretas e da avaliação jurídica das provas disponíveis.",
    href: "#faq-vinculo",
  },
] as const

export const faqs = [
  {
    id: "faq-bpc",
    question: "Quem pode solicitar o BPC/LOAS?",
    answer:
      "O Benefício de Prestação Continuada pode ser devido à pessoa idosa com 65 anos ou mais ou à pessoa com deficiência, desde que atendidos os critérios legais, inclusive os relacionados à renda familiar e à inscrição no CadÚnico. O BPC é assistencial, não exige contribuição ao INSS e não paga décimo terceiro. A avaliação depende das informações e documentos de cada família.",
    source: "https://www.gov.br/mds/pt-br/acoes-e-programas/suas/beneficios-assistenciais/beneficio-assistencial-ao-idoso-e-a-pessoa-com-deficiencia-bpc",
  },
  {
    id: "faq-inss-negado",
    question: "O que fazer quando um pedido é negado pelo INSS?",
    answer:
      "Consulte a decisão e o processo administrativo para entender quais requisitos ou documentos foram considerados insuficientes. Conforme o caso, pode ser possível apresentar recurso administrativo ou formular novo pedido com informações complementares. A escolha depende do motivo da negativa, do benefício e dos prazos aplicáveis.",
    source: "https://www.gov.br/inss/pt-br/assuntos/recursos",
  },
  {
    id: "faq-revisao",
    question: "É possível revisar o valor da aposentadoria?",
    answer:
      "Em algumas situações, uma revisão pode ser analisada quando há possível erro no cálculo ou informação relevante que não foi considerada. É necessário conferir a carta de concessão, o processo e o histórico contributivo. Existem prazos e regras específicas, então a possibilidade não é automática e depende da análise do caso.",
    source: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm",
  },
  {
    id: "faq-documentos",
    question: "Quais documentos podem ser necessários para pedir aposentadoria?",
    answer:
      "Em geral, são úteis documentos de identificação e registros do histórico de trabalho e contribuição, como carteira de trabalho, guias de recolhimento e comprovantes de atividade. A documentação necessária varia conforme períodos, vínculos e regra previdenciária. O CNIS pode ser consultado no Meu INSS e deve ser conferido quanto a possíveis inconsistências.",
    source: "https://www.gov.br/inss/pt-br/assuntos/saiba-como-acessar-o-extrato-de-contribuicao-cnis",
  },
  {
    id: "faq-demissao",
    question: "Quem pede demissão tem direito a quais verbas?",
    answer:
      "No pedido de demissão, podem ser devidos saldo de salário, décimo terceiro proporcional e férias vencidas ou proporcionais acrescidas do terço constitucional. Em regra, essa modalidade não inclui saque do FGTS por rescisão nem multa de 40%, e o aviso-prévio pode ter consequências próprias. O cálculo depende do contrato e das circunstâncias do desligamento.",
    source: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
  },
  {
    id: "faq-horas-extras",
    question: "Como funciona o pagamento de horas extras?",
    answer:
      "A Constituição prevê remuneração do serviço extraordinário superior, no mínimo, em 50% à hora normal, sem prejuízo de condições mais favoráveis previstas em lei ou norma coletiva. A aplicação depende da jornada, dos registros, de eventual compensação válida e das regras específicas da categoria.",
    source: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
  },
  {
    id: "faq-vinculo",
    question: "Quem trabalhou sem carteira assinada pode ter direitos trabalhistas?",
    answer:
      "A falta de anotação na carteira não elimina, por si só, a possibilidade de reconhecimento de vínculo. A análise considera os requisitos previstos na legislação e como o trabalho era prestado. Documentos, mensagens, recibos e testemunhas podem ser relevantes. O reconhecimento depende da prova dos fatos e de avaliação individual.",
    source: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm",
  },
  {
    id: "faq-incapacidade",
    question: "Qual é a diferença entre benefício por incapacidade temporária e permanente?",
    answer:
      "O benefício por incapacidade temporária é destinado, em regra, a quem está temporariamente incapaz para o trabalho ou atividade habitual, observados os requisitos legais. A aposentadoria por incapacidade permanente depende da constatação de incapacidade permanente e da impossibilidade de reabilitação para atividade que garanta subsistência. A avaliação é feita conforme a legislação e as provas do caso.",
    source: "https://www.gov.br/inss/pt-br/assuntos/beneficios-por-incapacidade",
  },
  {
    id: "faq-online",
    question: "É possível iniciar o contato pela internet?",
    answer:
      "Sim. Os canais digitais configurados nesta página podem ser usados para uma primeira comunicação. Evite enviar documentos pessoais, informações médicas ou dados sensíveis em mensagens iniciais. O contato não constitui automaticamente uma relação advogado-cliente nem substitui a análise individual da demanda.",
  },
  {
    id: "faq-contato",
    question: "Como entrar em contato com Virgínia Pereira?",
    answer:
      "Os dados de telefone, WhatsApp e e-mail serão exibidos nesta página quando forem configurados e confirmados pela profissional. Até lá, os canais diretos permanecem indisponíveis; nenhuma informação de contato fictícia será publicada.",
  },
] as const

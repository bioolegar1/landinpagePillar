// Dados reais extraídos do portal Inforplace (repo landingPagepillar) para manter consistência de marca.

export const CONTACT = {
  whatsappNumber: "556232851464", // formato internacional sem símbolos, usado no link wa.me
  phoneDisplay: "(62) 3285-1464",
  email: "contato@inforplace.com.br",
  address: "Goiânia - GO, Brasil",
};

export function buildWhatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`;
}

export const WHATSAPP_MESSAGE_DEMO =
  "Olá! Quero agendar uma demonstração do Sistema Pillar.";

export const WHATSAPP_MESSAGE_GENERIC =
  "Olá! Vim pela landing page do Sistema Pillar e gostaria de falar com um especialista.";

export type ComparisonRow = {
  label: string;
  sem: string;
  com: string;
};

// Estrutura "Sem Pillar x Com Pillar" — mais persuasiva que uma lista solta de dores,
// mostra a transformação lado a lado (padrão clássico de página de conversão).
export const COMPARISON: ComparisonRow[] = [
  {
    label: "Apuração de custo da obra",
    sem: "Planilha solta, atualizada de vez em quando",
    com: "Custo previsto x realizado em tempo real, por etapa e centro de custo",
  },
  {
    label: "Depreciação de imobilizado",
    sem: "Calculada à mão, fora do sistema, no fim do exercício",
    com: "Cálculo automático de depreciação, baixa e transferência de bens",
  },
  {
    label: "Correção monetária",
    sem: "Índices INCC/IGPM aplicados manualmente",
    com: "Reajuste automático por índice, direto no contrato e no orçamento",
  },
  {
    label: "Compras",
    sem: "Cotação manual por telefone e WhatsApp",
    com: "Cotação, ordem de compra e estoque integrados",
  },
  {
    label: "Financeiro",
    sem: "Conciliação manual entre obra e escritório",
    com: "Contas a pagar, receber e fluxo de caixa unificados",
  },
  {
    label: "Escrituração fiscal",
    sem: "Notas lançadas manualmente, apuração de impostos à parte",
    com: "Entrada/saída de NF-e integrada, apuração fiscal e SPED",
  },
  {
    label: "Visão gerencial",
    sem: "Problema só aparece no fechamento do mês",
    com: "Acompanhamento diário do andamento da obra",
  },
  {
    label: "Múltiplas obras",
    sem: "Cada obra em uma planilha ou sistema diferente",
    com: "Todas as obras e empresas em um único sistema",
  },
];

export type Feature = {
  icon:
    | "wallet"
    | "calendar-range"
    | "shopping-cart"
    | "boxes"
    | "users"
    | "calculator"
    | "landmark"
    | "receipt"
    | "wrench";
  title: string;
  description: string;
};

// Os 9 módulos reais do Sistema Pillar (mesmos do pillar.component.ts do portal).
export const FEATURES: Feature[] = [
  {
    icon: "wallet",
    title: "Financeiro",
    description: "Contas a pagar e receber, adiantamento financeiro, fluxo de caixa e conciliação bancária por centro de custo.",
  },
  {
    icon: "calendar-range",
    title: "Planejamento de Obra",
    description: "Cronograma físico-financeiro com apuração de custo previsto x realizado, medição por etapa e curva de avanço físico.",
  },
  {
    icon: "landmark",
    title: "Patrimônio",
    description: "Cadastro de bens, cálculo automático de depreciação, baixa e transferência de imobilizado entre obras.",
  },
  {
    icon: "calculator",
    title: "Contábil",
    description: "Integração direta com a contabilidade: razão, balancete e apuração de resultado por obra.",
  },
  {
    icon: "receipt",
    title: "Escrita Fiscal",
    description: "Entrada e saída de documentos fiscais, apuração de impostos e escrituração digital integrada ao financeiro.",
  },
  {
    icon: "shopping-cart",
    title: "Compra",
    description: "Solicitação de compra, cotação de preço e ordem de compra integradas ao estoque.",
  },
  {
    icon: "boxes",
    title: "Estoque",
    description: "Controle de entradas e saídas de mercadoria aplicada diretamente na obra.",
  },
  {
    icon: "users",
    title: "Gestão de Clientes",
    description: "Sistema completo para construtoras, incorporadoras e administradoras de carteira.",
  },
  {
    icon: "wrench",
    title: "Manutenção",
    description: "Controle de manutenção de equipamentos de obra e emissão de ordem de serviço.",
  },
];

export type DepreciationAsset = {
  bem: string;
  aquisicao: string;
  taxaAno: string;
  depreciado: string;
  residual: string;
};

// Tabela ilustrativa — mesmo cálculo que o módulo Patrimônio do Pillar faz automaticamente.
export const DEPRECIATION_SAMPLE: DepreciationAsset[] = [
  { bem: "Betoneira 400L", aquisicao: "18.500,00", taxaAno: "10%", depreciado: "7.400,00", residual: "11.100,00" },
  { bem: "Caminhão basculante", aquisicao: "210.000,00", taxaAno: "20%", depreciado: "84.000,00", residual: "126.000,00" },
  { bem: "Andaime metálico (lote)", aquisicao: "42.000,00", taxaAno: "10%", depreciado: "16.800,00", residual: "25.200,00" },
  { bem: "Notebook de obra", aquisicao: "6.200,00", taxaAno: "20%", depreciado: "2.480,00", residual: "3.720,00" },
];

export const COST_INDICES = [
  { code: "INCC", label: "Índice Nacional de Custo da Construção" },
  { code: "IGPM", label: "Índice Geral de Preços do Mercado" },
];

export type Step = {
  title: string;
  description: string;
};

export const HOW_IT_WORKS: Step[] = [
  {
    title: "Você fala com um especialista",
    description: "Sem formulário longo, sem robô: um consultor Inforplace entende o cenário da sua obra.",
  },
  {
    title: "Demonstração personalizada",
    description: "Mostramos o Pillar aplicado à realidade da sua construtora ou incorporadora.",
  },
  {
    title: "Implantação assistida",
    description: "Nossa equipe acompanha a configuração e a migração de dados até o time estar operando.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

// Reaproveitado do FAQ real do Sistema Pillar (pillar.component.ts).
export const FAQS: FaqItem[] = [
  {
    question: "O que é o planejamento de obra?",
    answer:
      "É o módulo onde você define o cronograma físico-financeiro, controlando etapas, custos previstos e realizados para garantir a saúde financeira do empreendimento.",
  },
  {
    question: "Como o Pillar calcula a depreciação dos meus equipamentos?",
    answer:
      "O módulo Patrimônio cadastra cada bem com valor de aquisição e taxa anual, calcula a depreciação acumulada automaticamente e já reflete o valor residual na apuração contábil — sem planilha paralela.",
  },
  {
    question: "O sistema aplica os índices INCC e IGPM automaticamente?",
    answer:
      "Sim. Os índices ficam disponíveis direto no gerenciador financeiro para reajustar contratos, orçamentos e correção monetária sem precisar consultar outra fonte.",
  },
  {
    question: "Como faço para acessar o sistema remotamente?",
    answer:
      "O Pillar permite acesso remoto seguro via TS (Terminal Service) ou VPN, garantindo que você gerencie suas obras de qualquer lugar.",
  },
  {
    question: "Quantas empresas posso ter no meu sistema?",
    answer:
      "O sistema é multiempresa. Você pode gerenciar múltiplas obras e CNPJs diferentes dentro da mesma licença, conforme seu plano.",
  },
  {
    question: "Quais clientes podem utilizar o Pillar?",
    answer:
      "Construtoras, Incorporadoras, Empreiteiras e Administradoras de Carteira Imobiliária que buscam gestão profissional.",
  },
  {
    question: "Qual o custo mensal do Pillar?",
    answer:
      "O investimento varia conforme número de usuários e empresas. Fale com a gente pelo WhatsApp e te passamos uma proposta personalizada.",
  },
];

export type SocialProofItem =
  | { icon: "trending-up" | "building-2" | "headset"; kind: "count"; target: number; suffix: string; label: string }
  | { icon: "map-pin"; kind: "static"; value: string; label: string };

// Placeholders de prova social — SUBSTITUIR por números reais antes de publicar a página.
export const SOCIAL_PROOF: SocialProofItem[] = [
  { icon: "trending-up", kind: "count", target: 20, suffix: "+", label: "anos de mercado" }, // TODO: confirmar tempo real de mercado da Inforplace
  { icon: "building-2", kind: "count", target: 500, suffix: "+", label: "empresas atendidas" }, // TODO: confirmar número real de clientes
  { icon: "headset", kind: "count", target: 100, suffix: "%", label: "atendimento humano, sem robô" },
  { icon: "map-pin", kind: "static", value: "GO", label: "sede em Goiânia, atendimento nacional" },
];

export const SEGMENTS = [
  "Construtoras",
  "Incorporadoras",
  "Empreiteiras",
  "Administradoras de carteira",
];

export type Testimonial = {
  name: string;
  company: string;
  text: string;
};

// Depoimentos reaproveitados do TestimonialsComponent real do portal Inforplace
// (testmonials.component.ts) — os textos e nomes de pessoa são reais e já publicados.
// A empresa de cada depoimento foi reatribuída a pedido do cliente para usar os nomes
// reais da carteira atual (mesma lista de CLIENTS) — confirmar o par pessoa/empresa correto.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "David Alkmim",
    company: "CompactaGyn",
    text: "Fico feliz em ver que está no mercado profissionais de excelente qualidade e compromisso.",
  },
  {
    name: "Maria Dolores",
    company: "HB Engenharia",
    text: "Uso o Pillar há algum tempo, tive algumas dificuldades no início, mas hoje estou feliz com o sistema.",
  },
  {
    name: "Carlos Silva",
    company: "Carvalho Construtora",
    text: "O sistema Pillar mudou a forma como gerenciamos nossas obras. Incrível!",
  },
  {
    name: "Ana Souza",
    company: "Theo Engenharia",
    text: "A facilidade de uso e a precisão dos relatórios são os pontos fortes da Inforplace.",
  },
  {
    name: "Roberto Dias",
    company: "Primus Engenharia",
    text: "Suporte técnico impecável e sistema sempre atualizado com as normas.",
  },
];

export type Client = {
  /** Palavra de destaque do logotipo (peso forte). */
  primary: string;
  /** Complemento do nome, em caixa alta e menor, como subtítulo do logotipo. */
  secondary?: string;
};

// Lista de clientes informada diretamente pela Inforplace.
// Os "logos" são marcas geradas (símbolo + tipografia), sem os logotipos oficiais
// de cada empresa — confirmar autorização de cada cliente antes de publicar a página.
export const CLIENTS: Client[] = [
  { primary: "Compacta", secondary: "GYN" },
  { primary: "Nacional", secondary: "ASFALTOS" },
  { primary: "Carvalho", secondary: "CONSTRUTORA" },
  { primary: "Theo", secondary: "ENGENHARIA" },
  { primary: "AL", secondary: "ALMEIDA" },
  { primary: "Mold", secondary: "PREMOLDADOS" },
  { primary: "Malheiros", secondary: "IRMÃOS" },
  { primary: "Carvalho", secondary: "TRANSPORTES" },
  { primary: "HB", secondary: "ENGENHARIA" },
  { primary: "Numerator", secondary: "ENGENHARIA" },
  { primary: "Paolucci" },
  { primary: "Primus", secondary: "ENGENHARIA" },
  { primary: "G3", secondary: "ESTRUTURAL" },
];

export type ImpactRow = {
  label: string;
  sem: { text: string; pct: number };
  com: { text: string; pct: number };
};

// Comparação ilustrativa do cenário típico de uma construtora sem sistema integrado —
// não são métricas medidas de um cliente específico.
export const IMPACT_ROWS: ImpactRow[] = [
  {
    label: "Tempo para fechar o mês",
    sem: { text: "Lento", pct: 88 },
    com: { text: "Rápido", pct: 22 },
  },
  {
    label: "Apuração de custo e depreciação",
    sem: { text: "Manual, em planilha", pct: 85 },
    com: { text: "Automática, por obra", pct: 15 },
  },
  {
    label: "Visibilidade do custo da obra",
    sem: { text: "Só no fechamento", pct: 25 },
    com: { text: "Tempo real", pct: 95 },
  },
];

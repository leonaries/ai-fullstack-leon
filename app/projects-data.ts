export interface Project {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  link: string | null;
  detail: {
    overview: string;
    role: string;
    business: string;
    highlights: string[];
    techDetail: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'ecommerce-ai-sales-platform',
    name: '电商智能销售与 AI 应用平台',
    description: '面向电商售前、私域销售、内容生产与直播复用的一体化 AI 应用平台，打通数据治理、RAG、Agent 工作流和模型定制。',
    tech: ['LangGraph', 'LangChain', 'FastAPI', 'Python', 'Node.js', 'Hybrid RAG', 'Milvus', 'PostgreSQL', 'SSE'],
    link: null,
    detail: {
      overview: '围绕高客单价商品售前咨询重复、知识分散、素材复用率低和销售口径不一致等问题，整合销售语料、商品素材、直播转写、独立站咨询与私域会话，建设可持续演进的 AI 应用主线。',
      role: '担任 AI 应用技术负责人，负责技术路线、系统架构、核心链路设计与落地交付，推动数据治理、知识库、业务 Agent、模型定制和共享能力平台化。',
      business: '平台服务私域销售、独立站售前、内容生产、商品素材、直播复用与销售培训，目标是让大模型进入真实成交链路，并通过可信数据飞轮持续提升回复质量。',
      highlights: [
        '搭建 ETL → raw → staging → approved → 多下游的数据流水线，对微信、WhatsApp、独立站咨询和直播转写进行清洗、去重、脱敏、审核与标签化',
        '构建 Dense / 关键词混合召回、Metadata Filter 与 Cross-Encoder Rerank，统一 retrieval_text 承载文本、图片和视频检索',
        '串联 ASR → RAG → LLM → TTS，加入槽位记忆、意向识别、素材推荐与人工接管，将复杂场景 TTFT 从 15s 压缩至 2s 内',
        '基于 LangGraph 构建内容生产、直播切片与销售考核工作流，使用 PostgreSQL Checkpointer、SSE、节点级重试和人工审核保障长任务可恢复',
        '打通 SFT / QLoRA / LoRA 链路，并将 LLM 网关、RAG、会话记忆和 Prompt 管理拆分为 4 个 MCP Server',
      ],
      techDetail: '核心技术包括 Python + FastAPI、Node.js、LangGraph、LangChain、PostgreSQL、Milvus / pgvector、Hybrid RAG、Cross-Encoder Rerank、SSE、ASR / TTS、多模型动态路由与容器化部署。',
    },
  },
  {
    slug: 'self-evolving-agent-runtime',
    name: '商品交易自进化 Agent — Harness & Loop Engine',
    description: '模型无关、工具可插拔的 Agent 运行时，通过 Harness 底座、Loop 引擎和人在环纠错构建可审计的业务自进化闭环。',
    tech: ['Agent Runtime', 'Harness', 'Loop Engine', 'Tool Calling', 'Trace', 'RAG', 'Prompt Governance'],
    link: null,
    detail: {
      overview: '面向商品咨询话术高频变化、规则维护成本高和模型回复不可控等问题，设计模型无关、工具可插拔的 Agent 运行时，让业务专家示范、人工纠错和模型回复持续形成闭环。',
      role: '负责 Harness 底座、Loop 执行循环、工具协议、Trace 观测与纠错回流机制设计，确保 Agent 能在明确边界内自主决策并稳定恢复。',
      business: '系统用于销售咨询、商品规则解释、报价边界控制和高风险回复治理，通过示范学习与人工校正减少维护成本，并让优质回复沉淀为可复用业务资产。',
      highlights: [
        '以 LLMProvider 抽象隔离模型，以 Tool 抽象与注册表承载能力，让 Loop 引擎只依赖接口',
        '统一 tool_call / tool_result 消息协议，支持离线 Mock 与真实模型配置化热切换',
        '实现“推理 → 选工具 → 调用 → 观察 → 再决策 → 终止”的模型驱动循环，支持单步多工具并行',
        '通过最大步数、超时、转人工、全链路 Trace 和“错误即上下文”机制防止 Agent 失控',
        '将专家示范归纳为可编辑套路总纲，并以“业务铁律 > 套路总纲 > 召回样本”分层约束高风险动作',
      ],
      techDetail: '围绕 Agent Runtime、Tool Registry、LLMProvider、Trace、Prompt Governance、RAG 样本召回与人在环工作流构建，强调模型解耦、工具可插拔、状态可追踪和结果可审计。',
    },
  },
  {
    slug: 'logistics-digital-platform',
    name: '物流通运营端与货主端',
    description: '覆盖建单、派车、在途、回单、报账、发票的物流运输数字化平台，通过契约化接口和工程化规范提升跨团队交付效率。',
    tech: ['React Hooks', 'TypeScript', 'Ant Design', 'ECharts', 'YApi', 'Biome', 'Figma'],
    link: null,
    detail: {
      overview: '依托车辆大数据与统一数据中台，打通车辆、运单、运输节点、结算及票据等数据口径，支撑运营端与货主端数字化协同和精细化经营。',
      role: '担任前端架构师，负责两端需求交付、前端代码规范、性能优化及公共组件开发维护，保障跨端功能复用与长期可维护性。',
      business: '平台覆盖建单、派车、在途、回单、报账、发票等运输全链路，服务物流经营中的调度、结算、票据和经营分析场景。',
      highlights: [
        '围绕数据中台与产品、后端统一业务术语、字段粒度和接口契约，降低跨团队沟通和联调成本',
        '通过 YApi 与 yapi-to-typescript 自动生成类型，提升接口变更感知与前后端并行开发效率',
        '推动 Figma UI 规范结合接口自动生成 Mock 数据，页面开发与联调效率提升超过 100%',
        '推动团队从 ESLint + Prettier 迁移至 Biome，减少规则冲突并统一代码检查与格式化链路',
        '攻克复杂数据渲染、跨模块状态协同和页面性能瓶颈，沉淀可复用解决方案',
      ],
      techDetail: '基于 React Hooks、TypeScript、Ant Design、ECharts、YApi、Biome 和 Figma 协作流程建设，重点在接口契约、组件复用、复杂数据渲染和工程规范。',
    },
  },
];

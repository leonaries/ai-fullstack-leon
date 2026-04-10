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
    slug: 'web3-agent-media',
    name: 'Web3 Agent 多媒体运营系统',
    description: '面向 Crypto 垂直赛道的 AI 内容工厂+自动化增长飞轮，通过 Hybrid RAG 架构实现从热点抓取到多平台内容生成的自动化 SOP。',
    tech: ['React', 'TypeScript', 'Python', 'LangChain', 'PostgreSQL', 'Hybrid RAG', 'Tavily', 'VectorDB'],
    link: null,
    detail: {
      overview: '面向 Crypto 垂直赛道打造的"AI 内容工厂+自动化增长飞轮"。通过重构"热点捕捉-内容生产-多平台分发-数据复盘"的全链路增长漏斗，利用 Tavily + Hybrid RAG 架构实现从热点抓取到多平台内容生成的自动化 SOP。',
      role: '负责前端页面开发（问答交互界面、智能体管理后台）、业务开发（会话管理、模型路由、提示词编译、流式生成）、Agent Skills 工作流编排设计、MCP 工具选型及第三方 API 调研。',
      business: '集成 MCP 协议编排 Agent 工作流，模拟人工完成跨平台自动分发与排期。通过多模型动态路由与 Prompt 工程优化，确保输出内容具备深度行业洞察并兼顾生成成本。',
      highlights: [
        '对接 OpenAI（GPT）、Anthropic（Claude）模型平台，实现多模型动态切换',
        '对接聚合 API 平台，实现生产图片和视频的模型切换',
        '接入 Coze Bot 知识库，搭建混合 RAG 检索增强架构（Hybrid RAG Model）',
        '辅助 RAG 知识库建设：文档整理、切片策略设计、Prompt 提示词模板设计与调试优化',
        '集成 MCP 协议编排 Agent 工作流，实现跨平台自动分发',
      ],
      techDetail: '前端使用 React + TypeScript，后端使用 Python + LangChain，数据库为 PostgreSQL，搜索引擎集成 Tavily，向量数据库支持 Hybrid RAG 检索增强架构。',
    },
  },
  {
    slug: 'phoenix-website',
    name: 'Phoenix Website',
    description: 'PUSD 稳定币 DeFi 协议官网，Three.js 火凤凰 3D 动画特效，i18n 国际化，HTTP 缓存 + Service Worker + CDN 性能优化。',
    tech: ['Next.js 15', 'React 19', 'Three.js', 'Framer Motion', 'i18next', 'Tailwind CSS', 'pnpm'],
    link: 'https://www.phnx.finance',
    detail: {
      overview: 'Phoenix PUSD 是一个以 PUSD 稳定币为核心的 DeFi 协议官网，通过质押挖矿、借贷、跨链、代币兑换等 DeFi 功能，为用户提供稳定收益和多层级推荐奖励。',
      role: '负责前端项目的整体架构以及性能优化方案设计，火凤凰动画和特效的实现，并处理浏览器兼容性，使用 i18n server 在服务端处理国际化。',
      business: '作为 Phoenix 生态的品牌入口，展示项目愿景、产品矩阵、团队信息、路线图等内容，引导用户进入 DApp 使用产品。',
      highlights: [
        '使用 Three.js 打造火凤凰 3D 模型动画，实现粒子效果和星空背景的沉浸式视觉体验',
        '通过 HTTP 缓存 + Service Worker + Vercel/CDN 缓存实现网页性能提升',
        '将 Agentic Coding 概念落地实际开发中，大幅提高研发效率的同时保证研发质量',
        '使用 Skills（web-design-guidelines、frontend-design、react-best-practices、seo-audit）确保 AI 遵循统一规范',
        '基于 Next.js 15 App Router，实现 SSG 静态生成，首屏加载极快',
      ],
      techDetail: '基于 Next.js 15 + React 19 + Tailwind CSS + Framer Motion + Three.js + i18next + pnpm 构建，服务端国际化处理，多层缓存策略优化性能。',
    },
  },
  {
    slug: 'phoenix-defi-dapp',
    name: 'Phoenix DeFi Dapp',
    description: '基于 Web3 的稳定币生态平台，包含 Mint、Bridge、Swap、Farm、Quest、Borrow 等核心模块。',
    tech: ['React 19', 'Reown AppKit', 'Wagmi2', 'Viem', 'TanStack', 'i18next', 'Tailwind CSS', 'pnpm'],
    link: 'https://dapp.phnx.finance',
    detail: {
      overview: 'Phoenix PUSD 是一个基于 Web3 的稳定币生态平台，主要包含 Mint（铸造）、Bridge（跨链桥）、Swap（兑换）、Farm（收益）、Quest（任务）、Borrow（借贷）等核心模块。',
      role: '负责前端项目的整体架构以及性能优化方案设计，与合约开发、后端开发协作 Bridge、Swap、Stake 等核心模块。',
      business: '平台核心业务包括：稳定币铸造与赎回、跨链桥、代币兑换、质押挖矿、任务系统、超额抵押借贷。用户可以通过连接钱包参与各类 DeFi 协议，获取收益。',
      highlights: [
        '使用 React 19 + Reown AppKit + Wagmi2 + Viem 构建，充分利用最新的 React 特性和 Web3 工具链',
        '实现完整的交易生命周期管理，包括交易构建、签名、广播、确认和错误处理',
        '响应式设计，完美适配桌面端和移动端钱包浏览器',
        '集成 TanStack Query 进行数据缓存和状态管理',
        '支持多语言国际化（i18next）',
      ],
      techDetail: '前端使用 React 19 + TypeScript，Web3 接入使用 Reown AppKit + Wagmi2 + Viem，数据管理使用 TanStack Query，样式方案为 Tailwind CSS，包管理使用 pnpm。',
    },
  },
  {
    slug: 'chooseme-prediction',
    name: 'ChooseMe 预测市场管理后台',
    description: 'Web3 预测市场运营与风控管理后台，包含数据大盘、事件管理、清结算、财务资金管理等核心模块。',
    tech: ['Vue 3', 'TypeScript', 'Vite', 'Tailwind CSS', 'Ant Design', 'Pinia', 'Vue Query', 'pnpm'],
    link: 'https://chooseme.vip',
    detail: {
      overview: '专注于 Web3 预测市场（Prediction Market）日常运营与风控管理的业务后台，包含数据大盘、事件管理、清结算模块、财务资金管理、用户仓位与订单系统、平台基础配置等核心业务模块。',
      role: '负责项目整体的架构设计，利用 Vitest 进行单元测试，Playwright 进行 E2E 测试，主导事件管理、清结算、财务高额提现审核、动态汇率配置等核心迭代模块的开发与前后端联调。',
      business: 'C 端预测市场平台的运营支撑系统，覆盖 Dashboard 统计全局、Event 预设与审核、Settlement 预测结果录入、Finance 充提审核与地址追踪、用户仓位与订单管理、汇率/系统日志监控。',
      highlights: [
        '使用 Vue 3 + TypeScript + Vite 构建，集成 Ant Design 组件库',
        '利用 Vitest 进行单元测试，Playwright 进行 E2E 测试，保障代码质量',
        '主导事件管理、清结算、财务审核等核心模块开发',
        '集成 Pinia 状态管理和 Vue Query 数据缓存',
        '动态汇率配置和系统日志监控功能',
      ],
      techDetail: '基于 Vue 3 + TypeScript + Vite 开发，UI 框架为 Ant Design，状态管理使用 Pinia，数据请求使用 Vue Query (@tanstack)，包管理使用 pnpm。',
    },
  },
  {
    slug: 'dapplink-event-listener',
    name: 'DappLink 链上合约事件监听服务',
    description: '面向资金管理合约的链上事件采集系统，实时同步充值、提现等事件，为资产管理和审计追踪提供底层数据支持。',
    tech: ['NestJS', 'TypeScript', 'Web3.js', 'TypeORM', 'PostgreSQL', 'Swagger'],
    link: null,
    detail: {
      overview: '面向资金管理合约搭建链上事件采集系统，实时同步充值、提现管理变更等相关事件，沉淀标准化链上数据，为资产管理、运营分析和审计追踪提供底层数据支持。',
      role: '负责监听服务的后端开发，完成合约 ABI 对接、事件解析、区块轮询、数据库落库全链路实现。',
      business: '为资产管理、运营分析和审计追踪提供底层数据支持，实时采集链上充值、提现等关键事件。',
      highlights: [
        '设计基于"最新区块号 + 本地同步游标 + 固定步长扫描"的增量同步方案，兼顾实时性与稳定性',
        '完成合约 ABI 对接、事件解析、区块轮询、数据库落库全链路实现',
        '使用 NestJS + TypeORM 构建稳定的后端服务架构',
        '集成 Swagger 自动生成 API 文档',
      ],
      techDetail: '基于 NestJS + TypeScript + Web3.js + TypeORM + PostgreSQL 开发，使用 Schedule 模块进行定时任务调度，Swagger 生成 API 文档。',
    },
  },
  {
    slug: 'dapplink-mpc',
    name: 'DappLink MPC 资管 SASS 系统',
    description: 'Web3 商户全链路门户与运营中台，Monorepo 架构，覆盖商户入驻、资产/钱包管理、渠道工单、运营审核。',
    tech: ['React 18', 'TypeScript', 'Ant Design', 'Lerna', 'Monorepo', 'Storybook', 'Wagmi', 'OpenAPI-TypeScript', 'Cypress'],
    link: null,
    detail: {
      overview: '面向 Web3 商户的全链路门户与运营中台，覆盖商户入驻、资产/钱包管理、渠道工单、运营审核，要求双端复用统一配置、支持多语言、接入 Web3 钱包，采用谷歌验证器做安全二次验证。',
      role: '主导 pnpm Monorepo 架构，负责商户管理+资金管理等核心页面开发，以及关键操作谷歌+邮箱安全双重验证，多语言方案，Biome 代码规范。',
      business: '系统服务于 Web3 商户和机构用户，核心业务包括：商户入驻、MPC 钱包创建与管理、资产归集与分发、渠道工单管理、运营审核流程。',
      highlights: [
        '采用 pnpm Monorepo 架构（Lerna），实现多个子应用和公共库的代码复用',
        '抽离 api-common/config/utils/types 等共享包，打通 Swagger → openapi-typescript → Axios Service 的自动化类型链路',
        '关键操作谷歌验证器+邮箱安全双重验证',
        '使用 Storybook 进行组件文档化和可视化测试',
        '集成 Cypress 进行 E2E 测试，Biome 代码规范',
      ],
      techDetail: '前端采用 React 18 + TypeScript，UI 框架为 Ant Design，Web3 交互使用 Wagmi。Monorepo 基于 pnpm + Lerna 管理，集成 Storybook、openapi-typescript、Cypress。',
    },
  },
  {
    slug: 'wuliutong',
    name: '物流通',
    description: '全链路物流运输数字化管理平台，从建单、派车、在途、回单、报账、发票实现全流程管理，联调效率提升超 100%。',
    tech: ['React', 'TypeScript', 'Ant Design', 'Echarts', 'YApi', 'Biome'],
    link: null,
    detail: {
      overview: '通过集团公司全国货运交通平台的车辆大数据，从建单、派车、在途、回单、报账、发票，实现全链路物流运输的数字化管理，助力货运经营者精细管理，降本增效。',
      role: '负责项目需求开发，前端项目代码规范以及性能优化，以及公共组件的开发和维护。',
      business: '平台服务于物流企业的日常运营，核心业务包括：运单全生命周期管理、车辆与司机调度、运费计算与财务结算、运营数据分析与报表。',
      highlights: [
        '通过与产品、后端对齐业务术语和字段颗粒度，推动 YApi + TypeScript 自动化，页面开发和联调效率提高超 100%',
        '推动产品使用 Figma UI 结合 YApi 接口基于自动生成 mock 数据，大量降低联调时间成本',
        '推动团队从 ESLint 到 Biome 的升级，减少 ESLint 和 Prettier 的规则冲突',
        '集成 Echarts 实现复杂数据可视化',
      ],
      techDetail: '基于 React Hooks + TypeScript 开发，UI 框架为 Ant Design，数据可视化使用 Echarts，接口管理使用 YApi，代码规范使用 Biome。',
    },
  },
  {
    slug: 'efutong',
    name: 'E 付通校园管理系统',
    description: '用于高校及中小学的信息管理和收费支付校园管理系统，覆盖后台管理、H5、微信支付宝小程序多端。',
    tech: ['Vue 2', 'Element UI', 'Node.js', 'Docker', 'Echarts', 'Webpack', 'Redis'],
    link: null,
    detail: {
      overview: '用于高校以及中小学老师和工作人员进行信息管理和收费支付的校园管理系统，覆盖后台管理系统、平台版 H5、微信支付宝小程序多端。',
      role: '负责项目工程化搭建与优化、配置化低代码报表组件开发维护、多端兼容性处理、服务器部署与运维。',
      business: '校园信息管理和收费支付一站式解决方案，支持多种支付环境（微信、支付宝、浏览器、App）和硬件对接（打印机等）。',
      highlights: [
        '配置 git husky、lint-staged 推动项目规范化，Webpack 配置优化使老项目编译时间减少 80%',
        '推动团队 npm 私仓建立，开发配置化低代码报表通用组件',
        '利用 Lodop 连接打印机等硬件进行发票和收据打印',
        '处理 H5 在 iOS 和 Android 上的兼容性，不同环境下的支付对接',
        '用 Node.js 与第三方高校单点登录对接，即时通信推送功能',
        '学校 Linux 服务器部署 Docker 容器以及服务器日志排查',
      ],
      techDetail: '基于 Vue 2 + Element UI 开发，后端使用 Node.js，数据库缓存使用 Redis，数据可视化使用 Echarts，构建工具为 Webpack，容器化部署使用 Docker。',
    },
  },
  {
    slug: 'group-seo-website',
    name: '集团官网 SEO',
    description: '针对百度搜索引擎的官网排名优化项目，通过多维度 SEO 优化使自然流量提升 100%。',
    tech: ['Vue 2', 'Nuxt', 'TypeScript', 'SCSS', 'PM2'],
    link: null,
    detail: {
      overview: '针对百度搜索引擎官网排名优化，提高 UV 量和用户转化率进行的 SEO 项目，通过优化页面加载速度、关键词布局、元标签配置、内部链接结构及页面权重分布，提升整站 SEO 效果。',
      role: '负责官网所有相关需求的迭代开发，处理主流浏览器兼容性以及 WAP 端 iOS 和 Android 兼容性。',
      business: 'PC 端和 WAP 端官网的 SEO 优化，提升搜索引擎排名和自然流量。',
      highlights: [
        '使用 LRU 缓存中间件对页面组件和数据在中间层服务器进行缓存',
        '对用户 IP 解析进行区域个性化推荐',
        '优化页面加载速度、关键词布局，使得官网自然流量提升 100%',
        '使用 PM2 管理 Node 进程，处理主流浏览器和移动端兼容性',
      ],
      techDetail: '基于 Vue 2 + Nuxt + TypeScript + SCSS 开发，使用 PM2 管理 Node 进程，LRU 缓存中间件优化性能。',
    },
  },
];

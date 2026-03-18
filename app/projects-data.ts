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
    slug: 'phoenix-defi-dapp',
    name: 'Phoenix DeFi Dapp',
    description: '稳定币生态平台，提供借贷、质押等 DeFi 服务。通过优化 RPC 调用策略，将性能提升 2-5 倍。',
    tech: ['React 19', 'Wagmi2', 'Viem', 'TypeScript', 'Tailwind CSS'],
    link: 'https://dapp.phnx.finance',
    detail: {
      overview: 'Phoenix DeFi Dapp 是一个基于 EVM 链的稳定币生态平台，为用户提供借贷、质押、流动性挖矿等去中心化金融服务。平台支持多链部署，致力于打造安全、高效的 DeFi 基础设施。',
      role: '作为核心全栈开发者，负责整个 DApp 前端架构设计与开发，包括钱包连接、合约交互、交易流程、数据展示等核心模块。同时参与智能合约的集成调试和 RPC 层优化。',
      business: '平台核心业务包括：稳定币铸造与赎回、超额抵押借贷、质押挖矿、流动性池管理。用户可以通过连接钱包参与各类 DeFi 协议，获取收益。',
      highlights: [
        '使用 React 19 + Wagmi2 + Viem 构建，充分利用最新的 React 特性和 Web3 工具链',
        '优化 RPC 调用策略，通过请求合并、缓存和 Multicall 将链上数据读取性能提升 2-5 倍',
        '实现完整的交易生命周期管理，包括交易构建、签名、广播、确认和错误处理',
        '响应式设计，完美适配桌面端和移动端钱包浏览器',
        '集成多链支持，用户可在不同 EVM 链间无缝切换',
      ],
      techDetail: '前端使用 React 19 + TypeScript，状态管理采用 Wagmi2 的 hooks 体系，链上交互通过 Viem 实现。样式方案为 Tailwind CSS，构建工具为 Vite。通过自定义 hooks 封装合约调用逻辑，实现业务与链上交互的解耦。',
    },
  },
  {
    slug: 'phoenix-website',
    name: 'Phoenix Website',
    description: '品牌官网，采用 Three.js 打造火凤凰 3D 动画和星空特效，结合 Framer Motion 实现流畅交互。',
    tech: ['Next.js 15', 'Three.js', 'Framer Motion', 'TypeScript'],
    link: 'https://phnx.finance',
    detail: {
      overview: 'Phoenix 品牌官网是项目的门户网站，通过沉浸式的 3D 视觉体验展示品牌形象和产品特性。网站采用 Next.js 15 构建，具备优秀的 SEO 表现和加载性能。',
      role: '独立负责官网的设计实现和全栈开发，从创意构思到 3D 动画实现、交互设计、性能优化和部署上线。',
      business: '作为 Phoenix 生态的品牌入口，展示项目愿景、产品矩阵、团队信息、路线图等内容，引导用户进入 DApp 使用产品。',
      highlights: [
        '使用 Three.js 打造火凤凰 3D 模型动画，实现粒子效果和星空背景的沉浸式视觉体验',
        '结合 Framer Motion 实现页面滚动动画和交互过渡效果，提升用户体验',
        '基于 Next.js 15 App Router，实现 SSG 静态生成，首屏加载极快',
        '3D 场景按需加载，通过 LOD 和懒加载策略优化移动端性能',
        'SEO 优化，结构化数据和 Open Graph 标签完善',
      ],
      techDetail: '基于 Next.js 15 App Router 架构，使用 Three.js + @react-three/fiber 实现 3D 场景渲染，Framer Motion 处理 2D 动画和页面过渡。TypeScript 全覆盖，Tailwind CSS 样式方案。',
    },
  },
  {
    slug: 'dapplink-mpc',
    name: 'DappLink MPC 资管系统',
    description: 'Web3 商户全链路门户，提供 MPC 钱包、资产管理、交易监控。Monorepo 架构提升代码复用效率。',
    tech: ['React 18', 'Wagmi', 'Monorepo', 'TypeScript', 'Ant Design'],
    link: null,
    detail: {
      overview: 'DappLink MPC 资管系统是面向 Web3 商户的全链路资产管理平台，基于 MPC（多方计算）技术实现安全的密钥管理和资产托管，为企业级用户提供钱包管理、资产归集、交易审批、风控监控等功能。',
      role: '作为前端负责人，主导整个系统的前端架构设计，搭建 Monorepo 工程体系，开发核心业务模块，并协调前后端接口对接。',
      business: '系统服务于 Web3 商户和机构用户，核心业务包括：MPC 钱包创建与管理、多签审批流程、资产归集与分发、交易记录与监控、风控规则配置。',
      highlights: [
        '采用 Monorepo 架构（pnpm workspace），实现多个子应用和公共库的代码复用，开发效率显著提升',
        '基于 MPC 技术的钱包交互流程设计，实现安全的密钥分片和交易签名',
        '完整的多签审批工作流，支持自定义审批规则和多级审批',
        '实时交易监控大屏，集成 WebSocket 推送和数据可视化',
        '权限管理系统，支持角色、部门、操作粒度的精细化控制',
      ],
      techDetail: '前端采用 React 18 + TypeScript，UI 框架为 Ant Design，Web3 交互使用 Wagmi。Monorepo 基于 pnpm workspace 管理，包含商户端、管理端和公共组件库。状态管理使用 Zustand，请求层封装 Axios + React Query。',
    },
  },
  {
    slug: 'wuliutong',
    name: '物流通',
    description: '物流管理平台，集成 Echarts 实现复杂数据可视化。组件化和工程化实践将开发效率提升 100%。',
    tech: ['React', 'TypeScript', 'Echarts', 'Ant Design', 'Webpack'],
    link: null,
    detail: {
      overview: '物流通是北京中交车旺科技有限公司的核心物流管理平台，为物流企业提供运单管理、车辆调度、财务结算、数据分析等一站式解决方案。',
      role: '作为高级前端开发，主导平台前端架构升级和核心模块开发，推动组件化和工程化实践，建立前端开发规范。',
      business: '平台服务于物流企业的日常运营，核心业务包括：运单全生命周期管理、车辆与司机调度、运费计算与财务结算、运营数据分析与报表、客户关系管理。',
      highlights: [
        '集成 Echarts 实现复杂数据可视化，包括运营大屏、趋势分析、区域热力图等',
        '通过组件化和工程化实践，将开发效率提升 100%，建立可复用的业务组件库',
        '设计并实现动态表单引擎，支持运单等复杂表单的配置化生成',
        '优化 Webpack 构建配置，首屏加载时间减少 40%',
        '建立前端代码规范和 Code Review 流程，提升团队代码质量',
      ],
      techDetail: '基于 React + TypeScript 开发，UI 框架为 Ant Design，数据可视化使用 Echarts。构建工具为 Webpack，状态管理使用 Redux + Redux Saga。封装了统一的请求层、权限控制和路由管理方案。',
    },
  },
];

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
    slug: 'realtime-voice-shopping-agent',
    name: '实时语音导购与合规销售辅助',
    description: '以电商私域销售的实时语音交互为入口，串联数据中台、RAG、多模态素材、LLM 推理、ASR/TTS 与人工可控销售辅助链路。',
    tech: ['RTC', 'ASR', 'TTS', 'Hybrid RAG', 'Rerank', 'Prefix Caching', 'KV Cache', 'Prompt Pilot'],
    link: null,
    detail: {
      overview: '面向电商私域销售场景，将销售对话沉淀为知识资产，再由实时语音导购承接商品咨询、专业应答、素材推荐与下单引导。',
      role: '负责实时语音导购链路、RAG 召回、LLM 首字延迟优化、RTC 弱网治理、Prompt 评测回流和微调模型接入。',
      business: '用于让 AI 从“回答问题”进入真实销售辅助场景，在保持人工可控和合规边界的前提下，提升响应速度、专业度和转化承接能力。',
      highlights: [
        '直接消费销售语料治理系统导出的 RAG 数据，串联混合检索、Int8 量化、Metadata 标签过滤、TOPK / N / Rerank 协同调节',
        '联通多模态素材中心，检索命中图片和视频后按文字、图片、视频混排分条返回，让语音与图文客服具备多模态应答能力',
        '面向语音查询中的专有名词命中瓶颈，采用降维、精简 Limit、base-rerank 轻量模型与 dense_weight 动态平衡，使检索速度提升约 4 倍',
        '固定 RAG 片段排序并合并 System Prompt，深度触发 Prefix Caching 与 KV Cache，将复杂 RAG 场景 TTFT 从 15s 降至 2s 内',
        'ASR 实时捕获用户情绪变化，结合 TTS 声音复刻输出情绪化回复；弱网侧引入 FEC 与自适应 Jitter Buffer，在高丢包环境下保障语音可用性',
        'Prompt Pilot 统一管理提示词，通过评测集做自动评分和版本对比，并将负样本优化后的高质量样本回流数据中台',
      ],
      techDetail: '核心技术包括 RTC、ASR / TTS、Hybrid RAG、Metadata Filter、Rerank、Prefix Caching、KV Cache、Prompt Pilot、FEC、Jitter Buffer、多模态素材召回、微调模型接入和 Max Token 分级控制。',
    },
  },
  {
    slug: 'sales-data-finetuning-pipeline',
    name: '销售语料治理与专属模型微调',
    description: '以销售对话可信治理为起点，贯通人工审核、训练与检索数据导出、专属模型训练、知识检索及结果回灌。',
    tech: ['ETL', 'DataFilter', 'ShareGPT', 'OpenAI JSONL', 'LLaMA-Factory', 'QLoRA', 'LoRA', 'DPO'],
    link: null,
    detail: {
      overview: '作为客服、微调、考核、素材与直播业务的数据总线，将销售对话整理为可审核、可训练、可检索、可回灌的高质量数据资产。',
      role: '负责销售语料治理系统、数据分层、脱敏与审核、训练数据导出、知识资产加工、本地模型验证、云端 LoRA 微调和 RAG Pipeline。',
      business: '解决销售话术风格不稳定、数据质量不可控、知识更新依赖重训等问题，用“微调管风格、RAG 管知识”的职责分离降低长期维护成本。',
      highlights: [
        '从本地聊天数据库抽取消息，完成通讯录映射、群消息发送者解析、时间过滤和基于 session / timestamp / content 的去重',
        '按 ETL、原始库、暂存区、人工审核、多下游组织数据链路，raw_chats 作为不可变原始库保留审计基础',
        'DataFilter 按 9 级优先级过滤噪声，并对手机号、身份证、银行卡、邮箱、API Key 等敏感字段做清洗时、写入时、导出时三重脱敏',
        '通过 5 分钟时间窗构建可审核对话块，合并同角色连续消息并自动预标注分类、质量分、Q&A、敏感标记',
        '同一份 approved 数据导出 ShareGPT、Alpaca、OpenAI JSONL 与 RAG CSV，分别服务微调和知识库',
        '本地 LLaMA-Factory + Qwen2.5 执行 QLoRA 快速验证数据质量，通过后再进行生产级 LoRA；规划 SFT 到 DPO 的训练演进路径',
        '构建 Embedding、向量检索、Cross-Encoder Rerank 三阶段 RAG Pipeline，使知识命中率从 72% 提升至 89%',
      ],
      techDetail: '核心技术包括 SQLite 数据抽取、PostgreSQL、ETL、DataFilter、正则脱敏、ShareGPT、Alpaca、OpenAI JSONL、RAG CSV、DashScope Embedding、knowledge_chunks、knowledge_articles、LLaMA-Factory、Qwen2.5、QLoRA、LoRA、SFT、DPO 与 Cross-Encoder Rerank。',
    },
  },
  {
    slug: 'mcp-ai-infrastructure',
    name: 'AI 算力网关与多智能体共享基座',
    description: '将模型访问、RAG 检索、会话记忆与 Prompt 能力收敛为 MCP 共享服务，支撑多业务线复用同一套智能体基础设施。',
    tech: ['MCP Server', 'FastAPI', 'LLM Gateway', 'Viking DB', 'Memory', 'Prompt Center', 'Docker', 'Serverless'],
    link: null,
    detail: {
      overview: '把 LLM 网关、RAG 检索、会话记忆和 Prompt 管理拆为 4 个独立 MCP Server，通过标准协议、租户隔离和独立部署，让业务只关注 Agent 编排。',
      role: '负责 MCP Server 拆分、REST 到 MCP 桥接网关、多租户鉴权与配额、统一模型路由、RAG 物理隔离、双层记忆和容器化分层发布。',
      business: '解决多条 AI 业务线重复建设模型网关、RAG、记忆、Prompt 能力的问题，让智能体基础能力沉到统一平台层。',
      highlights: [
        '围绕共享服务边界拆分 LLM 网关、RAG 检索、会话记忆、Prompt 管理 4 个 MCP Server，经 Streamable HTTP 暴露 Tool / Prompt 原语',
        'FastAPI 网关串联认证、日志、配额、路由四层中间件，通过 Trace ID 贯通全链路追踪',
        'MCP Client Manager 管理短连接，并按项目执行 API Key 认证与 Token 配额计量，支撑多租户隔离和成本管控',
        '通过逻辑模型名映射 Endpoint 实现 auto / pro / lite 路由，YAML 热切换对业务无感',
        'RAG 服务基于 project_id 分配独立 Collection 做物理隔离，新项目调用 ingest_document Tool 即可自助纳管',
        '双层记忆区分会话记忆和用户画像，用户事实可在客服 Agent 与写作 Agent 间同步复用',
        '固化召回历史、读画像、检索知识、渲染 Prompt、LLM 推理、存记忆、提取事实的七步 Agent 编排流水线',
      ],
      techDetail: '核心技术包括 MCP Server、Streamable HTTP、FastAPI Gateway、MCP Client Manager、Trace ID、API Key、Token 配额、YAML 热切换、Viking DB、PostgreSQL UPSERT、Prompt 原语、Docker、阿里云 Serverless、灰度发布与秒级回滚。',
    },
  },
  {
    slug: 'multimodal-content-distribution-agent',
    name: '多模态内容运营与自动化分发 Agent',
    description: '用状态化工作流组织商品内容的选题、写作、配图与分发，在统一指标、模型路由、可观测和韧性机制下降低生产成本。',
    tech: ['LangGraph', 'SubGraph', 'PostgreSQL Checkpointer', 'SSE', 'Pydantic', 'JSON Mode', 'LangSmith'],
    link: null,
    detail: {
      overview: '面向商品内容和自媒体运营需求，构建状态化 Agent 工作流，把选题、写作、配图与分发纳入可回滚、可重试、可观测、可沉淀的生产链路。',
      role: '负责 LangGraph 工作流、SubGraph 编排、Checkpointer 状态恢复、SSE 流式输出、并发配图、多模型路由、Mock 开关和服务韧性设计。',
      business: '让内容生成不再是一次性产物，而是能持续沉淀到素材中心，并反哺 AI 客服的多模态回复素材。',
      highlights: [
        '用 LangGraph 搭建状态化多阶段内容流程，并通过 SubGraph 把选题、写作、配图划分为独立编排单元',
        'PostgreSQL Checkpointer 持久化状态，可从任意历史节点回滚并增量重试，将故障恢复粒度细化到单节点',
        'MetricsContext 追踪 Token 消耗、推理延迟与错误率，再结合模型定价核算成本，为模型选型提供依据',
        'SSE 与 LangGraph astream_events 深度衔接，监听 on_chat_model_stream 获取 Token 级实时流，使感知 TTFT 下降约 60%',
        'asyncio.gather + run_in_executor 将同步配图 API 包装为协程并发，配合指数退避重试让整体生成耗时减少约 70%',
        '多模型路由将简单任务分配给轻量模型、复杂任务交给旗舰模型，结合 Pydantic Schema、JSON Mode 和手动解析降低推理成本',
        '生成后的商品图直接写入素材中心，经过离线增强后成为 AI 客服多模态回复素材，闭合生成即沉淀链路',
      ],
      techDetail: '核心技术包括 LangGraph、SubGraph、PostgreSQL Checkpointer、SSE、astream_events、ReadableStream、MetricsContext、asyncio、Pydantic Schema、JSON Mode、LangSmith、structlog、request_id、SlowAPI、指数退避、熔断降级和优雅关闭。',
    },
  },
  {
    slug: 'multimodal-assets-sales-training',
    name: '多模态素材中心与 AI 销售考核培训系统',
    description: '用共享数据链连接多模态资产管理和销售训练评测，让商品素材服务 AI 客服，并把可信知识转化为可复核考题与评分。',
    tech: ['pgvector', 'HNSW', 'OCR', 'VLM', 'ASR', 'LLM Judge', 'MMR', 'Milvus'],
    link: null,
    detail: {
      overview: '一端管理商品图、详情图、视频、直播片段等多模态素材，让其可被语义命中；另一端消费可信知识自动生成销售考题并自动评分。',
      role: '负责多模态向量模型、retrieval_text 设计、manual / enriched 两条素材入库路线、长视频片段定位、多模态混排和 AI 销售考核评分。',
      business: '让商品素材既能服务 AI 客服多模态回复，也能反向补充数据中台；同时用自动出题和五维评分替代低效人工培训考核。',
      highlights: [
        'text / image / video 三类资产统一建模在 rag_assets 表，采用 pgvector 1024 维与 HNSW vector_cosine_ops，一条 SQL 完成跨模态召回',
        '向量化对象不是媒体文件，而是描述“这张图 / 视频能回答什么问题”的 retrieval_text，使媒体素材天然对齐用户文本提问',
        'manual 入库通过标题、描述、标签、分类拼接 retrieval_text 后向量化；命中结果仅返回打码版 URL 以守住隐私边界',
        'enriched 增强通过 OCR + VLM 补图片文字和描述，通过 ASR + LLM 摘要补视频口播，使召回相似度从约 0.38 提升至约 0.71',
        '长视频依据 ASR 时间戳切分为多条素材，media_url 附带时间参数，前端播放器可直接定位精彩片段',
        'AI 销售考核消费 knowledge_articles / knowledge_chunks 自动生成分级场景题，并用 LLM 从实战性、需求把握、销售策略、话术自然度、红线检查五维评分',
        '知识库膨胀到十万级后，将固定 top-30 检索升级为 LLM 规划主题、多轮向量检索和 MMR 去重的 RAG 出题方案',
      ],
      techDetail: '核心技术包括 pgvector、HNSW vector_cosine_ops、text-embedding-v3、RapidOCR、qwen-vl、ASR、LLM 摘要、UPSERT、MMR、多轮向量检索、LLM 自动出题、LLM 自动评判和人工二次复核。',
    },
  },
  {
    slug: 'edge-cloud-live-replay-clipping',
    name: '端云协同直播回放切片系统',
    description: '面向直播带货回放，将浏览器轻量媒体处理、服务端任务编排和外部语音及推理能力串成可恢复、可观察的回放处理链路。',
    tech: ['React 19', 'FFmpeg.wasm', 'WORKERFS', 'FastAPI', 'SQLAlchemy', 'Groq Whisper', 'DeepSeek', 'SSE'],
    link: null,
    detail: {
      overview: '围绕视频、AI 找精彩片段、输出短视频切片搭建端到端处理链路，自动筛选精彩片段、生成标题文案并完成批量导出。',
      role: '负责浏览器侧音频预处理、服务端任务队列、可观测 Pipeline、长音频时间轴、LLM 分批分析、浏览器批量导出和数据回流。',
      business: '服务直播带货复盘与短视频二次分发，减少剪辑师人工筛选和粗剪工作量，并将 ASR 转写结果回流数据中台。',
      highlights: [
        '浏览器侧 React 19 + FFmpeg.wasm，服务端 FastAPI + SQLAlchemy 2.0，外部 AI 能力由 Groq Whisper + DeepSeek 提供',
        'FFmpeg.wasm 通过 WORKERFS 零拷贝挂载源文件，转为 16kHz / 单声道 / 64kbps MP3，使 2.5GB 视频上传前压缩至约 30MB',
        'PostgreSQL 承载轻量任务队列，API 写入 pending 后秒回，Task Runner 按节奏抢占任务并串行推进 Pipeline',
        '服务启动时自动将进行中任务重置为 pending，在零云依赖条件下实现崩溃可恢复',
        '音频准备、ASR、LLM 分析、切片、入库全部进度统一落库，SSE 每秒读取并推送，支持断线续传与多端一致',
        '长音频按 25 分钟无损分段并串行转录，时间戳叠加 offset 复原绝对时间轴',
        'LLM 分析按约 6000 token 分批，并用双向重叠去重处理边界，支撑 6 小时视频不触发上下文溢出',
        '浏览器侧再次调用 FFmpeg.wasm，依据 AI 时间段批量裁切并打包 ZIP，后端避开重型转码',
      ],
      techDetail: '核心技术包括 React 19、FFmpeg.wasm、WORKERFS、FastAPI、SQLAlchemy 2.0、PostgreSQL 任务队列、Groq Whisper、DeepSeek、SSE、ffmpeg 时间轴处理、浏览器端 ZIP 打包和 ASR 回流数据中台。',
    },
  },
];

export type Locale = 'en' | 'ko';

export type ConsolePage = {
  group: 'Home' | 'Work' | 'Operate' | 'Setup';
  groupLabel: string;
  name: string;
  path: string;
  body: string;
};

export type ComparisonRow = {
  dimension: string;
  openclaw: string;
  hermes: string;
  tars: string;
};

export type Feature = { tag: string; title: string; body: string };

export type InstallMethod = {
  id: 'brew' | 'curl' | 'source';
  label: string;
  note: string;
  code: string;
};

export type RunMode = {
  id: 'foreground' | 'service';
  label: string;
  note: string;
  code: string;
};

export type Translation = {
  locale: Locale;
  altPath: string;
  altLabel: string;
  pageTitle: string;
  metaDescription: string;

  nav: { console: string; features: string; compare: string; quickstart: string; github: string; star: string };

  hero: {
    label: string;
    headlineA: string;
    headlinePre: string;
    headlineHighlight: string;
    headlineB: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    pills: string[];
  };

  intro: {
    label: string;
    heading: string;
    paragraphs: string[];
  };

  console: {
    label: string;
    heading: string;
    sub: string;
    plus: string;
    pages: ConsolePage[];
  };

  features: {
    label: string;
    heading: string;
    sub: string;
    items: Feature[];
  };

  comparison: {
    label: string;
    heading: string;
    sub: string;
    headers: { dimension: string; openclaw: string; hermes: string; tars: string };
    rows: ComparisonRow[];
    footnote: string;
  };

  architecture: {
    label: string;
    heading: string;
    body: string;
  };

  quickstart: {
    label: string;
    heading: string;
    sub: string;
    installLabel: string;
    methods: InstallMethod[];
    initLabel: string;
    initTitle: string;
    runLabel: string;
    runTitle: string;
    runModes: RunMode[];
    fullGuide: string;
    browseSkills: string;
  };

  footer: {
    tagline: string;
    cols: { project: string; extend: string; operator: string };
    links: {
      project: { label: string; href: string }[];
      extend: { label: string; href: string }[];
      operator: { label: string; href: string }[];
    };
    legal: string;
  };
};

const sharedComparison = (dimensionVals: { dimension: string; openclaw: string; hermes: string; tars: string }[]): ComparisonRow[] =>
  dimensionVals;

export const en: Translation = {
  locale: 'en',
  altPath: '/ko',
  altLabel: '한국어',
  pageTitle: 'TARS — A local AI agent with a console worth opening',
  metaDescription:
    'TARS — a local AI agent with a console worth opening. A single Go binary that runs on your machine, with a full browser console for chat, sub-agents, memory review, scheduled jobs, and a watchdog.',

  nav: { console: 'Console', features: 'Features', compare: 'Compare', quickstart: 'Quickstart', github: 'GitHub', star: 'Star' },

  hero: {
    label: '// runtime + console, on your machine',
    headlineA: 'A local AI agent —',
    headlinePre: 'with a ',
    headlineHighlight: 'console worth opening',
    headlineB: '.',
    sub: 'TARS runs as a single Go binary on your machine and opens a full browser console — chat with dockable Git Inspector, agent runtime flow graphs, message-level session forks, memory inbox review, scheduled jobs, and a background watchdog. Everything that matters has a UI.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'View on GitHub',
    pills: ['Single binary', 'Local-first', 'Anthropic · OpenAI · Gemini · Claude Code CLI', 'MIT licensed']
  },

  intro: {
    label: '// what is tars',
    heading: 'Built to work beside a\nhuman operator.',
    paragraphs: [
      'The name is an homage to TARS from <em>Interstellar</em> — practical, direct, built to work under pressure. TARS borrows that name as a north star for the kind of local agent runtime it wants to be.',
      'Most agent frameworks live in the cloud, or ship as a thin CLI with maybe an HTTP API bolted on. TARS lives on your machine, owns its own memory, and treats the browser console as a first-class surface — not an afterthought. Every operating concern (chat, sub-agents, scheduling, memory review, approvals, analytics) has a real page.',
      'Extension is intentionally lean: skills (Markdown + companion CLI) load only when invoked — not every chat turn. Plugins and MCP servers are gated, so the system prompt stays small and the agent stays focused.'
    ]
  },

  console: {
    label: '// inside the console',
    heading: "The console isn't a viewer.\nIt's the cockpit.",
    sub: 'Most local agent tools ship a CLI and call it done. TARS treats the browser console as a first-class surface — every page is a working tool, not a status read-out. Open <code class="font-mono text-[var(--color-amber-soft)]">127.0.0.1:43180/console</code> and these are some of the rooms you walk into:',
    plus: 'Plus pages for Plans, System Prompt, Cron, Logs, Pulse, Reflection, and Settings — sidebar grouped under Home / Work / Operate / Setup.',
    pages: [
      {
        group: 'Home',
        groupLabel: '/home',
        name: 'Mission Control',
        path: '/console',
        body: 'Pulse, Reflection, plans, runtime runs, cron jobs, disk pressure, sessions, recommended setup actions — all on one screen.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Chat',
        path: '/console/chat',
        body: 'Dockable panels: Sessions, Tasks, Health, Git Inspector, Skill Inbox, Cron, Prior Context. Message-level session forks. First-turn tier recommendation.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Lineage',
        path: '/console/sessions/graph',
        body: 'Git-log–style tree of root and forked sessions. Fork point previews. Promote fork insights into Memory Inbox without mutating the parent.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Memory',
        path: '/console/memory',
        body: 'Review-before-store inbox for reflection candidates. Edit stored knowledge inline. Compare Tool path vs Prefetch path recall.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Agent Runtime',
        path: '/console/agentruntime',
        body: 'List, tree, Gantt, and interactive Flow graph views. Replay scrubber, cost flow, file attention, git diff timeline, checkpoint restart.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Approvals',
        path: '/console/approvals',
        body: 'Risky cleanup plans and approved Git mutations gated before TARS applies them. Automation Audit log keeps every decision reviewable.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Analytics',
        path: '/console/analytics',
        body: 'Usage totals, daily token bars, model cost rows, tool/skill call counts. UTC day-bounded daily budget chip in the header.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Extensions',
        path: '/console/extensions',
        body: 'Skill Creator and MCP Server Creator with sandbox tests. Hub installs surface trust signals (score, last update, passing tests, install count).'
      }
    ]
  },

  features: {
    label: '// runtime features',
    heading: 'Behind the console,\na careful runtime.',
    sub: 'TARS draws a hard line at what should be in the binary versus what should be a skill. The runtime stays small; the rest is opt-in.',
    items: [
      {
        tag: 'agent_runtime',
        title: 'Sub-Agent Orchestration',
        body: 'Spawn read-only agents for research and planning. Per-task tier routing, allowlist policy, depth control. Parallel and compare modes.'
      },
      {
        tag: 'memory',
        title: 'Durable Memory',
        body: 'Markdown memory with semantic search via Gemini embeddings. Daily logs, reviewed experiences, nightly reflection — all auditable on disk.'
      },
      {
        tag: 'pulse',
        title: 'Pulse Watchdog',
        body: 'Runs every minute. Catches cron failures, stuck runs, disk pressure, telegram errors — escalates to a narrow LLM decision call only when needed.'
      },
      {
        tag: 'reflection',
        title: 'Nightly Reflection',
        body: 'Between 02:00–05:00 TARS extracts experiences from sessions, prunes empty ones, and grows the memory store. Deterministic Go, no LLM tool surface.'
      },
      {
        tag: 'cron',
        title: 'Scheduled Jobs',
        body: 'Tick-based scheduler at 30s resolution. Cron expressions plus @at one-time triggers. Per-job audit history, capped to keep state lean.'
      },
      {
        tag: 'llm_router',
        title: '3-Tier LLM Router',
        body: 'Heavy / standard / light tiers map to provider+model bundles. Roles bind to tiers, credentials live at provider level, env-var JSON overrides.'
      },
      {
        tag: 'extensions',
        title: 'Skills, Plugins, MCP',
        body: 'Skills are Markdown + companion CLI — only loaded when invoked, so the system prompt stays small. Plugins gated; MCP fully supported as a client.'
      },
      {
        tag: 'channels',
        title: 'Multi-Channel I/O',
        body: 'Beyond the console: Telegram bidirectional messaging, inbound webhooks, macOS Assistant popup, and a local API for scripts.'
      }
    ]
  },

  comparison: {
    label: '// vs others',
    heading: 'How TARS differs.',
    sub: 'Two excellent local agent projects in this space — <a href="https://openclaw.ai" target="_blank" rel="noopener" class="underline hover:text-[var(--color-text-primary)]">OpenClaw</a> and <a href="https://hermes-agent.nousresearch.com" target="_blank" rel="noopener" class="underline hover:text-[var(--color-text-primary)]">Hermes Agent</a>. Each has its own focus. Here\'s where TARS draws different lines.',
    headers: { dimension: 'Dimension', openclaw: 'OpenClaw', hermes: 'Hermes Agent', tars: 'TARS' },
    rows: sharedComparison([
      { dimension: 'Language', openclaw: 'TypeScript', hermes: 'Python', tars: 'Go (single binary)' },
      { dimension: 'Primary UI', openclaw: 'CLI', hermes: 'CLI + API', tars: 'Browser console (CLI/Telegram/webhooks too)' },
      {
        dimension: 'Sub-agents',
        openclaw: 'ACP + subagent runtimes, Docker sandbox',
        hermes: 'ThreadPoolExecutor (max 3), ephemeral prompt',
        tars: 'Per-task model tier, allowlist policy, depth control'
      },
      {
        dimension: 'Model routing',
        openclaw: 'Per-agent model override',
        hermes: 'Per-child override, MoA (4 frontier models)',
        tars: '3-tier bundles (heavy/standard/light), role→tier mapping'
      },
      {
        dimension: 'Memory',
        openclaw: 'Session transcripts',
        hermes: 'Honcho/Holographic plugin hooks',
        tars: 'Markdown + semantic + review-before-store + nightly reflection'
      },
      { dimension: 'Background', openclaw: '—', hermes: '—', tars: 'Pulse watchdog (1-min) + nightly reflection batch' },
      { dimension: 'Scheduling', openclaw: '—', hermes: '—', tars: 'Session-bound cron + audit logs' },
      {
        dimension: 'Extensibility',
        openclaw: 'Built-in tools',
        hermes: 'Toolsets',
        tars: 'Skills + companion CLIs + gated plugins/MCP'
      }
    ]),
    footnote: 'Comparison is from the TARS perspective and intentionally simplified. Read the source for each project to form your own view.'
  },

  architecture: {
    label: '// architecture',
    heading: 'One binary,\ntwo registries.',
    body: 'TARS isolates the chat tool surface from system internals. The user-facing registry can never call <code class="font-mono text-[var(--color-amber-soft)]">ops_</code>, <code class="font-mono text-[var(--color-amber-soft)]">pulse_</code>, or <code class="font-mono text-[var(--color-amber-soft)]">reflection_</code> tools — those are reserved for the runtime itself. Pulse uses narrow Go interfaces and only one LLM call. Reflection is fully deterministic.'
  },

  quickstart: {
    label: '// quickstart',
    heading: 'Three steps to a running agent.',
    sub: 'On first launch, the wizard walks you through provider and tier configuration. The console boots in setup-only mode until an LLM is configured.',
    installLabel: 'Install',
    methods: [
      {
        id: 'brew',
        label: 'Homebrew',
        note: 'macOS / Linux — pre-built binary with console',
        code: 'brew tap devlikebear/tap\nbrew install devlikebear/tap/tars'
      },
      {
        id: 'curl',
        label: 'curl',
        note: 'Linux / macOS one-liner — pre-built binary with console',
        code: 'curl -fsSL https://raw.githubusercontent.com/devlikebear/tars/main/install.sh | sh'
      },
      {
        id: 'source',
        label: 'From source',
        note: 'For development. Requires Go 1.25+ and Node 20+',
        code: 'git clone https://github.com/devlikebear/tars.git\ncd tars\nmake build'
      }
    ],
    initLabel: '02',
    initTitle: 'Initialize workspace',
    runLabel: '03',
    runTitle: 'Start the server',
    runModes: [
      {
        id: 'foreground',
        label: 'Foreground',
        note: 'Runs in the terminal until Ctrl+C.',
        code: 'tars serve\n# console at http://127.0.0.1:43180/console'
      },
      {
        id: 'service',
        label: 'Service (macOS)',
        note: 'Installs as a launchd LaunchAgent. Auto-starts on login.',
        code: 'tars service install\ntars service start\n# tars service status — check\n# tars service stop    — stop'
      }
    ],
    fullGuide: 'Full quickstart guide →',
    browseSkills: 'Browse skills →'
  },

  footer: {
    tagline: 'A self-hosted AI agent runtime. Practical, direct, built to work beside a human operator.',
    cols: { project: 'Project', extend: 'Extend', operator: 'Operator' },
    links: {
      project: [
        { label: 'GitHub', href: 'https://github.com/devlikebear/tars' },
        { label: 'Issues', href: 'https://github.com/devlikebear/tars/issues' },
        { label: 'Releases', href: 'https://github.com/devlikebear/tars/releases' }
      ],
      extend: [
        { label: 'Skills', href: 'https://github.com/devlikebear/tars-skills' },
        { label: 'MCP servers', href: 'https://github.com/devlikebear/tars#mcp-servers' }
      ],
      operator: [
        { label: 'marvin-42.com', href: 'https://marvin-42.com' },
        { label: 'insights.marvin-42.com', href: 'https://insights.marvin-42.com' }
      ]
    },
    legal: 'MIT License · An homage to TARS from <em>Interstellar</em>; not affiliated with the film.'
  }
};

export const ko: Translation = {
  locale: 'ko',
  altPath: '/',
  altLabel: 'English',
  pageTitle: 'TARS — 열어볼 만한 콘솔을 가진 로컬 AI 에이전트',
  metaDescription:
    'TARS — 열어볼 만한 콘솔을 가진 로컬 AI 에이전트. 단일 Go 바이너리가 내 머신에서 실행되며, 채팅·서브에이전트·메모리 리뷰·스케줄 작업·와치독을 풀 브라우저 콘솔에서 다룹니다.',

  nav: { console: '콘솔', features: '기능', compare: '비교', quickstart: '빠른 시작', github: 'GitHub', star: 'Star' },

  hero: {
    label: '// 런타임 + 콘솔, 내 머신 안에서',
    headlineA: '로컬 AI 에이전트 —',
    headlinePre: '',
    headlineHighlight: '열어볼 만한 콘솔',
    headlineB: '과 함께.',
    sub: 'TARS는 단일 Go 바이너리로 머신에서 실행되며, 풀 브라우저 콘솔을 메인 인터페이스로 엽니다 — 도크 가능한 Git Inspector, 에이전트 런타임 플로우 그래프, 메시지 단위 세션 포크, 메모리 인박스 리뷰, 스케줄 작업, 백그라운드 와치독. 정말 중요한 모든 것에는 UI가 있습니다.',
    ctaPrimary: '시작하기',
    ctaSecondary: 'GitHub에서 보기',
    pills: ['단일 바이너리', '로컬 우선', 'Anthropic · OpenAI · Gemini · Claude Code CLI', 'MIT 라이선스']
  },

  intro: {
    label: '// TARS란',
    heading: '인간 운영자 옆에서<br/>일하도록 만들어졌습니다.',
    paragraphs: [
      '이름은 <em>인터스텔라</em>의 TARS에서 따왔습니다 — 실용적이고 직설적이며 압박 속에서도 작동하는. TARS는 그 이름을 일종의 북극성 삼아, 그런 종류의 로컬 에이전트 런타임이 되고자 합니다.',
      '대부분의 에이전트 프레임워크는 클라우드에 살거나, 얇은 CLI에 HTTP API를 붙이는 정도입니다. TARS는 내 머신에서 살고, 자기 메모리를 직접 소유하며, 브라우저 콘솔을 일등 시민으로 다룹니다 — 곁다리가 아니라요. 채팅, 서브에이전트, 스케줄링, 메모리 리뷰, 승인, 분석 — 운영하는 모든 일에 진짜 페이지가 있습니다.',
      '확장은 의도적으로 가볍습니다: 스킬(Markdown + 동반 CLI)은 호출될 때만 로드되어 시스템 프롬프트를 부풀리지 않습니다. 플러그인과 MCP 서버는 게이팅되어, 시스템 프롬프트는 작게, 에이전트는 집중된 상태로 유지됩니다.'
    ]
  },

  console: {
    label: '// 콘솔 안',
    heading: '콘솔은 뷰어가 아닙니다.\n조종석입니다.',
    sub: '대부분의 로컬 에이전트 도구는 CLI 하나로 끝냅니다. TARS는 브라우저 콘솔을 일등 시민으로 다룹니다 — 모든 페이지가 상태 표시판이 아니라 작동하는 도구입니다. <code class="font-mono text-[var(--color-amber-soft)]">127.0.0.1:43180/console</code>을 열면 만나는 방들입니다:',
    plus: '이 외에도 Plans, System Prompt, Cron, Logs, Pulse, Reflection, Settings 페이지가 있고, 사이드바는 Home / Work / Operate / Setup으로 그룹화됩니다.',
    pages: [
      {
        group: 'Home',
        groupLabel: '/home',
        name: 'Mission Control',
        path: '/console',
        body: 'Pulse, Reflection, 플랜, 런타임 실행, Cron 잡, 디스크 압력, 세션, 권장 설정 액션 — 한 화면에 모두.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Chat',
        path: '/console/chat',
        body: '도크 가능한 패널: Sessions, Tasks, Health, Git Inspector, Skill Inbox, Cron, Prior Context. 메시지 단위 세션 포크. 첫 턴 티어 추천.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Lineage',
        path: '/console/sessions/graph',
        body: 'git-log 스타일의 루트/포크 세션 트리. 포크 지점 미리보기. 부모 트랜스크립트를 건드리지 않고 포크 인사이트를 Memory Inbox로 승격.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Memory',
        path: '/console/memory',
        body: 'Reflection 후보를 저장 전 검토하는 인박스. 저장된 지식을 인라인으로 편집. Tool path와 Prefetch path 리콜을 비교.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Agent Runtime',
        path: '/console/agentruntime',
        body: '리스트 / 트리 / Gantt / 인터랙티브 Flow 그래프 뷰. Replay 스크러버, 비용 플로우, 파일 어텐션, git diff 타임라인, 체크포인트 재시작.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Approvals',
        path: '/console/approvals',
        body: '위험한 클린업 플랜과 승인 대기 git 변경을 적용 전 검토. Automation Audit 로그가 모든 결정을 리뷰 가능하게 보관.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Analytics',
        path: '/console/analytics',
        body: '사용량 합계, 일일 토큰 막대, 모델 비용 행, 도구/스킬 호출 횟수. 헤더의 UTC 일일 예산 칩.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Extensions',
        path: '/console/extensions',
        body: '샌드박스 테스트를 갖춘 Skill Creator와 MCP Server Creator. 허브 설치 시 신뢰 시그널(점수, 마지막 업데이트, 통과 테스트, 설치 수)이 표시됩니다.'
      }
    ]
  },

  features: {
    label: '// 런타임 기능',
    heading: '콘솔 뒤에는,\n신중한 런타임이.',
    sub: 'TARS는 바이너리에 들어가야 할 것과 스킬로 빠져야 할 것 사이에 분명한 선을 긋습니다. 런타임은 작게, 나머지는 옵트인.',
    items: [
      {
        tag: 'agent_runtime',
        title: '서브에이전트 오케스트레이션',
        body: '리서치/플래닝용 읽기 전용 에이전트 스폰. 작업별 티어 라우팅, 허용 정책, 깊이 제어. 병렬·비교 모드.'
      },
      {
        tag: 'memory',
        title: '영속 메모리',
        body: 'Gemini 임베딩으로 시맨틱 검색하는 Markdown 메모리. 일일 로그, 검토된 경험, 야간 리플렉션 — 모두 디스크에서 감사 가능.'
      },
      {
        tag: 'pulse',
        title: 'Pulse 와치독',
        body: '1분마다 실행. cron 실패, 멈춘 실행, 디스크 압력, 텔레그램 오류를 감지 — 필요한 경우에만 좁은 LLM 결정 호출로 에스컬레이션.'
      },
      {
        tag: 'reflection',
        title: '야간 Reflection',
        body: '02:00–05:00 사이에 세션에서 경험을 추출하고 빈 세션을 정리하며 메모리를 키웁니다. 결정론적 Go, LLM 도구 표면 없음.'
      },
      {
        tag: 'cron',
        title: '스케줄 작업',
        body: '30초 해상도 틱 기반 스케줄러. cron 표현식과 @at 일회성 트리거. 잡당 감사 히스토리, 상태를 가볍게 유지하는 캡 포함.'
      },
      {
        tag: 'llm_router',
        title: '3-Tier LLM 라우터',
        body: 'Heavy / standard / light 티어가 프로바이더+모델 번들로 매핑. 역할은 티어에 바인딩, 자격증명은 프로바이더 레벨, env JSON 오버라이드 지원.'
      },
      {
        tag: 'extensions',
        title: 'Skills, Plugins, MCP',
        body: '스킬은 Markdown + 동반 CLI — 호출될 때만 로드되어 시스템 프롬프트가 작게 유지됩니다. Plugins은 게이팅, MCP는 클라이언트로 완전 지원.'
      },
      {
        tag: 'channels',
        title: '멀티 채널 I/O',
        body: '콘솔 외에도: Telegram 양방향 메시징, 인바운드 웹훅, macOS Assistant 팝업, 스크립트용 로컬 API.'
      }
    ]
  },

  comparison: {
    label: '// 다른 도구와의 비교',
    heading: 'TARS는 어떻게 다른가.',
    sub: '이 영역의 훌륭한 다른 두 프로젝트 — <a href="https://openclaw.ai" target="_blank" rel="noopener" class="underline hover:text-[var(--color-text-primary)]">OpenClaw</a>와 <a href="https://hermes-agent.nousresearch.com" target="_blank" rel="noopener" class="underline hover:text-[var(--color-text-primary)]">Hermes Agent</a>. 각각의 초점이 있습니다. TARS는 어디서 다르게 선을 긋는지 정리했습니다.',
    headers: { dimension: '항목', openclaw: 'OpenClaw', hermes: 'Hermes Agent', tars: 'TARS' },
    rows: sharedComparison([
      { dimension: '언어', openclaw: 'TypeScript', hermes: 'Python', tars: 'Go (단일 바이너리)' },
      { dimension: '주 인터페이스', openclaw: 'CLI', hermes: 'CLI + API', tars: '브라우저 콘솔 (CLI/Telegram/웹훅 포함)' },
      {
        dimension: '서브에이전트',
        openclaw: 'ACP + 서브에이전트 런타임, Docker 샌드박스',
        hermes: 'ThreadPoolExecutor (max 3), 단발 프롬프트',
        tars: '작업별 모델 티어, 허용 정책, 깊이 제어'
      },
      {
        dimension: '모델 라우팅',
        openclaw: '에이전트별 모델 오버라이드',
        hermes: '자식별 오버라이드, MoA (4개 프론티어 모델)',
        tars: '3-티어 번들 (heavy/standard/light), role→tier 매핑'
      },
      {
        dimension: '메모리',
        openclaw: '세션 트랜스크립트',
        hermes: 'Honcho/Holographic 플러그인 훅',
        tars: 'Markdown + 시맨틱 + 저장 전 리뷰 + 야간 reflection'
      },
      { dimension: '백그라운드', openclaw: '—', hermes: '—', tars: 'Pulse 와치독 (1분) + 야간 reflection 배치' },
      { dimension: '스케줄링', openclaw: '—', hermes: '—', tars: '세션 바운드 cron + 감사 로그' },
      {
        dimension: '확장성',
        openclaw: '빌트인 도구',
        hermes: '툴셋',
        tars: 'Skills + 동반 CLI + 게이팅된 plugins/MCP'
      }
    ]),
    footnote: '이 비교는 TARS 관점에서 의도적으로 단순화한 것입니다. 각 프로젝트의 소스를 직접 보고 본인의 관점을 만드세요.'
  },

  architecture: {
    label: '// 아키텍처',
    heading: '한 바이너리,\n두 레지스트리.',
    body: 'TARS는 채팅 도구 표면을 시스템 내부로부터 격리합니다. 사용자 페이싱 레지스트리는 절대 <code class="font-mono text-[var(--color-amber-soft)]">ops_</code>, <code class="font-mono text-[var(--color-amber-soft)]">pulse_</code>, <code class="font-mono text-[var(--color-amber-soft)]">reflection_</code> 도구를 호출할 수 없습니다 — 그것들은 런타임 자체를 위해 예약되어 있습니다. Pulse는 좁은 Go 인터페이스만 사용하며 LLM 호출은 단 한 번. Reflection은 완전히 결정론적입니다.'
  },

  quickstart: {
    label: '// 빠른 시작',
    heading: '세 단계로 에이전트 가동.',
    sub: '첫 실행 시, 마법사가 프로바이더와 티어 설정을 안내합니다. LLM이 설정되기 전까지 콘솔은 setup-only 모드로 부팅됩니다.',
    installLabel: '설치',
    methods: [
      {
        id: 'brew',
        label: 'Homebrew',
        note: 'macOS / Linux — 콘솔 포함된 사전 빌드 바이너리',
        code: 'brew tap devlikebear/tap\nbrew install devlikebear/tap/tars'
      },
      {
        id: 'curl',
        label: 'curl',
        note: 'Linux / macOS 한 줄 — 콘솔 포함된 사전 빌드 바이너리',
        code: 'curl -fsSL https://raw.githubusercontent.com/devlikebear/tars/main/install.sh | sh'
      },
      {
        id: 'source',
        label: '소스에서',
        note: '개발용. Go 1.25+ 와 Node 20+ 필요',
        code: 'git clone https://github.com/devlikebear/tars.git\ncd tars\nmake build'
      }
    ],
    initLabel: '02',
    initTitle: '워크스페이스 초기화',
    runLabel: '03',
    runTitle: '서버 시작',
    runModes: [
      {
        id: 'foreground',
        label: 'Foreground',
        note: 'Ctrl+C 누를 때까지 터미널에서 실행됩니다.',
        code: 'tars serve\n# console at http://127.0.0.1:43180/console'
      },
      {
        id: 'service',
        label: 'Service (macOS)',
        note: 'launchd LaunchAgent로 설치. 로그인 시 자동 시작.',
        code: 'tars service install\ntars service start\n# tars service status — 상태 확인\n# tars service stop    — 중지'
      }
    ],
    fullGuide: '전체 빠른 시작 가이드 →',
    browseSkills: '스킬 둘러보기 →'
  },

  footer: {
    tagline: '자체 호스팅 AI 에이전트 런타임. 실용적이고, 직설적이며, 인간 운영자 옆에서 일하도록 만들어졌습니다.',
    cols: { project: '프로젝트', extend: '확장', operator: '운영자' },
    links: {
      project: [
        { label: 'GitHub', href: 'https://github.com/devlikebear/tars' },
        { label: 'Issues', href: 'https://github.com/devlikebear/tars/issues' },
        { label: 'Releases', href: 'https://github.com/devlikebear/tars/releases' }
      ],
      extend: [
        { label: 'Skills', href: 'https://github.com/devlikebear/tars-skills' },
        { label: 'MCP 서버', href: 'https://github.com/devlikebear/tars#mcp-servers' }
      ],
      operator: [
        { label: 'marvin-42.com', href: 'https://marvin-42.com' },
        { label: 'insights.marvin-42.com', href: 'https://insights.marvin-42.com' }
      ]
    },
    legal: 'MIT 라이선스 · <em>인터스텔라</em>의 TARS에 대한 오마주이며, 영화와 무관합니다.'
  }
};

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
    headlineParts: Array<{ text: string; highlight?: boolean; nl?: boolean }>;
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
    pwa: {
      label: string;
      title: string;
      body: string;
      bullets: string[];
      cta: { label: string; href: string };
    };
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
  pageTitle: 'TARS — A local AI agent that runs on your machine, under your control',
  metaDescription:
    'TARS is a local AI agent runtime that runs as a single Go binary on your machine. From the browser console you can directly inspect and control its work — agent runs, memory, scheduled jobs, Git changes, execution history.',

  nav: { console: 'Console', features: 'Features', compare: 'Compare', quickstart: 'Quickstart', github: 'GitHub', star: 'Star' },

  hero: {
    label: '// local AI agent runtime',
    headlineParts: [
      { text: 'A local AI agent —', nl: true },
      { text: 'runs on your machine,', nl: true },
      { text: 'under your control', highlight: true }
    ],
    sub: 'TARS is a local AI agent runtime that runs as a single Go binary on your machine. From the browser console you can directly inspect and control its work — agent runs, memory, scheduled jobs, Git changes, execution history.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'View on GitHub',
    pills: ['Single binary', 'Local-first', 'Anthropic · OpenAI · Gemini · Claude Code CLI', 'MIT licensed']
  },

  intro: {
    label: '// what is tars',
    heading: 'An AI agent\nthat works on your machine',
    paragraphs: [
      'The name comes from the TARS in <em>Interstellar</em> — practical, direct, dependable when things get complicated. TARS aims for that.',
      "Not an agent running somewhere in the cloud you can't see, but a local AI agent that runs on your machine and can be inspected and controlled directly. Most AI agent tools are CLI-first, or add a thin web UI on top. TARS is designed around the browser console: chat, sub-agents, scheduled jobs, memory review, Git changes, run flow, and pending approvals each get their own page.",
      "Since the agent works with your files and tools, you should be able to see what it's doing and step in when needed — that's the starting premise. Extensions stay lean: skills load only when invoked; plugins and MCP servers are used only when explicitly allowed. The system prompt stays small, and the agent stays focused on the current task."
    ]
  },

  console: {
    label: '// the console',
    heading: 'Where you watch\nthe agent work',
    sub: 'Many local agent tools end at a CLI. TARS uses the browser console as its main interface. Open <code class="font-mono text-[var(--color-amber-soft)]">127.0.0.1:43180/console</code> and you get screens that actually let you inspect and control the agent — not just status pages.',
    plus: 'Plus pages for Plans, System Prompt, Cron, Logs, Pulse, Reflection, and Settings — sidebar grouped under Home / Work / Operate / Setup.',
    pages: [
      {
        group: 'Home',
        groupLabel: '/home',
        name: 'Mission Control',
        path: '/console',
        body: 'Pulse, Reflection, plans, runtime runs, cron jobs, disk pressure, sessions, recommended setup actions — all on one screen. See agent state and ongoing work at a glance.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Chat',
        path: '/console/chat',
        body: 'Dock the panels you need: Sessions, Tasks, Health, Git Inspector, Skill Inbox, Cron, Prior Context. Branch sessions at a specific message. First-turn tier recommendation for the model that fits.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Lineage',
        path: '/console/sessions/graph',
        body: 'Conversation and work flow as a Git-log-style tree. Preview the message where each session branched. Promote insights from a branch into Memory Inbox without touching the parent.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Memory',
        path: '/console/memory',
        body: 'Review what the agent wants to save as long-term memory before it is stored. Edit stored knowledge as Markdown. Compare Tool path vs Prefetch path recall.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Agent Runtime',
        path: '/console/agentruntime',
        body: 'List, tree, Gantt, and interactive Flow graph views. Replay scrubber, cost flow, file attention, Git diff timeline, checkpoint restart.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Approvals',
        path: '/console/approvals',
        body: 'Review risky cleanup plans and Git changes before they apply. Approve or reject pending work. The Automation Audit log keeps every decision reviewable.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Analytics',
        path: '/console/analytics',
        body: 'Token use, cost per model, tool and skill call counts. Daily usage and cost flow. Daily budget chip in the header.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Extensions',
        path: '/console/extensions',
        body: 'Build and sandbox-test extensions with Skill Creator and MCP Server Creator. Hub installs surface trust signals: score, last update, passing tests, install count. A hub-source dropdown federates the catalog across tars-hub, openclaw, hermes, and Anthropic skills, and external installs open a dry-run modal showing the converted frontmatter, per-file sha256, adapter warnings, and ATTRIBUTION notice before any file is written.'
      }
    ],
    pwa: {
      label: '// install as an app',
      title: 'Run the console as a desktop app',
      body: 'The browser console ships as an installable PWA. Add it to your Dock, taskbar, or launcher and open it in its own window — same surface as the browser, with deep-link shortcuts and an at-a-glance status pill in the topbar.',
      bullets: [
        'Chrome / Edge / Brave / Arc: address bar install button',
        'Safari 14+: File → Add to Dock',
        'Right-click the Dock icon: Chat / Sessions / Ops / Pulse / Reflection shortcuts',
        'Topbar status pill: server · pulse · reflection · active sessions in one glance'
      ],
      cta: { label: 'Install guide →', href: 'https://github.com/devlikebear/tars/blob/main/docs/console-install.md' }
    }
  },

  features: {
    label: '// runtime features',
    heading: 'Core stays small\nThe rest is opt-in',
    sub: "TARS doesn't push every feature into the system prompt at once. The base runtime stays small; the rest goes into skills and plugins.",
    items: [
      {
        tag: 'agent_runtime',
        title: 'Sub-Agent Orchestration',
        body: 'Spawn read-only sub-agents for research and planning. Per-task model tier routing, allowlist policy, depth control. Parallel and compare modes.'
      },
      {
        tag: 'memory',
        title: 'Durable Memory',
        body: 'Markdown memory with semantic search via Gemini embeddings. Daily logs, reviewed experiences, nightly Reflection — stored on disk and auditable. Review-before-store lets you decide what gets remembered.'
      },
      {
        tag: 'pulse',
        title: 'Pulse Watchdog',
        body: 'A periodic loop that checks runtime health. Detects cron failures, stuck runs, disk pressure, Telegram errors. Calls a narrow LLM only when needed.'
      },
      {
        tag: 'reflection',
        title: 'Nightly Reflection',
        body: 'Extracts experiences and memory candidates from sessions overnight. Cleans up empty sessions, refreshes memory candidates. Runs as deterministic Go without exposing LLM tools.'
      },
      {
        tag: 'cron',
        title: 'Scheduled Jobs',
        body: '30-second tick scheduler. Cron expressions and @at one-time triggers. Per-job audit history with state caps.'
      },
      {
        tag: 'llm_router',
        title: '3-Tier LLM Router',
        body: 'Three tiers — Heavy, Standard, Light. Roles bind to tiers; providers and models are managed in config. Pick lighter or stronger models depending on what the work needs.'
      },
      {
        tag: 'extensions',
        title: 'Skills, Plugins, MCP',
        body: 'Skills are Markdown plus a runnable CLI — loaded only when invoked, so the system prompt stays small. Plugins are gated; MCP is supported as a client. Skill installs federate across tars-hub plus external MIT-compatible hubs (openclaw, hermes, Anthropic skills): every external install previews first, generates an ATTRIBUTION.md from the upstream license, and blocks source-available content.'
      },
      {
        tag: 'channels',
        title: 'Multi-Channel I/O',
        body: 'Beyond the browser console: Telegram bidirectional messaging, inbound webhooks, macOS Assistant popup, and a local API for scripts.'
      }
    ]
  },

  comparison: {
    label: '// vs others',
    heading: 'Where TARS draws different lines',
    sub: 'Two strong projects already exist in this space — <a href="https://openclaw.ai" target="_blank" rel="noopener" class="underline hover:text-[var(--color-text-primary)]">OpenClaw</a> and <a href="https://hermes-agent.nousresearch.com" target="_blank" rel="noopener" class="underline hover:text-[var(--color-text-primary)]">Hermes Agent</a>. Each has its own focus. Here are the points TARS treats as important.',
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
    heading: 'One binary,\nseparated tool surfaces',
    body: "TARS runs as a single binary, but doesn't expose every tool the same way. The tools available in chat are kept separate from the tools used inside the runtime. The <code class=\"font-mono text-[var(--color-amber-soft)]\">ops_</code>, <code class=\"font-mono text-[var(--color-amber-soft)]\">pulse_</code>, and <code class=\"font-mono text-[var(--color-amber-soft)]\">reflection_</code> families can't be called directly from regular chat — they are reserved for runtime-internal operations. Pulse uses a narrow Go interface and only calls the LLM when needed; Reflection is deterministic."
  },

  quickstart: {
    label: '// quickstart',
    heading: 'Get started in three steps',
    sub: 'On first run, the setup wizard walks you through LLM provider and model tier configuration. Until an LLM is configured, the console runs in setup-only mode.',
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
    tagline: 'A local AI agent runtime that runs on your machine and stays under your control. Practical and transparent, built so the user can see and control the agent\'s work directly.',
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
  pageTitle: 'TARS — 내가 직접 다룰 수 있는 로컬 AI 에이전트',
  metaDescription:
    'TARS는 Go 기반 단일 바이너리로 실행되는 로컬 AI 에이전트 런타임입니다. 브라우저 콘솔에서 에이전트의 작업 흐름, 메모리, 스케줄 작업, Git 변경사항을 직접 확인하고 제어할 수 있습니다.',

  nav: { console: '콘솔', features: '기능', compare: '비교', quickstart: '빠른 시작', github: 'GitHub', star: 'Star' },

  hero: {
    label: '// 로컬 AI 에이전트 런타임',
    headlineParts: [
      { text: '내 컴퓨터에서 실행되고,', nl: true },
      { text: '내가 ' },
      { text: '직접 다룰 수 있는', highlight: true, nl: true },
      { text: '로컬 AI 에이전트' }
    ],
    sub: 'TARS는 Go 기반 단일 바이너리로 실행되는 로컬 AI 에이전트 런타임입니다. 브라우저 콘솔에서 에이전트의 작업 흐름, 메모리, 스케줄 작업, Git 변경사항, 실행 기록을 직접 확인하고 제어할 수 있습니다.',
    ctaPrimary: '시작하기',
    ctaSecondary: 'GitHub에서 보기',
    pills: ['단일 바이너리', '로컬 우선', 'Anthropic · OpenAI · Gemini · Claude Code CLI', 'MIT 라이선스']
  },

  intro: {
    label: '// TARS란',
    heading: '내 컴퓨터에서 함께 일하는\nAI 에이전트',
    paragraphs: [
      'TARS라는 이름은 영화 <em>인터스텔라</em>의 TARS에서 따왔습니다. 실용적이고 직설적이며, 복잡한 상황에서도 제 역할을 해내는 존재죠. TARS는 그런 방향을 지향합니다.',
      '클라우드 어딘가에서 돌아가는 알 수 없는 에이전트가 아니라, 내 컴퓨터에서 실행되고 내가 직접 보고 다룰 수 있는 로컬 AI 에이전트입니다. 대부분의 AI 에이전트 도구는 CLI 중심이거나 얇은 웹 UI를 덧붙인 형태인 반면, TARS는 브라우저 콘솔을 중심으로 설계되어 있습니다. 채팅, 서브에이전트, 스케줄 작업, 메모리 검토, Git 변경사항, 실행 흐름, 승인 대기 작업이 각각의 화면으로 분리되어 있습니다.',
      '에이전트가 내 파일과 도구를 다루는 만큼, 그 과정을 직접 확인하고 필요할 때 개입할 수 있어야 한다는 전제에서 출발했습니다. 확장 구조도 가볍게 유지합니다 — 스킬은 필요할 때만 로드되고, 플러그인과 MCP 서버는 명시적으로 허용된 경우에만 사용됩니다. 시스템 프롬프트는 작게 유지되고, 에이전트는 현재 작업에 집중할 수 있습니다.'
    ]
  },

  console: {
    label: '// 콘솔',
    heading: '에이전트가 일하는 과정을\n직접 확인하는 공간',
    sub: '많은 로컬 에이전트 도구는 CLI 하나로 끝납니다. TARS는 브라우저 콘솔을 중심 인터페이스로 사용합니다. <code class="font-mono text-[var(--color-amber-soft)]">127.0.0.1:43180/console</code>을 열면, 단순한 상태 페이지가 아니라 실제로 에이전트를 확인하고 제어할 수 있는 화면을 만나게 됩니다.',
    plus: '이 외에도 Plans, System Prompt, Cron, Logs, Pulse, Reflection, Settings 화면이 있고, 사이드바는 Home / Work / Operate / Setup으로 그룹화됩니다.',
    pages: [
      {
        group: 'Home',
        groupLabel: '/home',
        name: 'Mission Control',
        path: '/console',
        body: 'Pulse, Reflection, 플랜, 런타임 실행, Cron 작업, 디스크 상태, 세션, 권장 설정 작업을 한 화면에서 확인. 에이전트의 상태와 진행 중인 작업을 빠르게 파악할 수 있습니다.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Chat',
        path: '/console/chat',
        body: 'Sessions, Tasks, Health, Git Inspector, Skill Inbox, Cron, Prior Context 패널을 도크. 메시지 단위로 세션을 분기. 첫 턴에서는 작업에 맞는 모델 티어를 추천합니다.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Lineage',
        path: '/console/sessions/graph',
        body: '대화와 작업 흐름을 Git 로그처럼 트리 구조로 확인. 어느 메시지에서 분기했는지 미리보기. 부모 대화는 그대로 두고 분기 인사이트만 Memory Inbox로 승격.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Memory',
        path: '/console/memory',
        body: '에이전트가 장기 기억으로 저장하려는 내용을 저장 전 검토. Markdown으로 직접 편집. Tool path와 Prefetch path 리콜 결과를 비교해 어떤 정보가 참조되는지 확인.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Agent Runtime',
        path: '/console/agentruntime',
        body: '리스트, 트리, Gantt, 인터랙티브 Flow 그래프 4가지 뷰. Replay 스크러버, 비용 흐름, 파일 어텐션, Git diff 타임라인, 체크포인트 재시작.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Approvals',
        path: '/console/approvals',
        body: '위험한 정리 작업과 Git 변경을 적용 전 검토. 승인 대기 작업을 사용자가 결정. Automation Audit 로그가 모든 결정을 보관해 나중에 다시 확인할 수 있습니다.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Analytics',
        path: '/console/analytics',
        body: '토큰 사용량, 모델별 비용, 도구·스킬 호출 횟수. 일별 사용량과 비용 흐름. 헤더에는 일일 예산 칩.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Extensions',
        path: '/console/extensions',
        body: 'Skill Creator와 MCP Server Creator로 확장을 만들고 샌드박스 테스트. 허브 설치 시 점수, 마지막 업데이트, 테스트 통과 여부, 설치 수가 함께 표시됩니다. 허브 출처 드롭다운으로 tars-hub·openclaw·hermes·Anthropic skills를 한곳에서 검색하고, 외부 허브 설치는 변환된 frontmatter, 파일별 sha256, 어댑터 경고, ATTRIBUTION 안내를 보여주는 dry-run 모달을 거친 뒤에야 파일이 기록됩니다.'
      }
    ],
    pwa: {
      label: '// 앱처럼 설치',
      title: '콘솔을 데스크톱 앱으로 띄우기',
      body: '브라우저 콘솔은 설치 가능한 PWA로 제공됩니다. Dock·작업표시줄·런처에 추가하면 별도 창으로 열리고, 우클릭 메뉴로 주요 화면에 바로 진입하며, 상단 칩으로 서버 상태를 한눈에 확인할 수 있습니다.',
      bullets: [
        'Chrome / Edge / Brave / Arc: 주소창 설치 버튼',
        'Safari 14+: 파일 → Dock에 추가',
        'Dock 아이콘 우클릭: Chat / Sessions / Ops / Pulse / Reflection 바로가기',
        '상단 status pill: 서버 · pulse · reflection · 활성 세션을 한눈에'
      ],
      cta: { label: '설치 가이드 →', href: 'https://github.com/devlikebear/tars/blob/main/docs/console-install.md' }
    }
  },

  features: {
    label: '// 런타임 기능',
    heading: '핵심은 작게,\n필요한 기능은 선택적으로',
    sub: 'TARS는 모든 기능을 한꺼번에 시스템 프롬프트에 밀어 넣지 않습니다. 기본 런타임은 작게 유지하고, 나머지는 스킬과 플러그인으로 분리합니다.',
    items: [
      {
        tag: 'agent_runtime',
        title: '서브에이전트 오케스트레이션',
        body: '리서치/플래닝용 읽기 전용 서브에이전트 실행. 작업별 모델 티어 라우팅, 허용 정책, 깊이 제어. 병렬 실행과 비교 모드.'
      },
      {
        tag: 'memory',
        title: '영속 메모리',
        body: 'Gemini 임베딩 시맨틱 검색을 갖춘 Markdown 메모리. 일일 로그, 검토된 경험, 야간 Reflection을 디스크에 저장. 저장 전 검토를 거쳐 어떤 정보가 장기 기억으로 남을지 사용자가 결정합니다.'
      },
      {
        tag: 'pulse',
        title: 'Pulse 감시 루프',
        body: '주기적으로 런타임 상태를 점검. Cron 실패, 멈춘 실행, 디스크 압력, Telegram 오류를 감지. 필요할 때만 좁은 범위로 LLM을 호출합니다.'
      },
      {
        tag: 'reflection',
        title: '야간 Reflection',
        body: '02:00–05:00 사이에 세션에서 경험과 기억 후보를 추출. 빈 세션 정리, 메모리 후보 갱신. Go 코드 중심으로 동작하며 LLM 도구 표면을 직접 사용하지 않습니다.'
      },
      {
        tag: 'cron',
        title: '스케줄 작업',
        body: '30초 단위 틱 기반 스케줄러. Cron 표현식과 @at 일회성 트리거. 작업별 실행 기록과 상태 관리 제한값을 제공.'
      },
      {
        tag: 'llm_router',
        title: '3-Tier LLM 라우터',
        body: 'Heavy / Standard / Light 세 티어. 역할은 티어에 연결, 프로바이더와 모델은 설정에서 관리. 작업 성격에 따라 가벼운 모델과 강한 모델을 골라 쓸 수 있습니다.'
      },
      {
        tag: 'extensions',
        title: 'Skills, Plugins, MCP',
        body: '스킬은 Markdown 설명과 실행 가능한 CLI로 구성. 호출될 때만 로드되어 시스템 프롬프트가 작게 유지됩니다. Plugins은 명시적으로 허용된 경우에만 사용, MCP는 클라이언트로 지원. 스킬 설치는 tars-hub와 외부 MIT 호환 허브(openclaw, hermes, Anthropic skills)를 모두 아울러 페더레이션됩니다. 외부 허브 설치는 반드시 미리보기를 거치고 원본 라이선스 본문이 담긴 ATTRIBUTION.md를 자동 생성하며, 재배포 불가 콘텐츠는 차단합니다.'
      },
      {
        tag: 'channels',
        title: '멀티 채널 I/O',
        body: '브라우저 콘솔 외에도 Telegram 양방향 메시징, 인바운드 웹훅, macOS Assistant 팝업, 스크립트용 로컬 API.'
      }
    ]
  },

  comparison: {
    label: '// 다른 도구와의 차이',
    heading: 'TARS는 어떤 지점을 다르게 보는가',
    sub: '이 영역에는 이미 좋은 다른 두 프로젝트 — <a href="https://openclaw.ai" target="_blank" rel="noopener" class="underline hover:text-[var(--color-text-primary)]">OpenClaw</a>와 <a href="https://hermes-agent.nousresearch.com" target="_blank" rel="noopener" class="underline hover:text-[var(--color-text-primary)]">Hermes Agent</a>가 있습니다. 각자 초점이 있고, TARS는 다음 지점을 특히 중요하게 봅니다.',
    headers: { dimension: '항목', openclaw: 'OpenClaw', hermes: 'Hermes Agent', tars: 'TARS' },
    rows: sharedComparison([
      { dimension: '언어', openclaw: 'TypeScript', hermes: 'Python', tars: 'Go (단일 바이너리)' },
      { dimension: '주 인터페이스', openclaw: 'CLI', hermes: 'CLI + API', tars: '브라우저 콘솔 (CLI / Telegram / 웹훅 포함)' },
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
        tars: '3-티어 번들 (heavy/standard/light), 역할→티어 매핑'
      },
      {
        dimension: '메모리',
        openclaw: '세션 트랜스크립트',
        hermes: 'Honcho/Holographic 플러그인 훅',
        tars: 'Markdown + 시맨틱 + 저장 전 검토 + 야간 Reflection'
      },
      { dimension: '백그라운드', openclaw: '—', hermes: '—', tars: 'Pulse 감시 루프 (1분) + 야간 Reflection 배치' },
      { dimension: '스케줄링', openclaw: '—', hermes: '—', tars: '세션 바운드 cron + 감사 로그' },
      {
        dimension: '확장성',
        openclaw: '빌트인 도구',
        hermes: '툴셋',
        tars: '스킬 + 동반 CLI + 허용 기반 plugins/MCP'
      }
    ]),
    footnote: '이 비교는 TARS 관점에서 의도적으로 단순화한 것입니다. 각 프로젝트의 소스를 직접 보고 본인의 관점을 만드세요.'
  },

  architecture: {
    label: '// 아키텍처',
    heading: '하나의 바이너리,\n분리된 도구 표면',
    body: 'TARS는 하나의 바이너리 안에서 실행되지만, 모든 도구를 같은 방식으로 노출하지 않습니다. 채팅에서 사용하는 도구와 런타임 내부 도구를 분리합니다. <code class="font-mono text-[var(--color-amber-soft)]">ops_</code>, <code class="font-mono text-[var(--color-amber-soft)]">pulse_</code>, <code class="font-mono text-[var(--color-amber-soft)]">reflection_</code> 계열은 일반 채팅에서 직접 호출할 수 없으며, 런타임 내부 동작용으로 예약되어 있습니다. Pulse는 제한된 Go 인터페이스만 사용하며 LLM은 필요할 때만 호출, Reflection은 결정론적으로 동작합니다.'
  },

  quickstart: {
    label: '// 빠른 시작',
    heading: '세 단계로 시작하기',
    sub: '처음 실행하면 설정 마법사가 LLM 프로바이더와 모델 티어 구성을 안내합니다. LLM 설정이 완료되기 전까지 콘솔은 설정 전용 모드로 실행됩니다.',
    installLabel: '설치',
    methods: [
      {
        id: 'brew',
        label: 'Homebrew',
        note: 'macOS / Linux — 콘솔이 포함된 사전 빌드 바이너리',
        code: 'brew tap devlikebear/tap\nbrew install devlikebear/tap/tars'
      },
      {
        id: 'curl',
        label: 'curl',
        note: 'Linux / macOS 한 줄 — 콘솔이 포함된 사전 빌드 바이너리',
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
    tagline: '내 컴퓨터에서 실행되고, 내가 직접 다룰 수 있는 로컬 AI 에이전트 런타임. 실용적이고 투명하며, 사용자가 에이전트의 작업 흐름을 직접 확인하고 제어할 수 있도록 만들어졌습니다.',
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
    legal: 'MIT 라이선스 · TARS는 영화 <em>인터스텔라</em>의 TARS에 대한 오마주이며, 영화와 무관합니다.'
  }
};

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

export type Shot = {
  id: string;
  name: string;
  path: string;
  src: string;
  alt: string;
  caption: string;
};

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

  nav: { console: string; screenshots: string; features: string; compare: string; quickstart: string; github: string; star: string };

  archive: {
    label: string;
    title: string;
    body: string;
    cta: { label: string; href: string };
  };

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

  screenshots: {
    label: string;
    heading: string;
    sub: string;
    note: string;
    shots: Shot[];
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

  nav: { console: 'Console', screenshots: 'Screenshots', features: 'Features', compare: 'Compare', quickstart: 'Quickstart', github: 'GitHub', star: 'Star' },

  archive: {
    label: 'archived',
    title: 'TARS is archived',
    body: 'The repository is read-only and development has stopped. v0.35.0 is the last tagged release, and a few unreleased changes landed on main after it — this page describes where the code actually stopped. It still installs, still runs, and the MIT license still applies, but nothing new is coming: read it as a record of what was built rather than a roadmap.',
    cta: { label: 'Last release →', href: 'https://github.com/devlikebear/tars/releases' }
  },

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
    plus: 'The nav is deliberately this short. The last changes before the archive trimmed the sidebar to the pages a single operator opens daily; Lineage, Plans, Memory, System Prompt, Extensions, Agent Runtime, Channels, Cron, Analytics, and Reflection keep their routes and still open by URL — they are just no longer advertised.',
    pages: [
      {
        group: 'Home',
        groupLabel: '/home',
        name: 'Mission Control',
        path: '/console',
        body: 'The screen you land on. Pulse, Reflection, active plans, runtime runs, cron jobs, disk pressure, sessions, and recommended setup actions on one page — agent state and work in progress at a glance.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Chat',
        path: '/console/chat',
        body: 'Where the work happens. Dock the panels you need — Sessions, Files, Config, Context, Prompt, Prior Context, Tasks, Git, Skills, Cron, Health. Branch a session at a specific message; the first turn recommends the model tier that fits.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Approvals',
        path: '/console/approvals',
        body: 'Risky cleanup plans wait here for your review before TARS applies them — file paths, size, and reason first, then Approve or Reject. Applied plans keep a result log, and the page also carries the sanitized Remote Execution view.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Logs',
        path: '/console/logs',
        body: 'Tail the runtime log without leaving the browser. Pick the file, filter by level and component, choose how many lines, and expand any line to its raw JSON.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Pulse',
        path: '/console/pulse',
        body: 'The watchdog surface. Cron failures, stuck runs, disk pressure, Telegram delivery, and reflection health are checked every 60s; an LLM classifier sorts each tick into ignore / notify / autofix, and only whitelisted autofixes may act.'
      },
      {
        group: 'Setup',
        groupLabel: '/setup',
        name: 'Settings',
        path: '/console/config',
        body: 'Quick Start checks only, by design: provider credentials, tier bindings, workspace path, and the switches that gate Pulse, Reflection, and Remote Access. Long-tail configuration lives in YAML, where it can be diffed and version-controlled.'
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

  screenshots: {
    label: '// screenshots',
    heading: 'The console,\nas it actually ships',
    sub: 'Captured from a running <code class="font-mono text-[var(--color-amber-soft)]">tars serve</code>, built from the code as it was archived — the five screens the sidebar leads to, in the order it lists them.',
    note: 'Real screens from a local install, not mockups. The workspace is a throwaway one, so the numbers are small — an everyday workspace fills these pages out.',
    shots: [
      {
        id: 'chat',
        name: 'Chat',
        path: '/console/chat',
        src: '/screens/console-chat.webp',
        alt: 'TARS console Chat page: session list on the left, a two-turn conversation in the middle, dockable panel tabs across the top',
        caption:
          'A session mid-conversation. Panel tabs across the top dock Sessions, Files, Git, Tasks, Health and the rest beside the transcript; the header carries session health and the active working directory.'
      },
      {
        id: 'approvals',
        name: 'Approvals',
        path: '/console/approvals',
        src: '/screens/console-approvals.webp',
        alt: 'TARS console Approvals page showing the review queue, what triggers an approval, and the Remote Execution panel',
        caption:
          'The review queue, with what puts something in it and what each decision does. Remote execution sits on the same page, reporting disabled because it is off by default.'
      },
      {
        id: 'logs',
        name: 'Logs',
        path: '/console/logs',
        src: '/screens/console-logs.webp',
        alt: 'TARS console Logs page tailing the runtime log filtered to INFO level',
        caption:
          'The runtime log, filtered to INFO here. File, level, component and line count are all filters; any line expands to the raw JSON record behind it.'
      },
      {
        id: 'pulse',
        name: 'Pulse',
        path: '/console/pulse',
        src: '/screens/console-pulse.webp',
        alt: 'TARS console Pulse page listing watch targets, the ignore/notify/autofix actions, and current watchdog status',
        caption:
          'What the watchdog watches, and what it is allowed to do about it. The tick counters below are live: this run classified a disk-pressure signal as notify rather than autofix.'
      },
      {
        id: 'settings',
        name: 'Settings',
        path: '/console/config',
        src: '/screens/console-settings.webp',
        alt: 'TARS console Settings page showing the Quick Start readiness cards, 9 of 10 ready',
        caption:
          'Quick Start, and only Quick Start. Each card is one gate between you and a working install, with a readiness badge and a note when the change needs a restart.'
      }
    ]
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
    footnote: 'Verified on 2026-08-02 against TARS v0.35.0, OpenClaw v2026.7.1, and Hermes Agent v0.19.1. TARS stopped there; the other two did not, so treat their columns as a snapshot of that date. The comparison is from the TARS perspective and intentionally simplified — read the source for each project to form your own view.'
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
        note: 'For development. Requires Go 1.25.6+ (Node only for the console build)',
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
        { label: 'GitHub (archived)', href: 'https://github.com/devlikebear/tars' },
        { label: 'Releases', href: 'https://github.com/devlikebear/tars/releases' },
        { label: 'Changelog', href: 'https://github.com/devlikebear/tars/blob/main/CHANGELOG.md' }
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
    legal: 'Archived · Last release v0.35.0 · MIT License · An homage to TARS from <em>Interstellar</em>; not affiliated with the film.'
  }
};

export const ko: Translation = {
  locale: 'ko',
  altPath: '/',
  altLabel: 'English',
  pageTitle: 'TARS — 내가 직접 다룰 수 있는 로컬 AI 에이전트',
  metaDescription:
    'TARS는 Go 기반 단일 바이너리로 실행되는 로컬 AI 에이전트 런타임입니다. 브라우저 콘솔에서 에이전트의 작업 흐름, 메모리, 스케줄 작업, Git 변경사항을 직접 확인하고 제어할 수 있습니다.',

  nav: { console: '콘솔', screenshots: '스크린샷', features: '기능', compare: '비교', quickstart: '빠른 시작', github: 'GitHub', star: 'Star' },

  archive: {
    label: 'archived',
    title: 'TARS는 아카이브되었습니다',
    body: '저장소는 읽기 전용으로 전환되었고 개발은 멈췄습니다. 마지막 태그 릴리스는 v0.35.0이고 그 뒤로 릴리스되지 않은 변경이 main에 몇 개 더 올라갔는데, 이 페이지는 코드가 실제로 멈춘 지점을 기준으로 합니다. 설치도 실행도 그대로 되고 MIT 라이선스도 유효하지만 새로 추가되는 것은 없으니, 앞으로의 계획이 아니라 만들어진 결과의 기록으로 읽어주세요.',
    cta: { label: '마지막 릴리스 →', href: 'https://github.com/devlikebear/tars/releases' }
  },

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
    plus: '내비게이션이 짧은 것은 의도된 결과입니다. 개발이 멈추기 직전의 변경에서 사이드바는 한 사람이 매일 여는 화면만 남기고 정리했고, Lineage · Plans · Memory · System Prompt · Extensions · Agent Runtime · Channels · Cron · Analytics · Reflection은 라우트가 그대로 살아 있어 URL로는 여전히 열립니다 — 목록에 노출하지 않을 뿐입니다.',
    pages: [
      {
        group: 'Home',
        groupLabel: '/home',
        name: 'Mission Control',
        path: '/console',
        body: '콘솔을 열면 처음 만나는 화면. Pulse, Reflection, 진행 중인 플랜, 런타임 실행, Cron 작업, 디스크 상태, 세션, 권장 설정 작업이 한 페이지에 모여 에이전트 상태와 진행 중인 일을 한눈에 보여줍니다.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Chat',
        path: '/console/chat',
        body: '실제 작업이 일어나는 곳. Sessions, Files, Config, Context, Prompt, Prior Context, Tasks, Git, Skills, Cron, Health 중 필요한 패널을 대화 옆에 도크합니다. 특정 메시지 지점에서 세션을 분기할 수 있고, 첫 턴에서는 작업에 맞는 모델 티어를 추천합니다.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Approvals',
        path: '/console/approvals',
        body: '위험한 정리 작업이 적용되기 전에 대기하는 곳. 파일 경로와 크기, 이유를 먼저 보여주고 승인/거부를 사용자가 정합니다. 적용된 계획은 결과 로그로 남고, 같은 페이지에서 원격 실행 상태도 확인할 수 있습니다.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Logs',
        path: '/console/logs',
        body: '브라우저를 벗어나지 않고 런타임 로그를 확인. 파일, 레벨, 컴포넌트, 줄 수로 필터링하고, 각 줄을 펼치면 원본 JSON 레코드를 그대로 볼 수 있습니다.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Pulse',
        path: '/console/pulse',
        body: '감시 루프 화면. 60초마다 Cron 실패, 멈춘 실행, 디스크 압력, Telegram 전송, Reflection 상태를 점검하고, LLM 분류기가 각 틱을 ignore / notify / autofix로 나눕니다. autofix는 허용 목록에 있는 것만 실행됩니다.'
      },
      {
        group: 'Setup',
        groupLabel: '/setup',
        name: 'Settings',
        path: '/console/config',
        body: '의도적으로 Quick Start 점검만 남긴 화면. 프로바이더 자격증명, 티어 바인딩, 워크스페이스 경로, 그리고 Pulse · Reflection · 원격 접속을 켜고 끄는 스위치입니다. 나머지 설정은 diff와 버전 관리가 되는 YAML에 둡니다.'
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

  screenshots: {
    label: '// 스크린샷',
    heading: '실제로 배포된\n콘솔 화면',
    sub: '아카이브된 시점의 코드를 <code class="font-mono text-[var(--color-amber-soft)]">tars serve</code>로 직접 띄워 캡처했습니다 — 사이드바가 안내하는 다섯 화면을, 사이드바에 놓인 순서 그대로.',
    note: '목업이 아니라 로컬 설치본의 실제 화면입니다. 캡처용으로 새로 만든 워크스페이스라 숫자가 작을 뿐, 실제로 쓰는 워크스페이스에서는 이 화면들이 훨씬 빽빽하게 채워집니다.',
    shots: [
      {
        id: 'chat',
        name: 'Chat',
        path: '/console/chat',
        src: '/screens/console-chat.webp',
        alt: 'TARS 콘솔 Chat 화면: 왼쪽 세션 목록, 가운데 두 번의 대화, 위쪽 패널 탭',
        caption:
          '대화가 진행 중인 세션. 위쪽 탭으로 Sessions, Files, Git, Tasks, Health 같은 패널을 대화 옆에 붙일 수 있고, 헤더에는 세션 상태와 현재 작업 디렉터리가 함께 표시됩니다.'
      },
      {
        id: 'approvals',
        name: 'Approvals',
        path: '/console/approvals',
        src: '/screens/console-approvals.webp',
        alt: 'TARS 콘솔 Approvals 화면: 검토 대기열, 승인이 필요한 조건, 원격 실행 패널',
        caption:
          '검토 대기열과 함께, 무엇이 여기로 올라오고 각 결정이 무슨 일을 하는지 나란히 설명합니다. 원격 실행도 같은 페이지에 있으며 기본값이 꺼짐이라 disabled로 표시됩니다.'
      },
      {
        id: 'logs',
        name: 'Logs',
        path: '/console/logs',
        src: '/screens/console-logs.webp',
        alt: 'TARS 콘솔 Logs 화면: INFO 레벨로 필터링된 런타임 로그',
        caption:
          '런타임 로그를 INFO로 필터링한 모습. 파일 · 레벨 · 컴포넌트 · 줄 수가 모두 필터이고, 각 줄을 펼치면 원본 JSON 레코드가 나옵니다.'
      },
      {
        id: 'pulse',
        name: 'Pulse',
        path: '/console/pulse',
        src: '/screens/console-pulse.webp',
        alt: 'TARS 콘솔 Pulse 화면: 감시 대상, ignore/notify/autofix 동작, 현재 감시 상태',
        caption:
          '감시 루프가 무엇을 보고, 그에 대해 무엇까지 할 수 있는지. 아래 카운터는 실제 값으로, 이 실행에서는 디스크 압력 신호를 autofix가 아닌 notify로 분류했습니다.'
      },
      {
        id: 'settings',
        name: 'Settings',
        path: '/console/config',
        src: '/screens/console-settings.webp',
        alt: 'TARS 콘솔 Settings 화면: Quick Start 준비 상태 카드, 10개 중 9개 완료',
        caption:
          'Quick Start, 그리고 Quick Start만. 카드 하나가 곧 동작하는 설치까지 남은 관문 하나이며, 준비 상태 배지와 재시작이 필요한지 여부가 함께 표시됩니다.'
      }
    ]
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
    footnote: '2026-08-02 기준으로 TARS v0.35.0, OpenClaw v2026.7.1, Hermes Agent v0.19.1을 놓고 확인한 내용입니다. TARS는 여기서 멈췄지만 나머지 두 프로젝트는 계속 움직이고 있으므로, 그쪽 열은 그 시점의 스냅숏으로 봐주세요. 비교는 TARS 관점에서 의도적으로 단순화한 것이니 각 프로젝트의 소스를 직접 보고 본인의 관점을 만드시길 권합니다.'
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
        note: '개발용. Go 1.25.6+ 필요 (Node는 콘솔 빌드에만)',
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
        { label: 'GitHub (아카이브)', href: 'https://github.com/devlikebear/tars' },
        { label: 'Releases', href: 'https://github.com/devlikebear/tars/releases' },
        { label: 'Changelog', href: 'https://github.com/devlikebear/tars/blob/main/CHANGELOG.md' }
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
    legal: '아카이브됨 · 마지막 릴리스 v0.35.0 · MIT 라이선스 · TARS는 영화 <em>인터스텔라</em>의 TARS에 대한 오마주이며, 영화와 무관합니다.'
  }
};

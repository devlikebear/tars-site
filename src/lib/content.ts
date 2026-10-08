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

export type Clip = {
  src: string;
  webm: string;
  poster: string;
  caption: string;
};

export type InstallMethod = {
  id: 'brew' | 'desktop' | 'curl' | 'winget' | 'source';
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
    clip: Clip;
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
    label: 'development resumed',
    title: 'TARS development has resumed',
    body: 'TARS is no longer archived and development has resumed. v0.57.0 is the latest tagged release; main may include additional unreleased changes. This page describes main, so some features and console screens may differ from the latest release.',
    cta: { label: 'Latest release →', href: 'https://github.com/devlikebear/tars/releases' }
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
    plus: 'The nav is deliberately this short: Work, Build, and System. Only Plans and Channels stay off it, reachable through the ⌘K command palette and in-context links instead — everything else above is one click away.',
    pages: [
      {
        group: 'Home',
        groupLabel: '/home',
        name: 'Sessions',
        path: '/console',
        body: 'The screen you land on. Every chat, grouped by the repository or folder it works in, with live Needs input / Running / Done / Idle status per card — what used to be a single dashboard is now a board of the work itself.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Focus',
        path: '/console/focus',
        body: 'Goal-driven pipelines: plan → build → review → PR → PR review → merge, or a different template. Gates wait for your decision unless the task is in goal mode, which runs to the end on a fixed policy with nobody watching.'
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
        name: 'Overview',
        path: '/console/system',
        body: 'Mission Control moved here once the session board took the landing spot. Pulse, Reflection, disk pressure, recent notifications, recommended setup actions, and delivery shortcuts (version, open PRs) in one place.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Approvals',
        path: '/console/approvals',
        body: 'Cleanup plans and queued unattended tool-call approvals wait here for review before TARS applies them — file paths, size, and reason first, then Approve or Reject. The automation audit below records every automated decision.'
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
        'Topbar status pill: server · pulse · reflection · active sessions in one glance',
        'Native macOS app with tray and approval notifications: brew install --cask devlikebear/tap/tars-desktop'
      ],
      cta: { label: 'Install guide →', href: 'https://github.com/devlikebear/tars/blob/main/docs/console-install.md' }
    }
  },

  screenshots: {
    label: '// screenshots',
    heading: 'The console,\nas it actually ships',
    sub: 'Captured from a running <code class="font-mono text-[var(--color-amber-soft)]">tars serve</code>, built from a v0.57.0-era snapshot of main — six screens, in the order the sidebar lists them.',
    note: 'Real screens from a local install, not mockups, driven by a scripted demo against a deterministic mock model — so the numbers are small and the conversation text is a fixture, not a real model talking.',
    shots: [
      {
        id: 'board',
        name: 'Sessions',
        path: '/console',
        src: '/screens/console-board.webp',
        alt: 'TARS console session board: sessions grouped by the folder they work in, with live status filters',
        caption:
          'The landing page. Every chat, grouped by the repository or folder it works in, with Needs input / Running / Done / Idle filters and live status per card.'
      },
      {
        id: 'focus',
        name: 'Focus',
        path: '/console/focus',
        src: '/screens/console-focus.webp',
        alt: "TARS console Focus page: a pipeline's stage stepper (Plan, Build, Review done, PR active) and its latest report card",
        caption:
          'A goal-driven pipeline mid-run: the stage stepper across the top, the latest card from the deck, and a box to steer the current stage.'
      },
      {
        id: 'chat',
        name: 'Chat',
        path: '/console/chat',
        src: '/screens/console-chat.webp',
        alt: 'TARS console Chat page: session list on the left, a short exchange with a write_file tool call in the middle, the Files panel on the right',
        caption:
          'A session mid-conversation. Panel tabs across the top dock Sessions, Files, Git, Tasks, Health and the rest beside the transcript; tool calls render as inline cards, and the header carries session health and the active working directory.'
      },
      {
        id: 'overview',
        name: 'Overview',
        path: '/console/system',
        src: '/screens/console-overview.webp',
        alt: 'TARS console Overview ("Mission Control") page: Pulse/Reflection/disk/session status strip, recent notifications, recommended actions, and delivery',
        caption:
          'The status strip, recent notifications, recommended setup actions, and current version/PR shortcuts — what used to live at /console before the session board took over as the landing page.'
      },
      {
        id: 'approvals',
        name: 'Approvals',
        path: '/console/approvals',
        src: '/screens/console-approvals.webp',
        alt: 'TARS console Approvals page showing the review queue, what triggers an approval, and the automation audit',
        caption:
          'Cleanup plans and queued unattended tool-call approvals wait here for review before TARS applies them; the automation audit below records every automated decision.'
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
    ],
    clip: {
      src: '/screens/demo.mp4',
      webm: '/screens/demo.webm',
      poster: '/screens/demo-poster.jpg',
      caption: 'A short walkthrough of the same console — the session board, a chat exchange with a tool call, and a Focus pipeline — captured by the same scripted demo as the screenshots above.'
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
        tag: 'focus',
        title: 'Focus Mode',
        body: 'Run one task as a staged pipeline — plan, build, review, PR, merge, or a different template — with gate approvals, or goal mode for nobody at the gates. Stage transitions are decided by facts: a verification exit code, finding triage, real CI/review state.'
      },
      {
        tag: 'worktrees',
        title: 'Session Worktrees & Permissions',
        body: 'A session working the same repo as another is isolated into its own git worktree automatically. Each session has a permission mode (ask / accept edits / plan / auto); cron, Telegram, and subagent turns ask the same way and queue in Ops when nobody is watching.'
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
    footnote: 'Verified on 2026-08-02 against TARS v0.35.0, OpenClaw v2026.7.1, and Hermes Agent v0.19.1. Treat all three columns as a snapshot of that date, not a comparison of current releases. The comparison is from the TARS perspective and intentionally simplified — read the source for each project to form your own view.'
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
        note: 'macOS (Apple silicon and Intel) — pre-built binary with console. On Linux, build from source.',
        code: 'brew tap devlikebear/tap\nbrew install devlikebear/tap/tars'
      },
      {
        id: 'desktop',
        label: 'Desktop app (macOS)',
        note: 'Signed and notarized TARS.app — tray, approval notifications, its own window — and the server formula in one command. Open TARS and choose Start server in the tray: the first run installs the service and opens the setup wizard, so steps 02 and 03 are done for you.',
        code: 'brew install --cask devlikebear/tap/tars-desktop'
      },
      {
        id: 'curl',
        label: 'curl',
        note: 'macOS one-liner — pre-built binary with console, installed to ~/.local/bin. On Linux, build from source.',
        code: 'curl -fsSL https://raw.githubusercontent.com/devlikebear/tars/main/install.sh | sh'
      },
      {
        id: 'winget',
        label: 'Windows (winget)',
        note: 'Portable package: tars.exe plus console assets, no separate archive or PATH edit. A winget install is upgraded only by winget.',
        code: 'winget install Devlikebear.TARS\nwinget install Devlikebear.TARS.Desktop   # depends on the server'
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
        { label: 'GitHub', href: 'https://github.com/devlikebear/tars' },
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
    legal: 'Development resumed · Latest release v0.57.0 · MIT License · An homage to TARS from <em>Interstellar</em>; not affiliated with the film.'
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
    label: 'development resumed',
    title: 'TARS 개발을 재개했습니다',
    body: 'TARS의 아카이브를 해제하고 개발을 재개했습니다. 최신 태그 릴리스는 v0.57.0이며 main에는 아직 릴리스되지 않은 변경이 있을 수 있습니다. 이 페이지는 main을 설명하므로 일부 기능과 콘솔 화면은 최신 릴리스와 다를 수 있습니다.',
    cta: { label: '최신 릴리스 →', href: 'https://github.com/devlikebear/tars/releases' }
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
    plus: '내비게이션이 짧은 것은 의도된 결과입니다: Work · Build · System 세 그룹뿐입니다. 목록에서 빠진 것은 Plans와 Channels뿐이며, ⌘K 커맨드 팔레트와 화면 안 링크로 열 수 있습니다 — 그 외에는 모두 한 번만 클릭하면 열립니다.',
    pages: [
      {
        group: 'Home',
        groupLabel: '/home',
        name: 'Sessions',
        path: '/console',
        body: '콘솔을 열면 처음 만나는 화면. 모든 채팅이 작업 중인 저장소·폴더별로 묶이고, 카드마다 Needs input / Running / Done / Idle 상태가 실시간으로 표시됩니다 — 예전의 단일 대시보드가 지금은 작업 자체를 보여주는 보드가 됐습니다.'
      },
      {
        group: 'Work',
        groupLabel: '/work',
        name: 'Focus',
        path: '/console/focus',
        body: '목표 중심 파이프라인: plan → build → review → PR → PR review → merge, 또는 다른 템플릿. 게이트는 기본적으로 사용자의 결정을 기다리지만, 목표 모드에서는 아무도 지켜보지 않아도 고정된 정책으로 끝까지 진행됩니다.'
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
        name: 'Overview',
        path: '/console/system',
        body: '세션 보드가 랜딩 화면 자리를 넘겨받으면서 Mission Control이 옮겨온 곳. Pulse, Reflection, 디스크 압력, 최근 알림, 권장 설정 작업, 배포 바로가기(버전, 열린 PR)가 한 페이지에 모여 있습니다.'
      },
      {
        group: 'Operate',
        groupLabel: '/operate',
        name: 'Approvals',
        path: '/console/approvals',
        body: '정리 작업과, 무인 실행이 큐에 올린 도구 호출 승인이 적용되기 전에 대기하는 곳. 파일 경로와 크기, 이유를 먼저 보여주고 승인/거부를 사용자가 정합니다. 아래 automation audit에는 자동화된 결정이 모두 기록됩니다.'
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
        '상단 status pill: 서버 · pulse · reflection · 활성 세션을 한눈에',
        '트레이·승인 알림이 있는 macOS 네이티브 앱: brew install --cask devlikebear/tap/tars-desktop'
      ],
      cta: { label: '설치 가이드 →', href: 'https://github.com/devlikebear/tars/blob/main/docs/console-install.md' }
    }
  },

  screenshots: {
    label: '// 스크린샷',
    heading: '실제로 배포된\n콘솔 화면',
    sub: 'v0.57.0 시점의 main 스냅숏을 <code class="font-mono text-[var(--color-amber-soft)]">tars serve</code>로 직접 띄워 캡처했습니다 — 사이드바가 안내하는 순서 그대로 여섯 화면.',
    note: '목업이 아니라 로컬 설치본의 실제 화면이며, 결정적으로 동작하는 모의(mock) 모델을 상대로 한 스크립트 데모를 캡처했습니다 — 숫자가 작은 것도, 대화 내용이 고정된 문구인 것도 그래서입니다(실제 모델의 답변이 아닙니다).',
    shots: [
      {
        id: 'board',
        name: 'Sessions',
        path: '/console',
        src: '/screens/console-board.webp',
        alt: 'TARS 콘솔 세션 보드: 작업 중인 폴더별로 묶인 세션과 실시간 상태 필터',
        caption:
          '콘솔을 열면 처음 만나는 화면. 모든 채팅이 작업 중인 저장소·폴더별로 묶이고, 카드마다 Needs input / Running / Done / Idle 필터와 실시간 상태가 표시됩니다.'
      },
      {
        id: 'focus',
        name: 'Focus',
        path: '/console/focus',
        src: '/screens/console-focus.webp',
        alt: 'TARS 콘솔 Focus 화면: 파이프라인 단계 스테퍼(Plan, Build, Review 완료, PR 진행 중)와 최신 리포트 카드',
        caption:
          '목표 중심 파이프라인이 진행되는 모습. 위쪽의 단계 스테퍼, 덱의 최신 카드, 그리고 현재 단계에 지시를 보낼 수 있는 입력창이 함께 있습니다.'
      },
      {
        id: 'chat',
        name: 'Chat',
        path: '/console/chat',
        src: '/screens/console-chat.webp',
        alt: 'TARS 콘솔 Chat 화면: 왼쪽 세션 목록, 가운데 write_file 도구 호출이 있는 짧은 대화, 오른쪽 Files 패널',
        caption:
          '대화가 진행 중인 세션. 위쪽 탭으로 Sessions, Files, Git, Tasks, Health 같은 패널을 대화 옆에 붙일 수 있고, 도구 호출은 인라인 카드로 표시되며, 헤더에는 세션 상태와 현재 작업 디렉터리가 함께 나타납니다.'
      },
      {
        id: 'overview',
        name: 'Overview',
        path: '/console/system',
        src: '/screens/console-overview.webp',
        alt: 'TARS 콘솔 Overview("Mission Control") 화면: Pulse/Reflection/디스크/세션 상태 스트립, 최근 알림, 권장 작업, 배포 정보',
        caption:
          '상태 스트립, 최근 알림, 권장 설정 작업, 현재 버전·PR 바로가기를 한 곳에 모았습니다 — 세션 보드가 랜딩 화면이 되기 전에는 /console에 있던 화면입니다.'
      },
      {
        id: 'approvals',
        name: 'Approvals',
        path: '/console/approvals',
        src: '/screens/console-approvals.webp',
        alt: 'TARS 콘솔 Approvals 화면: 검토 대기열, 승인이 필요한 조건, automation audit',
        caption:
          '정리 작업과, 무인 실행이 큐에 올린 도구 호출 승인이 TARS가 적용하기 전에 대기하는 곳입니다. 아래 automation audit에는 자동화된 결정이 모두 기록됩니다.'
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
    ],
    clip: {
      src: '/screens/demo.mp4',
      webm: '/screens/demo.webm',
      poster: '/screens/demo-poster.jpg',
      caption: '같은 콘솔을 짧게 둘러보는 영상입니다 — 세션 보드, 도구 호출이 있는 채팅, Focus 파이프라인까지, 위 스크린샷과 같은 스크립트 데모로 캡처했습니다.'
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
        tag: 'focus',
        title: 'Focus 모드',
        body: '하나의 작업을 plan → build → review → PR → merge, 혹은 다른 템플릿으로 단계화된 파이프라인으로 실행합니다. 게이트는 기본적으로 승인을 기다리고, 목표 모드에서는 아무도 지켜보지 않아도 됩니다. 단계 전환은 검증 명령의 종료 코드, 지적 사항 분류, 실제 CI·리뷰 상태 같은 사실로만 결정됩니다.'
      },
      {
        tag: 'worktrees',
        title: '세션 Worktree와 권한',
        body: '같은 저장소를 다루는 다른 세션이 있으면 자동으로 별도 git worktree로 격리됩니다. 세션마다 권한 모드(ask / accept edits / plan / auto)가 있고, cron·Telegram·서브에이전트 턴도 같은 방식으로 승인을 묻고 아무도 보고 있지 않으면 Ops에 큐로 쌓입니다.'
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
    footnote: '2026-08-02 기준으로 TARS v0.35.0, OpenClaw v2026.7.1, Hermes Agent v0.19.1을 놓고 확인한 내용입니다. 세 프로젝트 모두 해당 시점의 스냅숏이며 현재 릴리스 간 비교가 아닙니다. 비교는 TARS 관점에서 의도적으로 단순화한 것이니 각 프로젝트의 소스를 직접 보고 본인의 관점을 만드시길 권합니다.'
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
        note: 'macOS(Apple silicon·Intel) — 콘솔이 포함된 사전 빌드 바이너리. Linux에서는 소스에서 빌드하세요.',
        code: 'brew tap devlikebear/tap\nbrew install devlikebear/tap/tars'
      },
      {
        id: 'desktop',
        label: '데스크톱 앱 (macOS)',
        note: '서명·공증된 TARS.app(트레이, 승인 알림, 별도 창)과 서버를 명령 한 줄로 설치합니다. TARS를 열고 트레이에서 Start server를 누르면 첫 실행에 서비스를 설치하고 설정 마법사를 열어 주므로 02·03단계가 필요 없습니다.',
        code: 'brew install --cask devlikebear/tap/tars-desktop'
      },
      {
        id: 'curl',
        label: 'curl',
        note: 'macOS 한 줄 설치 — 콘솔이 포함된 사전 빌드 바이너리를 ~/.local/bin에 설치합니다. Linux에서는 소스에서 빌드하세요.',
        code: 'curl -fsSL https://raw.githubusercontent.com/devlikebear/tars/main/install.sh | sh'
      },
      {
        id: 'winget',
        label: 'Windows (winget)',
        note: 'tars.exe와 콘솔 자산을 담은 포터블 패키지 — 별도 압축 해제나 PATH 설정이 필요 없습니다. winget으로 설치했다면 업데이트도 winget으로만 합니다.',
        code: 'winget install Devlikebear.TARS\nwinget install Devlikebear.TARS.Desktop   # 서버에 의존'
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
        { label: 'GitHub', href: 'https://github.com/devlikebear/tars' },
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
    legal: '개발 재개 · 최신 릴리스 v0.57.0 · MIT 라이선스 · TARS는 영화 <em>인터스텔라</em>의 TARS에 대한 오마주이며, 영화와 무관합니다.'
  }
};

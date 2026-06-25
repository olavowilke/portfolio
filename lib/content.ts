// Single source of truth for portfolio content.

export const profile = {
  name: "Olavo Wilke",
  role: "Software Engineer",
  tagline: "Backend engineer building high-throughput, low-latency systems.",
  location: "Paraná, Brazil",
  yearsExperience: "6+",
  email: "olavo.wilke@gmail.com",
  phone: "+55 43 99823-1633",
  phoneHref: "+5543998231633",
  github: "https://github.com/olavowilke",
  githubLabel: "github.com/olavowilke",
  linkedin: "https://www.linkedin.com/in/olavo-wilke/",
  linkedinLabel: "in/olavo-wilke",
  cv: "/olavo-wilke-cv.pdf",
  bio: [
    "I'm a software engineer with 6+ years of hands-on experience building robust, safe, and high-performing backend systems.",
    "My work lives where throughput and latency matter most — bet pipelines processing millions of events, procurement engines sourcing across vendors in real time, and marketing systems reaching hundreds of thousands of users. I've shipped across finance, iGaming, and education.",
    "I design the solution, build it end to end, and keep it healthy in production.",
  ],
  focus: [
    "Distributed & event-driven systems",
    "Java / Spring backend",
    "Go services & integrations",
    "Messaging: Kafka, RabbitMQ, SQS",
  ],
};

export type Tech = { name: string; slug: string };

// Devicon CDN slugs (full brand colors). Rendered on subtle tiles so dark logos read.
export const techStack: Tech[] = [
  { name: "Java", slug: "java/java-original" },
  { name: "Spring", slug: "spring/spring-original" },
  { name: "Go", slug: "go/go-original" },
  { name: "TypeScript", slug: "typescript/typescript-original" },
  { name: "JavaScript", slug: "javascript/javascript-original" },
  { name: "Angular", slug: "angularjs/angularjs-original" },
  { name: "PostgreSQL", slug: "postgresql/postgresql-original" },
  { name: "MySQL", slug: "mysql/mysql-original" },
  { name: "Oracle", slug: "oracle/oracle-original" },
  { name: "MongoDB", slug: "mongodb/mongodb-original" },
  { name: "Redis", slug: "redis/redis-original" },
  { name: "Apache Kafka", slug: "apachekafka/apachekafka-original" },
  { name: "RabbitMQ", slug: "rabbitmq/rabbitmq-original" },
  { name: "Docker", slug: "docker/docker-original" },
  { name: "Kubernetes", slug: "kubernetes/kubernetes-plain" },
  { name: "AWS", slug: "amazonwebservices/amazonwebservices-original-wordmark" },
  { name: "Jenkins", slug: "jenkins/jenkins-original" },
  { name: "Grafana", slug: "grafana/grafana-original" },
  { name: "JUnit", slug: "junit/junit-original" },
  { name: "Git", slug: "git/git-original" },
];

export type Project = {
  id: string;
  index: string;
  name: string;
  context: string;
  headline: string;
  summary: string;
  stats: { value: string; label: string }[];
  highlights: string[];
  role: string;
  stack: string[];
  diagram: string; // alt / description for the eventual Excalidraw diagram
};

export const projects: Project[] = [
  {
    id: "mse",
    index: "01",
    name: "Multi-Sourcing Engine",
    context: "Major U.S. home services & appliance-repair provider",
    headline:
      "A distributed procurement engine that sources appliance parts across four vendors in real time — saving an estimated eight figures a month.",
    summary:
      "MSE searches, scores, and orders parts across multiple suppliers while staying in sync with internal inventory and finance. It fans out parallel vendor queries, short-circuits the moment internal stock satisfies demand, and ranks the rest by price, delivery time, and reliability. Orders persist instantly and fulfill asynchronously, so vendor slowness never blocks the customer.",
    stats: [
      { value: "~$12M", label: "est. saved / month" },
      { value: "200–300k", label: "orders / day" },
      { value: "4", label: "integrated vendors" },
    ],
    highlights: [
      "Spring microservices with a central orchestrator/API gateway, PostgreSQL as system of record, and Amazon SQS for asynchronous fulfillment.",
      "Each vendor wrapped in a dedicated adapter (anti-corruption layer) handling auth, retries, and errors — independent scaling and reduced blast radius.",
      "Parallel vendor search with early termination when internal inventory satisfies demand; scoring by price, delivery time, and reliability.",
      "Async order flow: persist as PENDING → publish to SQS → vendors fulfill independently — zero vendor latency on the critical path.",
      "NetSuite integration for financial sync and persistent audit trails for compliance.",
    ],
    role: "Contributed to the design and implementation of the distributed architecture and vendor-integration layer, focused on resilience, fault isolation, and the asynchronous fulfillment flow.",
    stack: ["Spring", "Microservices", "PostgreSQL", "Amazon SQS", "NetSuite", "AWS"],
    diagram:
      "Client → MSE orchestrator → parallel vendor adapters + internal inventory → scoring → PostgreSQL + SQS → async fulfillment → NetSuite",
  },
  {
    id: "tournament",
    index: "02",
    name: "Tournament Feature",
    context: "iGaming integrator — between virtual casinos & game providers",
    headline:
      "Real-time casino tournaments for 100k+ players — built on a latency-sensitive bet pipeline without adding a millisecond to it.",
    summary:
      "The core Java API processes every bet and win in real time, so the constraint was simple: tournaments could not slow it down. I wrapped the core API with non-blocking RabbitMQ connectivity, fanning out every bet and win to a new service — gator-messaging — that ran all tournament logic off the critical path, with live leaderboards served straight to the back office.",
    stats: [
      { value: "100k+", label: "players engaged" },
      { value: "20%", label: "engagement lift" },
      { value: "30", label: "casino platforms" },
    ],
    highlights: [
      "Wrapped the latency-sensitive bet/win API with non-blocking RabbitMQ connectivity — tournament processing never touched the critical path.",
      "Built gator-messaging: a new service consuming bet/win events to run scoring, standings, and prize handling independently of the core API.",
      "Live leaderboards computed and persisted in a dedicated MySQL table, exposed through a back-office endpoint and updated fully live.",
      "Full-stack back-office tournament management: one operator, many game providers and players, a configurable prize set, and a date range.",
      "Drove the discovery and infra work to introduce RabbitMQ — the platform had no message broker before.",
    ],
    role: "Owned end to end: solution design, the core-API backend, the gator-messaging service, the full back office (frontend + backend), and production maintenance.",
    stack: ["Java 7 / 17", "Spring Boot", "RabbitMQ", "MySQL", "JSP", "Docker", "Jenkins"],
    diagram:
      "Core bet/win API → RabbitMQ → gator-messaging → scoring + leaderboard (MySQL) → back-office endpoint (live standings) + tournament management",
  },
  {
    id: "game-winner-sender",
    index: "03",
    name: "Game Winner Sender",
    context: "Sports apparel & fan gear marketplace",
    headline:
      "Turning live game results into marketing emails for up to 800k fans — at a 12% buy rate.",
    summary:
      "For one of the largest marketplaces for sports jerseys, hats, collectibles, and fan merchandise, I enhanced a marketing engine that emails users based on the outcomes of the matches they care about. Go routines read registered game events from MySQL and trigger campaigns through Adobe Journey Optimizer, while an event-driven pipeline keeps game state current and Slack keeps operations in the loop.",
    stats: [
      { value: "200–800k", label: "users / send" },
      { value: "12%", label: "conversion (buy) rate" },
      { value: "1 / 5 min", label: "poll & retry cadence" },
    ],
    highlights: [
      "Event-driven game state: MDM → Kafka → the klio Go service → MySQL, keeping game status current for campaign triggering.",
      "Built REST APIs letting back-office systems register 'game events' that control which games participate in a campaign.",
      "1-minute routine gathers game updates and triggers Adobe Journey Optimizer campaigns; a 5-minute routine retries failed transactions for reliability.",
      "Adobe Journey Optimizer integration delivering results-driven emails to audiences in the hundreds of thousands.",
      "Internal Slack notifications so operations can manage which game events are being processed live.",
    ],
    role: "Built and enhanced the Go services and routines, designed the REST APIs for campaign control, wired the Kafka → klio → MySQL pipeline, integrated Adobe Journey Optimizer, and added Slack operational tooling.",
    stack: ["Go", "Adobe Journey Optimizer", "Kafka", "MySQL", "REST", "Slack"],
    diagram:
      "MDM → Kafka → klio (Go) → MySQL ← back-office REST. Polling: 1-min trigger + 5-min retry → Adobe Journey Optimizer → fans. Slack to ops.",
  },
];

export const experience = [
  { company: "Salsa Technology", role: "Software Engineer", period: "2023 — Present", domain: "iGaming" },
  { company: "nexmuv — Inovação", role: "Java Developer", period: "2022 — 2023", domain: "Fintech / Billing" },
  { company: "PADO S.A.", role: "Java Developer", period: "2021 — 2022", domain: "IoT / Access Control" },
  { company: "V.P. Reis", role: "Fullstack Developer", period: "2019 — 2021", domain: "EdTech" },
];

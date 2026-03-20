export type CvLink = { label: string; href: string };

export type CvContact = {
  email?: string;
  phone?: string;
  location?: string;
  links?: CvLink[];
};

export type CvRole = {
  title: string;
  period: string;
  bullets: string[];
};

export type CvEmployer = {
  company: string;
  companyPeriod?: string;
  roles: CvRole[];
};

export type CvEducation = {
  school: string;
  degree: string;
  period: string;
};

export type CvSkillItem = {
  label: string;
  secondary: boolean;
};

export type CvSkillGroup = {
  title: string;
  items: CvSkillItem[];
};

export type CvLanguage = {
  name: string;
  level: string;
};

export type CvActivityItem =
  | string
  | { before: string; linkLabel: string; href: string };

export type CvData = {
  name: string;
  headline: string;
  summary: string;
  contact: CvContact;
  experience: CvEmployer[];
  education: CvEducation[];
  skills: CvSkillGroup[];
  languages: CvLanguage[];
  otherActivities?: CvActivityItem[];
};

export const cvData: CvData = {
  name: 'Petr Fialka',
  headline: 'Head of Development',
  summary:
    'Vedení vývoje online nabídky České televize napříč vývojovými týmy. Dříve silné zaměření na backend (Python, TypeScript), architekturu CMS a DevOps; Fullstack u energetického dodavatele.',
  contact: {
    email: 'petr.fialka95@gmail.com',
    phone: '+420 720 184 004',
    links: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/petr-fialka-9b4022132/',
      },
    ],
  },
  experience: [
    {
      company: 'Česká televize',
      companyPeriod: 'únor 2021 – dosud',
      roles: [
        {
          title: 'Head of Development',
          period: 'říjen 2024 – současnost',
          bullets: [
            'Odpovědnost za vývoj online nabídky České televize: ČT24, ČT Sport, iVysílání, podpůrné týmy a související domény.',
            'Přibližně šedesát vývojářů v osmi týmech koordinuji přes Chapter Leady (vedoucí vývoje): společné plánování, standardy a technický směr napříč týmy.',
            'Široký technologický záběr – FE (React, Next.js), BE (PHP, Python, Node.js), mobilní vývoj (Swift, Java, Kotlin), QA (E2E Playwright, výkonové testy k6).',
            'Plánování v rámci kvartálních QBR s produktem a managementem; technický směr, kvalita dodávek, stabilita provozu a observabilita napříč týmy.',
          ],
        },
        {
          title: 'Chapter Lead (Python, Node.js)',
          period: 'květen 2024 – říjen 2024',
          bullets: [
            'Vedení osmičlenného týmu (Python, Node.js) napříč oblastmi CMS, Identita, Video platforma (playlisty), Poplatky a Vše o ČT – společné standardy, sdílení know-how a koordinace technického směru.',
            'Vedení migrace z interního Falcon frameworku na Django.',
            'Vedení přechodu z agregovaného GraphQL (schema stitching) na federované GraphQL.',
            'Zavedení Argo CD (GitOps).',
          ],
        },
        {
          title: 'Python Backend Team Lead',
          period: 'listopad 2021 – květen 2024',
          bullets: [
            'Vedení tříčlenného týmu (Python, backendový TypeScript); vývoj CMS pro ČT24 a ČT Sport včetně návrhu a rozvoje backendové architektury v této doméně.',
            'Architektura a provoz: GitOps, Kubernetes, Helm; integrace identity a access managementu.',
            'Údržba a rozvoj agregovaného GraphQL (schema stitching).',
            'Distribuované zamykání entit při souběžné editaci napříč mikroslužbami – aby se předešlo kolizím a nekonzistentním změnám v datech.',
            'AutoCRUD – interní nadstavba nad Falcon REST Framework pro rychlý vývoj CRUD API (koncepčně podobná django-rest-framework).',
            'Individuální rozhovory s členy týmu (1:1), mentoring, příprava technických zadání.',
          ],
        },
        {
          title: 'Python Backend Developer',
          period: 'únor 2021 – listopad 2021',
          bullets: [
            'Vývoj backendu CMS (Python, TypeScript); návrh a implementace částí distribuovaného systému.',
          ],
        },
      ],
    },
    {
      company: 'BOHEMIA ENERGY entity s.r.o.',
      roles: [
        {
          title: 'Full Stack Developer',
          period: 'duben 2017 – říjen 2021',
          bullets: [
            'Pokrytí celého vývojového cyklu softwaru – analýza, návrh, vývoj, testy, nasazení do produkce a provoz kontejnerizovaných služeb.',
            'Generátor PDF (React, FastAPI, ReportLab, MSSQL); Docker Compose, Traefik.',
            'Risk and Decision Calculator (Flask, Redis, MSSQL).',
            'Školení SQL; mentoring juniorů.',
          ],
        },
      ],
    },
    {
      company: 'APOLLO SOFT s.r.o.',
      roles: [
        {
          title: 'L1 Support Intern',
          period: 'květen 2016 – březen 2017',
          bullets: [
            'Komunikace s uživateli a řešení provozních požadavků.',
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: 'ČVUT – Fakulta elektrotechnická',
      degree:
        'Otevřená informatika, zaměření počítačové vědy (přerušeno ve 3. ročníku)',
      period: '2016 – 2019',
    },
    {
      school: 'První české gymnázium v Karlových Varech',
      degree: 'Všeobecné gymnázium',
      period: '2011 – 2015',
    },
  ],
  skills: [
    {
      title: 'Architektura a modelování',
      items: [
        { label: 'ArchiMate', secondary: false },
        { label: 'PlantUML', secondary: false },
        { label: 'Enterprise Architect', secondary: true },
        { label: 'Mermaid', secondary: true },
        { label: 'UML', secondary: true },
        { label: 'BPMN', secondary: true },
      ],
    },
    {
      title: 'DevOps, provoz a platforma',
      items: [
        { label: 'Docker', secondary: false },
        { label: 'Docker Compose', secondary: false },
        { label: 'Argo CD', secondary: false },
        { label: 'Kubernetes', secondary: false },
        { label: 'Helm', secondary: true },
        { label: 'GitOps', secondary: true },
        { label: 'HashiCorp Vault', secondary: true },
        { label: 'CI/CD', secondary: true },
        { label: 'Backstage.io', secondary: true },
        { label: 'Dagger.io', secondary: true },
      ],
    },
    {
      title: 'Observabilita',
      items: [
        { label: 'Graylog', secondary: false },
        { label: 'LGTM stack (Loki, Grafana, Tempo)', secondary: false },
        { label: 'Health / readiness probes', secondary: false },
        { label: 'ELK stack', secondary: true },
        { label: 'Strukturované / centrální logování', secondary: true },
        { label: 'OpenTelemetry / tracing', secondary: true },
      ],
    },
    {
      title: 'Python',
      items: [
        { label: 'FastAPI', secondary: false },
        { label: 'Django', secondary: false },
        { label: 'Falcon', secondary: true },
        { label: 'Pydantic', secondary: true },
        { label: 'SQLAlchemy', secondary: true },
        { label: 'Flask', secondary: true },
        { label: 'ReportLab', secondary: true },
        { label: 'Marshmallow', secondary: true },
      ],
    },
    {
      title: 'TypeScript / Node.js',
      items: [
        { label: 'Express', secondary: false },
        { label: 'Apollo GraphQL Federation', secondary: false },
        { label: 'NestJS', secondary: true },
        { label: 'Bun', secondary: true },
        { label: 'Apollo GraphQL', secondary: true },
      ],
    },
    {
      title: 'Frontend',
      items: [
        { label: 'React', secondary: false },
        { label: 'Next.js', secondary: true },
      ],
    },
    {
      title: 'Databáze',
      items: [
        { label: 'PostgreSQL', secondary: false },
        { label: 'Redis', secondary: false },
        { label: 'Elasticsearch', secondary: false },
        { label: 'Microsoft SQL Server', secondary: true },
        { label: 'MongoDB', secondary: true },
        { label: 'Oracle', secondary: true },
        { label: 'MySQL', secondary: true },
      ],
    },
    {
      title: 'Agentic development, kódování s AI agenty',
      items: [
        { label: 'Cursor', secondary: false },
        { label: 'GitHub Copilot', secondary: true },
        { label: 'OpenCode', secondary: true },
      ],
    },
    {
      title: 'Verze a prostředí',
      items: [
        { label: 'GitLab', secondary: false },
        { label: 'Pop!_OS', secondary: false },
        { label: 'Git', secondary: true },
        { label: 'VS Code', secondary: true },
        { label: 'PyCharm', secondary: true },
        { label: 'Ubuntu', secondary: true },
        { label: 'CentOS', secondary: true },
        { label: 'Windows', secondary: true },
      ],
    },
  ],
  languages: [
    { name: 'Čeština', level: 'rodilý mluvčí' },
    {
      name: 'Angličtina',
      level: 'B2 – přednášení odborné (univerzitní) látky',
    },
  ],
  otherActivities: [
    'Přednáška Python Web Development (1× ročně, ČVUT FJFI).',
    'Školení SQL tuning.',
    'Účast na WebExpo.',
    'Školení Web Vitals a výkonnostní optimalizace webů.',
    {
      before: 'Návrh architektury pro ',
      linkLabel: 'streamally.gg',
      href: 'https://www.streamally.gg/',
    },
  ],
};

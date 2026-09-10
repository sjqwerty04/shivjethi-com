import type { TimelineMilestone } from "@/components/ColossusTimeline";

/**
 * Union of professional chapters across resume drafts (2019–2026).
 * Latest 2025/2026 drafts win for current roles; earlier internships
 * kept so the track covers the full career.
 *
 * Days counted from 2018-07-01 (Manipal B.E. start / groundbreak).
 */
export const CAREER_START_DATE = "2018-07-01";

export const CAREER_MILESTONES: TimelineMilestone[] = [
  {
    date: "2018-07-01",
    headlineValue: 0,
    headlineSuffix: "days from groundbreak",
    title: "The foundation",
    description:
      "B.E. Information Technology at Manipal University Jaipur — four years of systems, code, and the discipline to ship.",
    company: "Manipal University Jaipur",
    logoSrc: "/logos/manipal.png",
  },
  {
    date: "2019-05-01",
    headlineValue: 304,
    headlineSuffix: "days into product",
    title: "First product seat",
    description:
      "At CollegeDekho, built clickstream tables and an article-tagging system that cut writer task time 300% and lifted on-site interaction 17%.",
    company: "CollegeDekho",
    logoSrc: "/logos/collegedekho.png",
  },
  {
    date: "2020-02-01",
    headlineValue: 580,
    headlineSuffix: "days to first capital",
    title: "Funded in a weekend",
    description:
      "Won Google Startup Weekend Jaipur with Intellibills and secured ₹100,000 from Atal Incubation Center and NITI Aayog.",
    company: "Google Startup Weekend",
    logoSrc: "/logos/google.png",
  },
  {
    date: "2021-05-01",
    headlineValue: 1035,
    headlineSuffix: "days of compounding",
    title: "Competitive intelligence",
    description:
      "At Mamaearth, streamed 100,000 competitor data points into SQL, forecasted product categories at 94% accuracy, and opened two new audience segments.",
    company: "Mamaearth",
    logoSrc: "/logos/mamaearth.png",
  },
  {
    date: "2022-01-01",
    headlineValue: 1280,
    headlineSuffix: "days on the floor",
    title: "Enterprise at Dell",
    description:
      "Twenty-two product presentations and twenty technical drawings for Dell data-center clients — support tickets down 15%.",
    company: "Dell Technologies",
    logoSrc: "/logos/dell.png",
  },
  {
    date: "2022-08-01",
    headlineValue: 1492,
    headlineSuffix: "days of analytic firepower",
    title: "Smith in Maryland",
    description:
      "M.S. Business Analytics (STEM) at Robert H. Smith. Migrated 2,000+ webpages. Won NASBITE International on a global healthcare GTM.",
    company: "University of Maryland",
    logoSrc: "/logos/umd.png",
  },
  {
    date: "2023-06-01",
    headlineValue: 1796,
    headlineSuffix: "days into agents",
    title: "Search gets a brain",
    description:
      "Blue Yonder internship: LLM search lifted content relevancy 22%; vector retrieval cut product runtime 50%.",
    company: "Blue Yonder",
    logoSrc: "/logos/blueyonder.png",
  },
  {
    date: "2024-02-01",
    headlineValue: 2041,
    headlineSuffix: "days of product velocity",
    title: "Seed-stage PM",
    description:
      "At Surmount AI, owned the roadmap across three teams, shipped 23 features and ~400 tickets, and helped close a $5M seed.",
    company: "Surmount AI",
    logoSrc: "/logos/surmount.png",
  },
  {
    date: "2024-06-01",
    headlineValue: 2162,
    headlineSuffix: "days of GTM",
    title: "Agentic GTM",
    description:
      "Influenced $20M+ of Blue Yonder pipeline (3M, PepsiCo, Coca-Cola, Stellantis). Demo setup 60 min → under 2. Weekly AI enablement to ~100.",
    company: "Blue Yonder",
    logoSrc: "/logos/blueyonder.png",
  },
  {
    date: "2026-01-01",
    headlineValue: 2741,
    headlineSuffix: "days of founding",
    title: "Taste at scale",
    description:
      "Founding Selects.film — an AI discovery engine aimed at the $2–5B taste gap inside a $230B streaming market.",
    company: "Selects.film",
    logoSrc: "/logos/selects.png",
  },
];

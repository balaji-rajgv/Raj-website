import rawJobs from "./jobs.json";

export interface JobRole {
  id: string;
  vrCode: string;
  title: string;
  department: string;
  team: string;
  location: string;
  workMode?: string;
  type: string;
  duration?: string;
  compensation?: string;
  eligibility?: string;
  opportunity?: string;
  level?: string;
  experience?: string;
  summary: string;
  aboutRole?: string;
  aboutWork?: string;
  skills: string[];
  responsibilities: string[];
  requirements: string[];
  preferredSkills?: string[];
  niceToHave?: string[];
  contactEmail?: string;
  contactPhone?: string;
  highlights?: string[];
}

export const careerBenefits = [
  {
    title: "Passionate Problem Solving",
    description: "We love digging into real challenges, cutting through noise, and building practical systems that drive measurable business outcomes.",
    badge: "Problem Solvers"
  },
  {
    title: "Remote & Flexible Work",
    description: "Work flexibly from anywhere. We value deep focus, reliable execution, and delivered results over micromanagement.",
    badge: "Flexible Work"
  },
  {
    title: "Permanent Full-Time Growth",
    description: "Internships at Raj Global Ventures come with direct potential for permanent full-time conversion based on performance.",
    badge: "PPO Opportunities"
  },
  {
    title: "Modern Production Stacks",
    description: "Gain hands-on experience with modern stacks: Flutter, Java, Spring Boot, Kafka, Redis, PostgreSQL, and high-performance distributed systems.",
    badge: "Modern Tech"
  },
  {
    title: "Direct Founder Collaboration",
    description: "Work shoulder-to-shoulder with senior engineers and founding leadership. Your work directly touches users and live production systems.",
    badge: "Direct Impact"
  },
  {
    title: "Three Generations of Heritage",
    description: "Backed by multi-generational business foundations. We invest in long-term human potential and sustainable career trajectories.",
    badge: "Enduring Foundation"
  }
];

export const hiringPhilosophy = {
  eyebrow: "HOW WE HIRE",
  title: "We look for people passionate about solving problems and driving business",
  description: "At Raj Global Ventures, we value curiosity, craftsmanship, and people who take ownership. We don't judge candidates by academic pedigree or arbitrary algorithm puzzles—we care about your ability to understand real-world problems and build software that drives real business value."
};

export const hiringProcessSteps = [
  {
    step: "01",
    title: "Application & Work Review",
    timeframe: "Prompt Turnaround",
    description: "We review your CV, GitHub, and live projects. We look for practical problem-solving ability, genuine enthusiasm, and clear communication."
  },
  {
    step: "02",
    title: "Conversational Discussion",
    timeframe: "30-45 Minutes",
    description: "A conversation with our engineering team about your background, projects you've built, and what drives your curiosity in technology."
  },
  {
    step: "03",
    title: "Practical Scenario Walkthrough",
    timeframe: "Real-world Focus",
    description: "No trick LeetCode puzzles. We walk through practical architectural scenarios, database modeling, or UI components relevant to our actual work."
  },
  {
    step: "04",
    title: "Offer & Onboarding",
    timeframe: "Transparent & Fast",
    description: "Clear expectations, transparent compensation, flexible schedule alignment, and welcoming you aboard our team."
  }
];

export const openPositions: JobRole[] = rawJobs as JobRole[];

export const careerFaqs = [
  {
    question: "Are these roles open to college students?",
    answer: "Yes! Pre-final-year and final-year students are actively encouraged to apply for our Software Engineering and Java Backend internships."
  },
  {
    question: "Can an internship convert into a full-time job?",
    answer: "Absolutely. Based on your performance and business requirements, successful interns may be offered permanent full-time employment."
  },
  {
    question: "What is the working mode?",
    answer: "All listed engineering roles are 100% remote with flexible hours."
  },
  {
    question: "How can I apply directly?",
    answer: "You can click on any job to view the full job description and submit your application online, email hr@rajgv.com with your CV and job VRcode, or message us on WhatsApp at +91 98657 98157."
  }
];

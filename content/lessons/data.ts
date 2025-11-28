export type LessonSection = {
    title: string;
    total: string;
    lessons: { title: string; time: string }[];
};

export type Lesson = {
    slug: string;
    title: string;
    subtitle: string;
    summary: string;
    videoUrl: string;
    category: string;
    bulletPoints: string[];
    metrics: {
        lessons: number;
        duration: string;
        reviews: string;
    };
    author: {
        name: string;
        role: string;
        avatar: string;
        bio: string;
    };
    sections: LessonSection[];
    sidebarLinks: string[];
    externalResources?: { label: string; url: string }[];
    isFeatured?: boolean;
    featuredOrder?: number;
    browseOrder?: number;
    thumbnail: string;
    heroImage: string;
    tagline: string;
};

export const lessons: Lesson[] = [
    {
        slug: "max-flow-systems",
        title: "Max-Flow Systems from A to Z",
        subtitle: "Designing resilient infrastructure for millions of requests.",
        summary:
            "Unlock the intuition behind network flows and matching problems. Whether you are prepping for interviews, building logistics software, or teaching your team, this series walks through theory, visual intuition, and production-grade implementations.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Courses · Algorithms",
        tagline: "Graph Theory",
        isFeatured: true,
        featuredOrder: 1,
        browseOrder: 1,
        thumbnail: "/img1.jpg",
        heroImage: "/img1.jpg",
        bulletPoints: [
            "Build intuition for network flow, cuts, and matching problems.",
            "Translate math into interactive diagrams powered by D3 and WebGL.",
            "Deploy flow services that scale to millions of requests.",
            "Pair theory notes with notebooks, quizzes, and coding katas."
        ],
        metrics: {
            lessons: 38,
            duration: "4h 30min",
            reviews: "4.9 ⭐ (212 reviews)"
        },
        author: {
            name: "Crystal Lucas",
            role: "Systems Engineer & Teaching Fellow",
            avatar: "/img2.jpg",
            bio: "Crystal designs distributed systems for robotics labs and mentors engineers on translating math into delightful interfaces."
        },
        sections: [
            {
                title: "01: Primer",
                total: "22 min",
                lessons: [
                    { title: "Introduction", time: "2 min" },
                    { title: "Why graphs?", time: "5 min" },
                    { title: "Residual networks", time: "12 min" },
                    { title: "Algorithm tour", time: "3 min" }
                ]
            },
            {
                title: "02: Intermediate Level Stuff",
                total: "1h 20min",
                lessons: [
                    { title: "Bipartite matching", time: "18 min" },
                    { title: "Scaling heuristics", time: "26 min" },
                    { title: "Visualization workshop", time: "36 min" }
                ]
            },
            {
                title: "03: Advanced Flows",
                total: "36 min",
                lessons: [
                    { title: "Push-relabel deep dive", time: "20 min" },
                    { title: "Dinic optimizations", time: "16 min" }
                ]
            },
            {
                title: "04: Imports & Graphics",
                total: "40 min",
                lessons: [
                    { title: "Parsing real networks", time: "15 min" },
                    { title: "Rendering custom widgets", time: "25 min" }
                ]
            },
            {
                title: "05: Systems in Practice",
                total: "1h 12min",
                lessons: [
                    { title: "Operations research case study", time: "32 min" },
                    { title: "Data streaming infra", time: "40 min" }
                ]
            },
            {
                title: "06: Summary",
                total: "8 min",
                lessons: [
                    { title: "Where to go next", time: "5 min" },
                    { title: "Project brief", time: "3 min" }
                ]
            }
        ],
        sidebarLinks: ["Dashboard", "eBook", "Courses", "Code Challenges", "Community"],
        externalResources: [
            { label: "Watch on YouTube", url: "https://youtube.com" },
            { label: "Download slides", url: "https://example.com/slides.pdf" }
        ]
    },
    {
        slug: "llm-debugging",
        title: "LLM Debugging & Ops",
        subtitle: "Tools for observing, testing, and deploying large language models.",
        summary:
            "Build a repeatable workflow for auditing prompts, tracing attention, and shipping reliable LLM-powered features across mobile, web, and data pipelines.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Courses · ML Platforms",
        tagline: "ML Ops",
        isFeatured: true,
        featuredOrder: 2,
        browseOrder: 2,
        thumbnail: "/img3.webp",
        heroImage: "/img3.webp",
        bulletPoints: [
            "Instrument transformers with interpretable logging.",
            "Create prompt regression suites for every release.",
            "Deploy guardrails and human-in-the-loop review pipelines.",
            "Measure cost, latency, and safety with production metrics."
        ],
        metrics: {
            lessons: 26,
            duration: "3h 15min",
            reviews: "4.8 ⭐ (158 reviews)"
        },
        author: {
            name: "Karissa Brown",
            role: "ML Platform Lead",
            avatar: "/img3.webp",
            bio: "Karissa has shipped multilingual copilots at scale and leads ML Ops initiatives for high-growth teams."
        },
        sections: [
            {
                title: "01: Foundations",
                total: "30 min",
                lessons: [
                    { title: "Entanglement primer", time: "10 min" },
                    { title: "Prompt regression", time: "10 min" },
                    { title: "Attention probes", time: "10 min" }
                ]
            },
            {
                title: "02: Production Readiness",
                total: "55 min",
                lessons: [
                    { title: "Latency budgets", time: "20 min" },
                    { title: "Cost shaping", time: "15 min" },
                    { title: "Safety playbook", time: "20 min" }
                ]
            }
        ],
        sidebarLinks: ["Dashboard", "eBook", "Courses", "Code Challenges", "Community"],
        externalResources: [{ label: "Prompt regression template", url: "https://example.com/llm-template" }]
    },
    {
        slug: "hardware-constrained-ux",
        title: "Hardware-Constrained UX",
        subtitle: "Designing responsive experiences for robotics & embedded systems.",
        summary:
            "Learn how to align system architecture with beautiful multi-device interfaces, from firmware budgets to experiential prototypes.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Courses · Systems",
        tagline: "Systems Design",
        isFeatured: false,
        browseOrder: 3,
        thumbnail: "/img2.jpg",
        heroImage: "/img2.jpg",
        bulletPoints: [
            "Model hardware constraints in your product brief.",
            "Prototype responsive controls with WebGL & CAN data.",
            "Align firmware, design, and PM for faster iterations."
        ],
        metrics: {
            lessons: 18,
            duration: "2h 45min",
            reviews: "4.7 ⭐ (103 reviews)"
        },
        author: {
            name: "Nadia Mensah",
            role: "Principal Systems Designer",
            avatar: "/img1.jpg",
            bio: "Nadia builds end-to-end experiences for robotics startups and automotive OEMs."
        },
        sections: [
            {
                title: "01: Constraints",
                total: "25 min",
                lessons: [
                    { title: "Board-level budgets", time: "10 min" },
                    { title: "Thermal envelopes", time: "15 min" }
                ]
            },
            {
                title: "02: Prototyping",
                total: "50 min",
                lessons: [
                    { title: "CAN bus playback", time: "20 min" },
                    { title: "Latency aware UI", time: "30 min" }
                ]
            }
        ],
        sidebarLinks: ["Dashboard", "eBook", "Courses", "Code Challenges", "Community"],
        externalResources: [{ label: "Hardware checklist", url: "https://example.com/hw-checklist" }]
    }
];


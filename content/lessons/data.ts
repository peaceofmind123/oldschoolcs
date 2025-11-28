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
};

export const lessons: Lesson[] = [
	{
		slug: "max-flow-systems",
		title: "Max-Flow Systems from A to Z",
		subtitle: "Product designer & engineer, based in Kathmandu.",
		summary:
			"Unlock the intuition behind network flows and matching problems. Whether you are prepping for interviews, building logistics software, or teaching your team, this series walks through theory, visual intuition, and production-grade implementations.",
		videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
		category: "Courses · Algorithms",
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
	}
];


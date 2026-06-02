export interface Project {
	name: string;
	href: string;
	description: string;
	tags: string[];
	// Optional: GitHub/npm projects omit it since their pages aren't a useful
	// preview. When absent, the card renders without an image.
	image?: string;
}

export const projects: Project[] = [
	{
		name: "ZSchema",
		href: "https://github.com/lullaby6/zschema",
		description:
			"PHP library to validate schemas and data types, inspired by Zod from TypeScript.",
		tags: ["PHP", "Library"],
		// image: "/assets/images/projects/zschema.webp", // GitHub page, no preview
	},
	{
		name: "Locale Drive",
		href: "https://www.npmjs.com/package/locale-drive",
		description:
			'Web app to share and transfer files across your local network, like a "Google Drive" for your LAN, built with Express.js and React.',
		tags: ["Express.js", "React", "JavaScript"],
		// image: "/assets/images/projects/Locale Drive.webp", // npm page, no preview
	},
	{
		name: "ChessGPT",
		href: "https://github.com/lullaby6/ChessGPT",
		description: "Python game that lets you play chess against ChatGPT.",
		tags: ["Python", "OpenAI"],
		// image: "/assets/images/projects/ChessGPT.webp", // GitHub page, no preview
	},
	{
		name: "Sviewer",
		href: "https://lullaby6.github.io/sviewer",
		description: "Image Viewer built with Vue3 and Tailwind CSS.",
		tags: ["Vue", "Tailwind CSS"],
		// image: "/assets/images/projects/Sviewer.webp",
	},
	{
		name: "Speed Coder",
		href: "https://lullaby6.github.io/speed-coder",
		description:
			"My own take on MonkeyType, a typing speed game made for programmers.",
		tags: ["JavaScript", "Game"],
		// image: "/assets/images/projects/Speed Coder.webp",
	},
	{
		name: "GitPush",
		href: "https://github.com/lullaby6/git-push",
		description:
			"Python CLI that runs git add, commit, and push in a single command.",
		tags: ["Python", "CLI"],
		// image: "/assets/images/projects/GitPush.webp", // GitHub page, no preview
	},
	{
		name: "Starbits",
		href: "https://starbits.site",
		description: "2D bullet hell game built with Phaser.js.",
		tags: ["Phaser", "JavaScript", "Game"],
		// image: "/assets/images/projects/Starbits.webp",
	},
	{
		name: "Fondo de Cine",
		href: "https://fondodecine.com.ar",
		description:
			"Landing page built with Astro for an independent film festival.",
		tags: ["Astro", "Landing Page", "Tailwind CSS"],
		// image: "/assets/images/projects/Fondo de Cine.webp",
	},
	{
		name: "Video Speed Control",
		href: "https://github.com/lullaby6/video-speed-control",
		description:
			"Chromium extension to control the playback speed of any video without limits (handy on YouTube).",
		tags: ["JavaScript", "Chrome Extension"],
		// image: "/assets/images/projects/Video Speed Control.webp", // GitHub page, no preview
	},
	{
		name: "Windows Explorer Toggle",
		href: "https://lullaby6.github.io/windows-explorer-toggle",
		description:
			"A C# windows desktop app to disable Windows Explorer to reduce RAM usage.",
		tags: ["C#", "Desktop"],
		// image: "/assets/images/projects/Windows Explorer Toggle.webp",
	},
	{
		name: "express-dir-routing",
		href: "https://www.npmjs.com/package/express-dir-routing",
		description:
			"A file-based routing system for express.js using directories like NextJS 13 or SvelteKit.",
		tags: ["Express.js", "JavaScript"],
		// image: "/assets/images/projects/express-dir-routing.webp", // npm page, no preview
	},
	{
		name: "custom-html-element",
		href: "https://www.npmjs.com/package/custom-html-element",
		description:
			"Create reusable and reactive Web Components using Custom Element API.",
		tags: ["JavaScript", "Web Components"],
		// image: "/assets/images/projects/custom-html-element.webp", // npm page, no preview
	},
	{
		name: "Input Transform",
		href: "https://www.npmjs.com/package/input-transform",
		description:
			"JavaScript library that provides various input transformations, such as formatting text, validating file uploads, and converting images to Base64 or WebP format.",
		tags: ["JavaScript", "Library"],
		// image: "/assets/images/projects/Input Transform.webp", // npm page, no preview
	},
	{
		name: "Generative Art Gallery",
		href: "https://lullaby6.github.io/generative-art-gallery/",
		description:
			"A growing gallery of my creative coding experiments, I'm just getting started.",
		tags: ["JavaScript", "Creative Coding"],
		// image: "/assets/images/projects/Generative Art Gallery.webp",
	},
	{
		name: "Minecraft Mods",
		href: "https://www.curseforge.com/members/lullaby6/projects?sortBy=TotalDownloads",
		description:
			"A collection of Minecraft mods I've created, with over 3 million downloads.",
		tags: ["Data-Packs", "Minecraft"],
		// image: "/assets/images/projects/Minecraft Mods.webp",
	},
	{
		name: "MC Block Creator",
		href: "https://lullaby6.github.io/mc-block-creator/",
		description:
			"Minecraft Web Tool to generate custom blocks with display entities built with React.",
		tags: ["React", "Minecraft"],
		// image: "/assets/images/projects/MC Block Creator.webp",
	},
];

export interface Project {
	name: string;
	href: string;
	description: string;
	iframe?: boolean;
	image?: string;
}

export const projects: Project[] = [
	{
		name: "ZSchema",
		href: "https://github.com/lullaby6/zschema",
		description:
			"PHP library to validate schemas and data types, inspired by Zod from TypeScript.",
		iframe: false,
		image: "/assets/images/projects/zschema.png",
	},
	{
		name: "Locale Drive",
		href: "https://www.npmjs.com/package/locale-drive",
		description:
			'Web app to share and transfer files across your local network, like a "Google Drive" for your LAN, built with Express.js and React.',
		iframe: false,
		image: "/assets/images/projects/Locale Drive.png",
	},
	{
		name: "ChessGPT",
		href: "https://github.com/lullaby6/ChessGPT",
		description: "Python game that lets you play chess against ChatGPT.",
		iframe: false,
		image: "/assets/images/projects/ChessGPT.png",
	},
	{
		name: "Sviewer",
		href: "https://sviewer.vercel.app",
		description: "Image Viewer built with Vue3 and Tailwind CSS.",
	},
	{
		name: "Speed Coder",
		href: "https://lullaby6.github.io/speed-coder",
		description:
			"My own take on MonkeyType, a typing speed game made for programmers.",
	},
	{
		name: "GitPush",
		href: "https://github.com/lullaby6/git-push",
		description:
			"Python CLI that runs git add, commit, and push in a single command.",
		iframe: false,
		image: "/assets/images/projects/GitPush.png",
	},
	{
		name: "Starbits",
		href: "https://starbits.site",
		description: "2D bullet hell game built with Phaser.js.",
	},
	{
		name: "Fondo de Cine",
		href: "https://fondodecine.com.ar",
		description:
			"Landing page built with Astro for an independent film festival.",
	},
	{
		name: "Video Speed Control",
		href: "https://github.com/lullaby6/video-speed-control",
		description:
			"Chromium extension to control the playback speed of any video without limits (handy on YouTube).",
		iframe: false,
		image: "/assets/images/projects/Video Speed Control.png",
	},
	{
		name: "Windows Explorer Toggle",
		href: "https://lullaby6.github.io/windows-explorer-toggle",
		description:
			"C# Desktop App that disables Windows Explorer to free up system resources.",
	},
	{
		name: "express-dir-routing",
		href: "https://www.npmjs.com/package/custom-html-element",
		description:
			"A file-based routing system for express.js using directories like NextJS 13 or SvelteKit.",
		iframe: false,
	},
	{
		name: "custom-html-element",
		href: "https://www.npmjs.com/package/custom-html-element",
		description:
			"Create reusable and reactive Web Components using Custom Element API.",
		iframe: false,
		image: "/assets/images/projects/custom-html-element.png",
	},
	{
		name: "Input Transform",
		href: "https://www.npmjs.com/package/input-transform",
		description:
			"JavaScript library that provides various input transformations, such as formatting text, validating file uploads, and converting images to Base64 or WebP format.",
		iframe: false,
		image: "/assets/images/projects/Input Transform.png",
	},
	{
		name: "Generative Art Gallery",
		href: "https://lullaby6-generative-art-gallery.vercel.app",
		description:
			"A growing gallery of my creative coding experiments, I'm just getting started.",
	},
	{
		name: "Minecraft Mods",
		href: "https://www.curseforge.com/members/lullaby6/projects?sortBy=TotalDownloads",
		description:
			"A collection of Minecraft mods I've created, with over 3 million downloads.",
		iframe: false,
		image: "/assets/images/projects/Minecraft Mods.png",
	},
];

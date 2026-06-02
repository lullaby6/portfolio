export interface Project {
	name: string;
	href: string;
	description: string;
	image: string;
}

export const projects: Project[] = [
	{
		name: "ZSchema",
		href: "https://github.com/lullaby6/zschema",
		description:
			"PHP library to validate schemas and data types, inspired by Zod from TypeScript.",
		image: "/assets/images/projects/zschema.png",
	},
	{
		name: "Locale Drive",
		href: "https://www.npmjs.com/package/locale-drive",
		description:
			'Web app to share and transfer files across your local network, like a "Google Drive" for your LAN, built with Express.js and React.',
		image: "/assets/images/projects/Locale Drive.png",
	},
	{
		name: "ChessGPT",
		href: "https://github.com/lullaby6/ChessGPT",
		description: "Python game that lets you play chess against ChatGPT.",
		image: "/assets/images/projects/ChessGPT.png",
	},
	{
		name: "Sviewer",
		href: "https://lullaby6.github.io/sviewer",
		description: "Image Viewer built with Vue3 and Tailwind CSS.",
		image: "/assets/images/projects/Sviewer.png",
	},
	{
		name: "Speed Coder",
		href: "https://lullaby6.github.io/speed-coder",
		description:
			"My own take on MonkeyType, a typing speed game made for programmers.",
		image: "/assets/images/projects/Speed Coder.png",
	},
	{
		name: "GitPush",
		href: "https://github.com/lullaby6/git-push",
		description:
			"Python CLI that runs git add, commit, and push in a single command.",
		image: "/assets/images/projects/GitPush.png",
	},
	{
		name: "Starbits",
		href: "https://starbits.site",
		description: "2D bullet hell game built with Phaser.js.",
		image: "/assets/images/projects/Starbits.png",
	},
	{
		name: "Fondo de Cine",
		href: "https://fondodecine.com.ar",
		description:
			"Landing page built with Astro for an independent film festival.",
		image: "/assets/images/projects/Fondo de Cine.png",
	},
	{
		name: "Video Speed Control",
		href: "https://github.com/lullaby6/video-speed-control",
		description:
			"Chromium extension to control the playback speed of any video without limits (handy on YouTube).",
		image: "/assets/images/projects/Video Speed Control.png",
	},
	{
		name: "Windows Explorer Toggle",
		href: "https://lullaby6.github.io/windows-explorer-toggle",
		description:
			"C# Desktop App that disables Windows Explorer to free up system resources.",
		image: "/assets/images/projects/Windows Explorer Toggle.png",
	},
	{
		name: "express-dir-routing",
		href: "https://www.npmjs.com/package/express-dir-routing",
		description:
			"A file-based routing system for express.js using directories like NextJS 13 or SvelteKit.",
		image: "/assets/images/projects/express-dir-routing.png",
	},
	{
		name: "custom-html-element",
		href: "https://www.npmjs.com/package/custom-html-element",
		description:
			"Create reusable and reactive Web Components using Custom Element API.",
		image: "/assets/images/projects/custom-html-element.png",
	},
	{
		name: "Input Transform",
		href: "https://www.npmjs.com/package/input-transform",
		description:
			"JavaScript library that provides various input transformations, such as formatting text, validating file uploads, and converting images to Base64 or WebP format.",
		image: "/assets/images/projects/Input Transform.png",
	},
	{
		name: "Generative Art Gallery",
		href: "https://lullaby6.github.io/generative-art-gallery/",
		description:
			"A growing gallery of my creative coding experiments, I'm just getting started.",
		image: "/assets/images/projects/Generative Art Gallery.png",
	},
	{
		name: "Minecraft Mods",
		href: "https://www.curseforge.com/members/lullaby6/projects?sortBy=TotalDownloads",
		description:
			"A collection of Minecraft mods I've created, with over 3 million downloads.",
		image: "/assets/images/projects/Minecraft Mods.png",
	},
];

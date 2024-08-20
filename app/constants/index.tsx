// export const navLinks = [
// 	{
// 		id: "about",
// 		title: "About",
// 	},
// 	{
// 		id: "work",
// 		title: "Work",
// 	},
// 	{
// 		id: "contact",
// 		title: "Contact",
// 	},
// ];

const services = [
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "UI Designer",
		icon: "/mobile.webp",
	},
	{
		title: "UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Content Creator",
		icon: "/creator.webp",
	},
];



const testimonials = [
	// {
	// 	id: 1,
	// 	testimonial:
	// 		"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
	// 	name: "Om Patel",
	// 	image: "/socialmedia/behance.svg",
	// 	link: "https://www.behance.net/omthecreator",
	// },
	{
		id: 2,
		testimonial: 
		"I came up with the exact reasons I have seen in my life. " + 
		"🌏 Why Hiring Foreign Talented Students Makes Perfect Sense! 🌏",
	name: "Turabaev Azizbek",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/posts/turabaev-azizbek-a5ab921a0_hiringtalent-diversitymatters-globalworkforce-activity-7115272147874316288-7Md6?utm_source=share&utm_medium=member_desktop",
	},
	{
		id: 3,
		testimonial:
			"AI",
		name: "Adam",
		image: "/socialmedia/telogo.png",
		link: "https://t.me/turabaev9/22",
	},
	// {
	// 	id: 4,
	// 	testimonial:
	// 		"Also do check out my UI/UX Portfolio where I have shared by design studies.",
	// 	name: "Om Patel",
	// 	image: "/socialmedia/portfolio.svg",
	// 	link: "https://omthecreator.netlify.app/",
	// },
	// {
	// 	id: 5,
	// 	testimonial:
	// 		"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
	// 	name: "Om Patel",
	// 	image: "/tech/github.webp",
	// 	link: "https://github.com/omunite215",
	// },
];

const projects = [
	{
		name: "Smart Car",
		description:
			"Raspberry pi web-controlled car, IoT + object detection",
		tags: [
			{
				name: "Raspberry",
				color: "blue-text-gradient",
			},
			{
				name: "IoT",
				color: "pink-text-gradient",
			},
			{
				name: "robot",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/car2.webp",
		source_code_link:
			"https://github.com/turabaev69/PiAdam50",
		netlify_link: "",
	},
	{
		name: "AI crawling website ",
		description:
			"자동적으로 다른 웹사이트에서 뉴스를 크롤링하여 매일 한 곳에 가져오고 필요에 따라 구독자에게 뉴스를 보냅니다",
		tags: [
			{
				name: "AI",
				color: "blue-text-gradient",
			},
			{
				name: "Python",
				color: "orange-text-gradient",
			},
			{
				name: "React",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/daewong.webp",
		source_code_link: "https://github.com/turabaev69",
		netlify_link: "http://ec2-3-35-235-235.ap-northeast-2.compute.amazonaws.com/news",
	},
	{
		name: "HooBank",
		description:
			"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/daewong.webp",
		source_code_link: "https://github.com/turabaev69",
		netlify_link: "http://ec2-3-35-235-235.ap-northeast-2.compute.amazonaws.com/news",
	},
	{
		name: "Provid A Youtube Clone",
		description:
			"Provid is a YouTube clone project built with React, Material UI, and Tailwind CSS. The platform has been designed with a stunning dark mode that enhances the viewing experience. The user interface is intuitive and easy to navigate, ensuring that users can easily find the content they're looking for.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "rapidapi",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/provid.webp",
		source_code_link: "",
		netlify_link: "",
	},
	{
		name: "YokelFlex (group project)",
		description:
			"YokelFlex is an application to watch movies and discuss them with your friends, IOS/Android + custom website to invite users",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "Nodejs",
				color: "green-text-gradient",
			},
			{
				name: "IOS",
				color: "orange-text-gradient",
			},
			{
				name: "Android",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/Yokeflex.webp",
		source_code_link: "https://github.com/turabaev69/YokelFlex",
		netlify_link: "https://github.com/turabaev69/YokelFlex/blob/main/videos/demo.mp4",
	},
];

export { services, testimonials, projects };

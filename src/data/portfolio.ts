export type PersonalInfo = {
	name: string;
	title: string;
	bio: string;
	location: string;
	email: string;
	cvUrl: string;
	avatar: string;
};

export type SkillCategory = {
	category: string;
	items: string[];
};

export type Project = {
	id: string;
	title: string;
	description: string;
	techs: string[];
	liveUrl: string;
	repoUrl: string;
	image?: string;
};

export type TimelineItem = {
	id: string;
	type: "experience" | "education";
	title: string;
	place: string;
	start: string;
	end: string;
	details: string[];
};

export type GalleryItem = {
	id: string;
	title: string;
};

export type SocialIcon = "github" | "linkedin" | "instagram" | "whatsapp";

export type SocialLink = {
	label: string;
	url: string;
	icon: SocialIcon;
};

export type HeroContent = {
	badge: string;
	greeting: string;
	primaryCta: string;
	secondaryCta: string;
};

export type SectionContent = {
	eyebrow: string;
	title: string;
	subtitle: string;
};

export type AboutContent = SectionContent & {
	paragraphs: string[];
	image: string;
};

export const personalInfo: PersonalInfo = {
	name: "WAEL ASAAD",
	title: "Software Developer",
	bio: "Computer Engineering graduate (GPA 3.18/4.00) with expertise in frontend development, machine learning, and IoT. Experienced in React, TypeScript, and Python. Available for software development opportunities.",
	location: "Turkey, Sivas",
	email: "wailasad06@gmail.com",
	cvUrl: "/WAEL ASSAD CV-EN.pdf",
	avatar: "images/Avatar1.png",
};

export const heroContent: HeroContent = {
	badge: "Open to opportunities",
	greeting: "Hello, I am",
	primaryCta: "Contact",
	secondaryCta: "Download CV",
};

export const aboutContent: AboutContent = {
	eyebrow: "About",
	title: "Computer Engineering Graduate & Software Developer",
	subtitle:
		"I'm a graduate from Sivas Cumhuriyet University with expertise in frontend development, machine learning, and IoT projects. Passionate about clean code and modern technologies.",
	paragraphs: [
		"I graduated from Sivas Cumhuriyet University's Computer Engineering program with a GPA of 3.18/4.00. I have hands-on experience in frontend development, machine learning, and IoT technologies gained through university projects and professional internships.",
		"My technical stack includes React, TypeScript, JavaScript, Tailwind CSS for frontend development, and Python, Keras, OpenCV for machine learning and computer vision projects. I work with databases like MySQL and MSSQL Server.",
		"I have completed internships at leading tech companies including Sivas Cumhuriyet University (Deep Learning), Qkare Bilgi Teknolojileri (Frontend Development), and Software Persona/TNC Group (Software Development). Strong problem-solver with excellent analytical thinking and team collaboration skills.",
	],
	image: "images/Avatar.png",
};

export const sectionContent = {
	skills: {
		eyebrow: "Skills",
		title: "My technical skill ",
		subtitle:
			"A combination of frontend, programming, deep learning, and engineering skills gained through university and hands-on projects.",
	},

	projects: {
		eyebrow: "Projects",
		title: "Selected projects",
		subtitle:
			"A collection of projects built with React, TypeScript, and modern UI practices.",
	},

	timeline: {
		eyebrow: "Journey",
		title: "Education & experience",
		subtitle:
			"My learning path, university milestones, and practical projects along the way.",
	},

	Certificates: {
		eyebrow: "Certificates",
		title: "Certificates & highlights",
		subtitle:
			"Certificates, achievements, and visual proof of my work and progress.",
	},

	contact: {
		eyebrow: "Contact",
		title: "Let's build something together",
		subtitle:
			"Send me a message. I’m open to internships, freelance projects, and collaborations.",
	},
} satisfies Record<string, SectionContent>;

export const socialLinks: SocialLink[] = [
	{ label: "GitHub", url: "https://github.com/AsaadWael", icon: "github" },
	{
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/wael-assad-3b5ba9295/",
		icon: "linkedin",
	},
	{
		label: "Instagram",
		url: "https://www.instagram.com/wail.asad",
		icon: "instagram",
	},
	{ label: "WhatsApp", url: "https://wa.me/905388926903", icon: "whatsapp" },
];

export const skills: SkillCategory[] = [
	{
		category: "Programming Languages",
		items: ["Java", "Python", "C#", "JavaScript", "TypeScript", "SQL", "PHP"],
	},
	{
		category: "Frontend Development",
		items: ["React", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
	},
	{
		category: "Machine Learning & AI",
		items: [
			"Deep Learning",
			"Machine Learning",
			"CNN",
			"Keras",
			"OpenCV",
			"Image Processing",
		],
	},
	{
		category: "Databases",
		items: ["MSSQL Server", "MySQL"],
	},
	{
		category: "Tools & Technologies",
		items: [
			"Git & GitHub",
			"VS Code",
			"IntelliJ IDEA",
			"Figma",
			"Linux",
			"VMware",
			"Microsoft Office",
		],
	},
];

export const projects: Project[] = [
	{
		id: "personal-portfolio",
		title: "Personal Portfolio Website",
		description:
			"A personal portfolio website built with React, TypeScript, and Tailwind CSS to showcase my skills, projects, and experience.",
		techs: ["React", "TypeScript", "Tailwind CSS", "Vite"],
		liveUrl: "",
		repoUrl: "https://github.com/AsaadWael",
		image: "images/kisisel_blog.png",
	},
	{
		id: "hospital-management-system",
		title: "Hospital Management System",
		description:
			"A comprehensive hospital management system with doctor, patient, and admin panels. Manages patient records, appointments, and administrative workflows with a responsive interface.",
		techs: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
		liveUrl: "",
		repoUrl: "https://github.com/AsaadWael",
		image: "images/hms.png",
	},
	{
		id: "iot-face-recognition",
		title: "Face Recognition Door Lock (IoT)",
		description:
			"An intelligent door access system using face recognition technology built with Python, OpenCV, and Raspberry Pi. Provides secure access control through facial verification.",
		techs: ["Python", "OpenCV", "Raspberry Pi", "HTML", "CSS", "JavaScript"],
		liveUrl: "https://youtu.be/7WJINYLBhFc?si=CO6WruUfK329Kf2s",
		repoUrl: "https://github.com/AsaadWael",
		image: "images/opencv.png",
	},
	{
		id: "course-selection-system",
		title: "Course Information System",
		description:
			"A responsive web application that allows Computer Engineering students to view course information organized by academic year and semester.",
		techs: ["HTML", "CSS", "JavaScript"],
		liveUrl: "",
		repoUrl: "https://github.com/AsaadWael",
		image: "images/scu_ders.png",
	},
];

export const timeline: TimelineItem[] = [
	{
		id: "edu-01",
		type: "education",
		title: "Bachelor of Science in Computer Engineering",
		place: "Sivas Cumhuriyet University",
		start: "2022",
		end: "2026",
		details: [
			"Graduated with GPA: 3.18/4.00",
			"Studied core computer engineering subjects including algorithms, data structures, and software engineering.",
			"Completed academic projects in frontend development, deep learning, and IoT technologies.",
		],
	},
	{
		id: "edu-02",
		type: "education",
		title: "High School Education",
		place: "IBB Yavuz Sultan Anadolu Imam Hatip High School",
		start: "2018",
		end: "2022",
		details: ["Grade Average: 80/100"],
	},
	{
		id: "edu-03",
		type: "education",
		title: "AI Specialization Program",
		place:
			"National Technology Academy (T.C. Ministry of Industry and Technology)",
		start: "Jan 2026",
		end: "Apr 2026",
		details: [
			"Completed the Artificial Intelligence Specialization Program with basic training certificate.",
			"Attended 10-session training program under the National Technology Initiative.",
		],
	},

	{
		id: "intern-01",
		type: "experience",
		title: "Deep Learning Intern",
		place: "Sivas Cumhuriyet University",
		start: "Jul 2025",
		end: "Aug 2025",
		details: [
			"Developed image processing applications using Python and Keras.",
			"Worked on image super-resolution project using U-Net architecture.",
			"Gained hands-on experience in model training, evaluation, and optimization.",
			"Completed a supervised 25-day internship under departmental guidance.",
		],
	},

	{
		id: "intern-02",
		type: "experience",
		title: "Front-End Developer Intern",
		place: "Qkare Bilgi Teknolojileri",
		start: "Sep 2025",
		end: "Jan 2026",
		details: [
			"Developed responsive user interfaces using React and Tailwind CSS.",
			"Built modern web pages with HTML5, CSS3, and JavaScript.",
			"Performed UI optimization, bug fixing, and component development.",
			"Collaborated with senior developers following professional project workflows.",
			"Applied Git-based version control and industry development standards.",
		],
	},
	{
		id: "intern-03",
		type: "experience",
		title: "Software Development Intern",
		place: "Software Persona – TNC Group",
		start: "Jan 2025",
		end: "Feb 2026",
		details: [
			"Worked on SQL-based database applications and web development projects.",
			"Designed UI/UX interfaces using Figma.",
			"Participated in mobile app development for Android and iOS platforms.",
			"Gained comprehensive experience in full-stack development and user experience design.",
		],
	},
];

export const galleryItems: GalleryItem[] = [
	{
		id: "cert-01",
		title: "HTML5 Web Development – BTK Academy (Jan 2025)",
	},
	{
		id: "cert-02",
		title:
			"Artificial Intelligence Specialization Program – Basic Training Certificate (Apr 2026)",
	},
	{
		id: "cert-03",
		title:
			"Software Internship Participation Certificate – Software Persona / TNC Group",
	},
	{
		id: "cert-04",
		title:
			"Project Writing Training Participation Certificate – Ogrenci Kariyeri (Jan 2026)",
	},
	{
		id: "cert-05",
		title: "Gemini Certified Educator – Google for Education (Nov 2025)",
	},
];

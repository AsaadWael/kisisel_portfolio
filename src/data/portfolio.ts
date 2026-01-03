
export type PersonalInfo = {
  name: string
  title: string
  bio: string
  location: string
  email: string
  cvUrl: string
  avatar: string
}

export type SkillCategory = {
  category: string
  items: string[]
}

export type Project = {
  id: string
  title: string
  description: string
  techs: string[]
  liveUrl: string
  repoUrl: string
  image?: string
}

export type TimelineItem = {
  id: string
  type: 'experience' | 'education'
  title: string
  place: string
  start: string
  end: string
  details: string[]
}

export type GalleryItem = {
  id: string
  title: string
}

export type SocialIcon = 'github' | 'linkedin' | 'instagram' | 'whatsapp'

export type SocialLink = {
  label: string
  url: string
  icon: SocialIcon
}

export type HeroContent = {
  badge: string
  greeting: string
  primaryCta: string
  secondaryCta: string
}

export type SectionContent = {
  eyebrow: string
  title: string
  subtitle: string
}

export type AboutContent = SectionContent & {
  paragraphs: string[]
  image: string
}

export const personalInfo: PersonalInfo = {
	name: "WAEL ASAAD",
	title: "Junior Frontend Developer",
	bio: "Computer Engineering student passionate about building modern frontend applications with React, TypeScript, and clean UI design.",
	location: "Turkey, Sivas",
	email: "wailasad06@gmail.com",
	cvUrl: "/images/CV.pdf",
	avatar: "/images/Avatar1.png",
};

export const heroContent: HeroContent = {
	badge: "Open to opportunities",
	greeting: "Hello, I am",
	primaryCta: "Contact",
	secondaryCta: "Download CV",
};

export const aboutContent: AboutContent = {
	eyebrow: "About",
	title: "Building modern web interfaces",
	subtitle:
		"I focus on building clean, responsive, and user-friendly web interfaces using modern frontend technologies.",
	paragraphs: [
		"I am a Computer Engineering student with a strong interest in frontend development. I enjoy turning ideas into interactive and visually appealing web applications.",
		"I work mainly with React, TypeScript, and Tailwind CSS, focusing on clean code, responsive design, and performance.",
		"I am constantly learning new technologies and improving my skills through personal projects and university coursework.",
	],
	image: "/images/Avatar.png",
};

export const sectionContent = {
  skills: {
    eyebrow: 'Skills',
    title: 'My technical skill ',
    subtitle:
      'A combination of frontend, programming, deep learning, and engineering skills gained through university and hands-on projects.',
  },

  projects: {
    eyebrow: 'Projects',
    title: 'Selected projects',
    subtitle: 'A collection of projects built with React, TypeScript, and modern UI practices.',
  },

  timeline: {
    eyebrow: 'Journey',
    title: 'Education & experience',
    subtitle: 'My learning path, university milestones, and practical projects along the way.',
  },

  Certificates: {
    eyebrow: 'Certificates',
    title: 'Certificates & highlights',
    subtitle: 'Certificates, achievements, and visual proof of my work and progress.',
  },

  contact: {
    eyebrow: 'Contact',
    title: "Let's build something together",
    subtitle: 'Send me a message. I’m open to internships, freelance projects, and collaborations.',
  },
} satisfies Record<string, SectionContent>

export const socialLinks: SocialLink[] = [
	{ label: "GitHub", url: "https://github.com/AsaadWael", icon: "github" },
	{
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/wael-assad-3b5ba9295/",
		icon: "linkedin",
	},
	{ label: "Instagram", url: "https://www.instagram.com/wail.asad", icon: "instagram" },
	{ label: "WhatsApp", url: "https://wa.me/905388926903", icon: "whatsapp" },
];

export const skills: SkillCategory[] = [
	{
		category: "Frontend Development",
		items: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Responsive Design",
		],
	},
	{
		category: "Programming",
		items: ["Java", "PHP", "JavaScript", "TypeScript","MySQL","Python Basics"],
	},
	{
		category: "Deep Learning & AI",
		items: [
			"Deep Learning Basics",
			"Image Processing",
			"U-Net Architecture",
			"Keras",
			"Model Training & Evaluation",
		],
	},
	{
		category: "IoT & Embedded Systems",
		items: [
			"Raspberry Pi",
			"STM32",
			"ARM Architecture",
			"UART Communication",
		],
	},
	{
		category: "Tools & Technologies",
		items: ["Git & GitHub", "VS Code", "Microsoft Office"],
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
		image: "/images/kişisel_blog.png",
	},
	{
		id: "course-selection-system",
		title: "SCU Course Selection System",
		description:
			"A web-based system that allows Computer Engineering students to select their academic year and semester to view course information through a clean, organized, and responsive interface.",
		techs: ["HTML", "CSS", "JavaScript"],
		liveUrl: "",
		repoUrl: "https://github.com/AsaadWael",
		image: "/images/scu_ders.png",
	},

	{
		id: "hospital-management-system",
		title: "Hospital Management System ",
		description:
			"A frontend interface for a Hospital Management System that manages patients, doctors, appointments, and basic administrative workflows with a clean and responsive UI.",
		techs: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
		liveUrl: "",
		repoUrl: "https://github.com/AsaadWael",
		image: "/images/hms.png",
	},
	{
		id: "iot-face-recognition",
		title: "Face Recognition Door Lock (IoT)",
		description:
			"An IoT-based project using face recognition to control door access, developed as part of university coursework.",
		techs: ["Python", "OpenCV", "Raspberry Pi", "HTML", "CSS", "JavaScript"],
		liveUrl: "https://youtu.be/7WJINYLBhFc?si=CO6WruUfK329Kf2s",
		repoUrl: "https://github.com/AsaadWael",
		image: "/images/opencv.png",
	},
];

export const timeline: TimelineItem[] = [
	{
		id: "edu-01",
		type: "education",
		title: "Bachelor of Science in Computer Engineering",
		place: "Sivas Cumhuriyet University",
		start: "2022",
		end: "Present",
		details: [
			"Studying core computer engineering subjects including algorithms, data structures, and software engineering.",
			"Actively working on frontend, deep learning, and IoT-related academic projects.",
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
			"Conducted research and practical work in the field of deep learning.",
			"Developed an image super-resolution project using Python, Keras, and the U-Net architecture.",
			"Gained hands-on experience in image processing, model training, and performance evaluation.",
			"Completed a supervised 25-day internship under Dr. Kâli (Head of Department).",
		],
	},

	{
		id: "intern-02",
		type: "experience",
		title: "Front-End Developer Intern",
		place: "Qkare Bilgi Teknolojileri",
		start: "Sep 2025",
		end: "Dec 2025",
		details: [
			"Developing and maintaining modern user interfaces using HTML, CSS, and JavaScript.",
			"Gained hands-on experience with React and Tailwind CSS for building dynamic and responsive UI components.",
			"Collaborating with senior developers on real front-end tasks including component development, UI optimization, and bug fixing.",
			"Working with Git and professional project workflows to follow industry development standards.",
			"Improving problem-solving skills and applying best practices for scalable front-end development.",
		],
	},
];


export const galleryItems: GalleryItem[] = [
	{
		id: "cert-01",
		title: "HTML5 Web Development – BTK Academy",
	},
	{
		id: "cert-02",
		title: "Programming & AI Project Experience – Sivas Cumhuriyet University",
	},
	{
		id: "cert-03",
		title: "Deep Learning Internship Certification",
	
	},
];
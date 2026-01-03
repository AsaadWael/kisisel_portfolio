import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
				nav: {
					home: "Home",
					about: "About",
					skills: "Skills",
					projects: "Projects",
					journey: "Journey",
					gallery: "Certificates",
					contact: "Contact",
				},
				hero: {
					badge: "Open to opportunities",
					greeting: "Hello, I am",
					primaryCta: "Contact",
					secondaryCta: "Download CV",
				},
				about: {
					eyebrow: "About",
					title: "Computer Engineering student & Junior Frontend Developer",
					subtitle:
						"I enjoy building modern, clean, and responsive web interfaces while continuously improving my skills through real projects and internships.",
					paragraphs: [
						"I am a Computer Engineering student at Sivas Cumhuriyet University with a strong interest in frontend development and modern web technologies.",
						"I have hands-on experience building user interfaces using React, TypeScript, and Tailwind CSS, and I enjoy focusing on clean code, usability, and responsive design.",
						"In addition to frontend development, I have worked on academic and internship projects in deep learning and IoT, which helped me build a strong technical foundation and problem-solving mindset.",
					],
					locationLine:
						"{{name}} is currently based in {{location}}, available for focused collaborations.",
				},
				sections: {
					skills: {
						eyebrow: "Skills",
						title: "My technical skill set",
						subtitle:
							"A combination of frontend, programming, deep learning, and engineering skills gained through university and hands-on projects.",
					},
					projects: {
						eyebrow: "Projects",
						title: "Projects",
						subtitle:
							"A collection of projects built with React, TypeScript, and modern UI practices.",
					},
					timeline: {
						eyebrow: "Journey",
						title: "Education & experience",
						subtitle:
							"My learning path, university milestones, and practical projects along the way.",
					},
					gallery: {
						eyebrow: "Certificates",
						title: "Certificates & highlights",
						subtitle:
							"Certificates, achievements, and visual proof of my work and progress.",
					},
					contact: {
						eyebrow: "Contact",
						title: "Let's build something together",
						subtitle:
							"Send me a message. I am open to internships, freelance projects, and collaborations.",
					},
				},
				personal: {
					title: "Junior Frontend Developer",
					bio: "Computer Engineering student passionate about building modern frontend applications with React, TypeScript, and clean UI design.",
					location: "Turkey, Sivas",
				},
				skills: [
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
						items: [
							"Java",
							"PHP",
							"JavaScript",
							"TypeScript",
							"MySQL",
							"Python Basics",
						],
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
				],
				projects: {
					live: "Live",
					repo: "Repo",
					items: {
						"personal-portfolio": {
							title: "Personal Portfolio Website",
							description:
								"A personal portfolio website built with HTML, CSS, React, TypeScript, and Tailwind CSS to showcase my skills, projects, and experience.",
							techs: ["React", "TypeScript", "Tailwind CSS", "Vite"],
						},
						"course-selection-system": {
							title: "SCU Course Information System",
							description:
								"A web-based system that allows Computer Engineering students to select their academic year and semester to view course information through a clean, organized, and responsive interface.",
							techs: ["HTML", "CSS", "JavaScript"],
						},
						"hospital-management-system": {
							title: "Hospital Management System",
							description:
								"A frontend interface for a Hospital Management System that manages patients, doctors, appointments, and basic administrative workflows with a clean and responsive UI.",
							techs: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
						},
						"iot-face-recognition": {
							title: "Face Recognition Door Lock (IoT)",
							description:
								"An IoT-based project using face recognition to control door access, developed as part of university coursework.",
							techs: [
								"Python",
								"OpenCV",
								"Raspberry Pi",
								"HTML",
								"CSS",
								"JavaScript",
							],
						},
					},
				},
				timeline: {
					types: {
						experience: "Experience",
						education: "Education",
					},
					items: {
						"edu-01": {
							title: "Bachelor of Science in Computer Engineering",
							place: "Sivas Cumhuriyet University",
							details: [
								"Studying core computer engineering subjects including algorithms, data structures, and software engineering.",
								"Actively working on frontend, deep learning, and IoT-related academic projects.",
							],
						},
						"intern-01": {
							title: "Deep Learning Intern",
							place: "Sivas Cumhuriyet University",
							details: [
								"Conducted research and practical work in the field of deep learning.",
								"Developed an image super-resolution project using Python, Keras, and the U-Net architecture.",
								"Gained hands-on experience in image processing, model training, and performance evaluation.",
								"Completed a supervised 25-day internship under Dr. Kili (Head of Department).",
							],
						},
						"intern-02": {
							title: "Front-End Developer Intern",
							place: "Qkare Bilgi Teknolojileri",
							details: [
								"Developing and maintaining modern user interfaces using HTML, CSS, and JavaScript.",
								"Gained hands-on experience with React and Tailwind CSS for building dynamic and responsive UI components.",
								"Collaborating with senior developers on real front-end tasks including component development, UI optimization, and bug fixing.",
								"Working with Git and professional project workflows to follow industry development standards.",
								"Improving problem-solving skills and applying best practices for scalable front-end development.",
							],
						},
					},
				},
				gallery: {
					certificate: "Certificate",
					issued: "Issued",
					items: {
						"cert-01": "HTML5 Web Development - BTK Academy",
						"cert-02":
							"Programming & AI Project Experience - Sivas Cumhuriyet University",
						"cert-03": "Deep Learning Internship Certification",
					},
				},
				contact: {
					name: "Name",
					email: "Email",
					message: "Message",
					send: "Send message",
					sent: "Message sent!",
					preferEmail: "Prefer email? Reach me at",
					errors: {
						name: "Please enter your name.",
						email: "Please enter a valid email.",
						message: "Message should be at least 10 characters.",
					},
				},
				actions: {
					lightMode: "Light mode",
					darkMode: "Dark mode",
				},
				language: {
					switch: "TR",
				},
			},
		},
		tr: {
			translation: {
				nav: {
					home: "Ana Sayfa",
					about: "Hakkımda",
					skills: "Yetenekler",
					projects: "Projeler",
					journey: "Yolculuk",
					gallery: "Sertifikalar",
					contact: "İletişim",
				},
				hero: {
					badge: "Fırsatlara açık",
					greeting: "Merhaba, ben",
					primaryCta: "İletişim",
					secondaryCta: "CV indir",
				},
				about: {
					eyebrow: "Hakkımda",
					title:
						"Bilgisayar Mühendisliği öğrencisi & Junior Frontend Developer",
					subtitle:
						"Modern, temiz ve responsive web arayüzleri geliştirirken gerçek projeler ve stajlarla becerilerimi sürekli geliştirmeyi seviyorum.",
					paragraphs: [
						"Sivas Cumhuriyet Üniversitesi Bilgisayar Mühendisliği öğrencisiyim ve frontend geliştirme ile modern web teknolojilerine ilgim var.",
						"React, TypeScript ve Tailwind CSS ile arayüzler geliştirme konusunda pratik deneyimim var; temiz kod, kullanılabilirlik ve responsive tasarıma odaklanmayı seviyorum.",
						"Frontend geliştirmeye ek olarak derin öğrenme ve IoT alanlarında akademik ve staj projelerinde çalıştım; bu da teknik temelimi ve problem çözüm yeteneğimi güçlendirdi.",
					],
					locationLine:
						"{{name}} {{location}} konumunda, odaklı iş birliklerine açıktır.",
				},
				sections: {
					skills: {
						eyebrow: "Yetkinekler",
						title: "Teknik yeteneklerim ",
						subtitle:
							"Üniversite ve uygulamalı projelerle gelişen frontend, programlama, derin öğrenme ve mühendislik bilgileri.",
					},
					projects: {
						eyebrow: "Projeler",
						title: "Projelerim",
						subtitle:
							"Html, Css, JavaScript, React, TypeScript ve modern UI pratikleriyle oluşturulan projeler.",
					},
					timeline: {
						eyebrow: "Yolculuk",
						title: "Eğitim ve deneyim",
						subtitle: "Öğrenme yolum, üniversite aşamaları ve projeler.",
					},
					gallery: {
						eyebrow: "Sertifikalar",
						title: "Sertifikalar ve başarılar",
						subtitle: "Sertifikalar, başarılar ve ilerlememe ait kanıtlar.",
					},
					contact: {
						eyebrow: "İletişim",
						title: "Birlikte bir şeyler yapalım",
						subtitle:
							"Mesaj gönder. Staj, freelance ve iş birliği tekliflerine açığım.",
					},
				},
				personal: {
					title: "Junior Frontend Developer",
					bio: "React, TypeScript ve temiz UI tasarımlarıyla modern frontend uygulamalar geliştirmeye odaklı Bilgisayar Mühendisliği öğrencisiyim.",
					location: "Türkiye, Sivas",
				},
				skills: [
					{
						category: "Frontend Geliştirme",
						items: [
							"HTML",
							"CSS",
							"JavaScript",
							"React",
							"TypeScript",
							"Tailwind CSS",
							"Responsive Tasarım",
						],
					},
					{
						category: "Programlama",
						items: [
							"Java",
							"PHP",
							"JavaScript",
							"TypeScript",
							"MySQL",
							"Python Temelleri",
						],
					},
					{
						category: "Derin Öğrenme ve AI",
						items: [
							"Derin Öğrenme Temelleri",
							"Görüntü İşleme",
							"U-Net Mimarisi",
							"Keras",
							"Model Eğitimi ve Değerlendirme",
						],
					},
					{
						category: "IoT ve Gömülü Sistemler",
						items: ["Raspberry Pi", "STM32", "ARM Mimarisi", "UART Haberleşme"],
					},
					{
						category: "Araçlar ve Teknolojiler",
						items: ["Git ve GitHub", "VS Code", "Microsoft Office"],
					},
				],
				projects: {
					live: "Canlı",
					repo: "Kod",
					items: {
						"personal-portfolio": {
							title: "Kişisel Portfolyo Web Sitesi",
							description:
								"Yeteneklerimi, projelerimi ve deneyimlerimi sergilemek için React, TypeScript ve Tailwind CSS ile geliştirilen kişisel portfolyo sitesi.",
							techs: ["React", "TypeScript", "Tailwind CSS", "Vite"],
						},
						"course-selection-system": {
							title: "SCU Ders Bilgi Sistemi",
							description:
								"Bilgisayar Mühendisliği öğrencilerinin akademik yıl ve dönem seçerek ders bilgilerini temiz, düzenli ve responsive bir arayüzle görüntülemesini sağlayan web tabanlı sistem.",
							techs: ["HTML", "CSS", "JavaScript"],
						},
						"hospital-management-system": {
							title: "Hastane Yönetim Sistemi",
							description:
								"Hasta, doktor ve randevu yönetimini sağlayan, temiz ve responsive arayüze sahip hastane yönetim sistemi frontend arayüzü.",
							techs: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
						},
						"iot-face-recognition": {
							title: "Yüz Tanıma Kapı Kilidi (IoT)",
							description:
								"Üniversite kapsamında geliştirilen, yüz tanıma ile kapı erişimini kontrol eden IoT projesi.",
							techs: [
								"Python",
								"OpenCV",
								"Raspberry Pi",
								"HTML",
								"CSS",
								"JavaScript",
							],
						},
					},
				},
				timeline: {
					types: {
						experience: "Deneyim",
						education: "Eğitim",
					},
					items: {
						"edu-01": {
							title: "Bilgisayar Mühendisliği Lisans",
							place: "Sivas Cumhuriyet Üniversitesi",
							details: [
								"Algoritmalar, veri yapıları ve yazılım mühendisliği gibi temel derslere devam ediyorum.",
								"Frontend, derin öğrenme ve IoT alanlarında akademik projeler yürütüyorum.",
							],
						},
						"intern-01": {
							title: "Derin Öğrenme Stajyeri",
							place: "Sivas Cumhuriyet Üniversitesi",
							details: [
								"Derin öğrenme alanında araştırma ve uygulamalı çalışmalar yaptım.",
								"Python, Keras ve U-Net mimarisi ile görüntü süper-çözünürlük projesi geliştirdim.",
								"Görüntü işleme, model eğitimi ve performans değerlendirme konusunda deneyim kazandım.",
								"Dr. Kılı (Bölüm Başkanı) gözetiminde 25 günlük staj tamamladım.",
							],
						},
						"intern-02": {
							title: "Front-End Developer Stajyeri",
							place: "Qkare Bilgi Teknolojileri",
							details: [
								"HTML, CSS ve JavaScript ile modern arayüzlerin geliştirilmesi ve bakımı.",
								"React ve Tailwind CSS ile dinamik ve responsive UI bileşenleri geliştirme.",
								"Senior developerlarla UI optimizasyonu ve bug fix gibi görevlerde çalışma.",
								"Git ve profesyonel proje akışlarıyla endüstri standartlarını uygulama.",
								"Ölçeklenebilir frontend geliştirme için best practice uygulama.",
							],
						},
					},
				},
				gallery: {
					certificate: "Sertifika",
					issued: "Verildi",
					items: {
						"cert-01": "HTML5 Web Geliştirme - BTK Akademi",
						"cert-02":
							"Programlama ve AI Proje Deneyimi - Sivas Cumhuriyet Üniversitesi",
						"cert-03": "Derin Öğrenme Staj Sertifikası",
					},
				},
				contact: {
					name: "İsim",
					email: "E-posta",
					message: "Mesaj",
					send: "Mesaj gönder",
					sent: "Mesaj gönderildi!",
					preferEmail: "E-posta tercih ediyorsan",
					errors: {
						name: "Lütfen adınızı girin.",
						email: "Lütfen geçerli bir e-posta girin.",
						message: "Mesaj en az 10 karakter olmalı.",
					},
				},
				actions: {
					lightMode: "Aydınlık mod",
					darkMode: "Karanlık mod",
				},
				language: {
					switch: "EN",
				},
			},
		},
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: false },
});

export default i18n;

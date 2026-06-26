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
					title: "Computer Engineering Graduate & Software Developer",
					subtitle:
						"I'm a graduate from Sivas Cumhuriyet University with expertise in frontend development, machine learning, and IoT projects. Passionate about clean code and modern technologies.",
					paragraphs: [
						"I graduated from Sivas Cumhuriyet University's Computer Engineering program with a GPA of 3.18/4.00, gaining a strong foundation in software development and engineering principles.",
						"My technical stack includes React, TypeScript, JavaScript, Tailwind CSS for frontend development, along with Python for backend and machine learning applications.",
						"I have completed internships at leading tech companies, working on real-world projects in frontend development, database management, and software engineering while collaborating with professional teams.",
					],
					locationLine:
						"{{name}} is currently based in {{location}}, available for focused collaborations.",
				},
				sections: {
					skills: {
						eyebrow: "Skills",
						title: "My technical skill",
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
					title: "Software Developer",
					bio: "Computer Engineering graduate (GPA 3.18/4.00) with expertise in frontend development, machine learning, and IoT. Experienced in React, TypeScript, and Python. Available for software development opportunities.",
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
							start: "2022",
							end: "2026",
							details: [
								"Completed core computer engineering subjects including algorithms, data structures, and software engineering.",
								"Active in frontend, deep learning, and IoT-related academic projects with GPA 3.18/4.00.",
							],
						},
						"edu-02": {
							title: "High School Education",
							place: "IBB Yavuz Sultan Anadolu Imam Hatip High School",
							start: "2018",
							end: "2022",
							details: [],
						},
						"edu-03": {
							title:
								"Artificial Intelligence Specialization Program (Basic Training Certificate)",
							place:
								"National Technology Academy (T.C. Ministry of Industry and Technology)",
							start: "Jan 2026",
							end: "Apr 2026",
							details: [
								"Successfully completed the 10-session Artificial Intelligence Basic Training Program.",
								"Attended the program between January and April 2026 under the National Technology Initiative.",
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
							end: "Jan 2026",
							details: [
								"Developing and maintaining modern user interfaces using HTML, CSS, and JavaScript.",
								"Gained hands-on experience with React and Tailwind CSS for building dynamic and responsive UI components.",
								"Collaborating with senior developers on real front-end tasks including component development, UI optimization, and bug fixing.",
								"Working with Git and professional project workflows to follow industry development standards.",
								"Improving problem-solving skills and applying best practices for scalable front-end development.",
							],
						},
						"intern-03": {
							title: "Software Development Intern",
							place: "Software Persona – TNC Group",
							start: "Jan 2025",
							end: "Feb 2026",
							details: [
								"Worked on database and SQL-based applications.",
								"Contributed to web development projects using JavaScript.",
								"Designed UI/UX using Figma.",
								"Participated in mobile app development (Android / iOS).",
								"Gained experience in frontend development and user experience design.",
							],
						},
					},
				},
				gallery: {
					certificate: "Certificate",
					issued: "Issued",
					items: {
						"cert-01": "HTML5 Web Development - BTK Academy (Jan 2025)",
						"cert-02":
							"Artificial Intelligence Specialization Program - Basic Training Certificate (Apr 2026)",
						"cert-03":
							"Software Internship Participation Certificate - Software Persona / TNC Group",
						"cert-04":
							"Project Writing Training Participation Certificate - Ogrenci Kariyeri",
						"cert-05": "Gemini Certified Educator - Google for Education",
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
					title: "Bilgisayar Mühendisliği Mezunu & Yazılım Geliştirici",
					subtitle:
						"Sivas Cumhuriyet Üniversitesi'nden mezun oldum, frontend geliştirme, makine öğrenmesi ve IoT projelerinde uzman. Temiz kod ve modern teknolojilere tutkulu.",
					paragraphs: [
						"Sivas Cumhuriyet Üniversitesi Bilgisayar Mühendisliği programından GPA 3.18/4.00 ile mezun oldum ve yazılım geliştirme ile mühendislik ilkelerine güçlü bir temel kazandım.",
						"Teknik stack'im React, TypeScript, JavaScript, Tailwind CSS ile frontend geliştirme, Python ile backend ve makine öğrenmesi uygulamalarını içermektedir.",
						"Öncü teknoloji şirketlerinde stajlar tamamladım ve frontend geliştirme, veritabanı yönetimi ve yazılım mühendisliği alanlarında gerçek dünya projelerinde profesyonel ekiplerle çalıştım.",
					],
					locationLine:
						"{{name}} {{location}} konumunda, odaklı iş birliklerine açıktır.",
				},
				sections: {
					skills: {
						eyebrow: "Yetkinlikler",
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
					title: "Software Developer",
					bio: "Computer Engineering mezunu (GPA 3.18/4.00) frontend geliştirme, makine öğrenmesi ve IoT konusunda uzman. React, TypeScript ve Python tecrübeli. Yazılım geliştirme fırsatlarına açık.",
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
							start: "2022",
							end: "2026",
							details: [
								"Algoritmalar, veri yapıları ve yazılım mühendisliği gibi temel konuları tamamladım.",
								"Frontend, derin öğrenme ve IoT alanlarında akademik projeler yürütüyorum. GPA 3.18/4.00.",
							],
						},
						"edu-02": {
							title: "Lise Eğitimi",
							place: "IBB Yavuz Sultan Anadolu Imam Hatip Lisesi",
							start: "2018",
							end: "2022",
							details: [],
						},
						"edu-03": {
							title: "Yapay Zeka Uzmanlık Programı (Temel Eğitim Sertifikası)",
							place:
								"Milli Teknoloji Akademisi (T.C. Sanayi ve Teknoloji Bakanlığı)",
							start: "Jan 2026",
							end: "Apr 2026",
							details: [
								"10 oturumluk Yapay Zeka Temel Eğitim Programını başarıyla tamamladım.",
								"Programa Milli Teknoloji Hamlesi kapsamında Ocak - Nisan 2026 tarihleri arasında katıldım.",
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
							end: "Jan 2026",
							details: [
								"HTML, CSS ve JavaScript ile modern arayüzlerin geliştirilmesi ve bakımı.",
								"React ve Tailwind CSS ile dinamik ve responsive UI bileşenleri geliştirme.",
								"Senior developerlarla UI optimizasyonu ve bug fix gibi görevlerde çalışma.",
								"Git ve profesyonel proje akışlarıyla endüstri standartlarını uygulama.",
								"Ölçeklenebilir frontend geliştirme için best practice uygulama.",
							],
						},
						"intern-03": {
							title: "Yazılım Geliştirme Stajyeri",
							place: "Software Persona – TNC Group",
							start: "Jan 2025",
							end: "Feb 2026",
							details: [
								"Veri tabanı ve SQL tabanlı uygulamalar üzerinde çalıştım.",
								"JavaScript kullanarak web geliştirme projelerine katkı sağladım.",
								"Figma ile UI/UX tasarımları hazırladım.",
								"Mobil uygulama geliştirme süreçlerine (Android / iOS) katıldım.",
								"Frontend geliştirme ve kullanıcı deneyimi tasarımı alanlarında deneyim kazandım.",
							],
						},
					},
				},
				gallery: {
					certificate: "Sertifika",
					issued: "Verildi",
					items: {
						"cert-01": "HTML5 Web Geliştirme - BTK Akademi (Jan 2025)",
						"cert-02":
							"Yapay Zeka Uzmanlık Programı - Temel Eğitim Sertifikası (Apr 2026)",
						"cert-03":
							"Yazılım Stajı Katılım Sertifikası (Software Internship Participation Certificate) - Software Persona / TNC Group",
						"cert-04":
							"Proje Yazım Eğitimi Katılım Sertifikası (Project Writing Training Participation Certificate) - Öğrenci Kariyeri",
						"cert-05":
							"Gemini Sertifikalı Eğitmen (Gemini Certified Educator) - Google for Education",
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

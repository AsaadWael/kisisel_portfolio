
import { useEffect, useMemo, useState } from 'react'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Timeline } from './sections/Timeline'
import { Gallery } from './sections/Gallery'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { useTranslation } from 'react-i18next'
import {
  galleryItems,
  personalInfo,
  projects,
  skills,
  socialLinks,
  timeline,
} from './data/portfolio'

function App() {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState('hero')
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') return stored
    return 'light'
  })

  const navItems = useMemo(
    () => [
      { label: t('nav.home'), href: '#hero', id: 'hero' },
      { label: t('nav.about'), href: '#about', id: 'about' },
      { label: t('nav.skills'), href: '#skills', id: 'skills' },
      { label: t('nav.projects'), href: '#projects', id: 'projects' },
      { label: t('nav.journey'), href: '#timeline', id: 'timeline' },
      { label: t('nav.gallery'), href: '#gallery', id: 'gallery' },
      { label: t('nav.contact'), href: '#contact', id: 'contact' },
    ],
    [t],
  )

  const heroContent = useMemo(
    () => ({
      badge: t('hero.badge'),
      greeting: t('hero.greeting'),
      primaryCta: t('hero.primaryCta'),
      secondaryCta: t('hero.secondaryCta'),
    }),
    [t],
  )

  const aboutContent = useMemo(
    () => ({
      eyebrow: t('about.eyebrow'),
      title: t('about.title'),
      subtitle: t('about.subtitle'),
      paragraphs: t('about.paragraphs', { returnObjects: true }) as string[],
      image: 'images/Avatar.png',
    }),
    [t],
  )

  const sectionContent = useMemo(
    () => ({
      skills: t('sections.skills', { returnObjects: true }) as {
        eyebrow: string
        title: string
        subtitle: string
      },
      projects: t('sections.projects', { returnObjects: true }) as {
        eyebrow: string
        title: string
        subtitle: string
      },
      timeline: t('sections.timeline', { returnObjects: true }) as {
        eyebrow: string
        title: string
        subtitle: string
      },
      gallery: t('sections.gallery', { returnObjects: true }) as {
        eyebrow: string
        title: string
        subtitle: string
      },
      contact: t('sections.contact', { returnObjects: true }) as {
        eyebrow: string
        title: string
        subtitle: string
      },
    }),
    [t],
  )

  const localizedPersonalInfo = useMemo(
    () => ({
      ...personalInfo,
      title: t('personal.title'),
      bio: t('personal.bio'),
      location: t('personal.location'),
    }),
    [t],
  )

  const localizedSkills = useMemo(
    () => t('skills', { returnObjects: true }) as typeof skills,
    [t],
  )

  const localizedProjects = useMemo(() => {
    const projectContent = t('projects.items', { returnObjects: true }) as Record<
      string,
      { title: string; description: string; techs: string[] }
    >
    return projects.map((project) => ({
      ...project,
      ...(projectContent[project.id] ?? {}),
    }))
  }, [t])

  const localizedTimeline = useMemo(() => {
    const timelineContent = t('timeline.items', { returnObjects: true }) as Record<
      string,
      { title: string; place: string; details: string[] }
    >
    return timeline.map((item) => ({
      ...item,
      ...(timelineContent[item.id] ?? {}),
    }))
  }, [t])

  const localizedGalleryItems = useMemo(() => {
    const galleryContent = t('gallery.items', { returnObjects: true }) as Record<string, string>
    return galleryItems.map((item) => ({
      ...item,
      title: galleryContent[item.id] ?? item.title,
    }))
  }, [t])

  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.1 },
    )

    sections.forEach((section) => {
      observer.observe(section)
    })
    return () => observer.disconnect()
  }, [sectionIds])

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_50%),radial-gradient(circle_at_bottom,_rgba(99,102,241,0.12),_transparent_45%)]"></div>
      <div className="relative">
        <Navbar 
          name={localizedPersonalInfo.name}
          items={navItems}
          activeSection={activeSection}
          theme={theme}
          onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
        />
        <main>
          <Hero personalInfo={localizedPersonalInfo} heroContent={heroContent} />
          <About personalInfo={localizedPersonalInfo} aboutContent={aboutContent} />
          <Skills skills={localizedSkills} content={sectionContent.skills} />
          <Projects projects={localizedProjects} content={sectionContent.projects} />
          <Timeline timeline={localizedTimeline} content={sectionContent.timeline} />
          <Gallery items={localizedGalleryItems} content={sectionContent.gallery} />
          <Contact
            email={localizedPersonalInfo.email}
            socialLinks={socialLinks}
            content={sectionContent.contact}
          />
        </main>
        <Footer
          name={localizedPersonalInfo.name}
          location={localizedPersonalInfo.location}
          socialLinks={socialLinks}
        />
      </div>
    </div>
  )
}

export default App

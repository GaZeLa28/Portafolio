import { useEffect, useState, type ReactNode } from 'react';
import { ArrowDown, ArrowUpRight, Check, Copy, Menu, X } from 'lucide-react';
import { profile } from './profile-data';
import { translations, type Language } from './i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

function getInitialLanguage(): Language {
  try {
    return window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'es';
  } catch {
    return 'es';
  }
}

function ExternalLink({
  href,
  children,
  className = '',
  label,
  pendingTitle,
  newTab = false,
  testId,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label: string;
  pendingTitle: string;
  newTab?: boolean;
  testId?: string;
}) {
  if (!href) return <span className={`${className} unavailable`} title={pendingTitle} aria-label={`${label}: ${pendingTitle}`}>{children}</span>;
  const opensNewTab = newTab || href.startsWith('http');
  return <a className={className} href={href} aria-label={label} target={opensNewTab ? '_blank' : undefined} rel={opensNewTab ? 'noopener noreferrer' : undefined} data-testid={testId}>{children}</a>;
}

function SectionLabel({ index, children, id }: { index: string; children: ReactNode; id?: string }) {
  return <div className="section-label" id={id}><span>{index}</span><span className="label-line" /><span>{children}</span></div>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const t = translations[language];
  const navItems = [
    { label: t.nav.about, href: '#sobre-mi' },
    { label: t.nav.journey, href: '#recorrido' },
    { label: t.nav.projects, href: '#proyectos' },
    { label: t.nav.contact, href: '#contacto' },
  ];
  const projectIntro = t.projects.introduction.split('\n');
  const journeyIntro = t.journey.introduction.split('\n');

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.documentTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.metaDescription);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', t.documentTitle);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', t.metaDescription);
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute('content', t.documentTitle);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute('content', t.metaDescription);

    try {
      window.localStorage.setItem('portfolio-language', language);
    } catch {
      // The selected language still works for this visit if storage is unavailable.
    }
  }, [language, t]);

  const copyEmail = async () => {
    if (!profile.links.email) return;
    try {
      await navigator.clipboard.writeText(profile.links.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch { window.location.href = `mailto:${profile.links.email}`; }
  };
  return (
    <main className="portfolio-shell grain">
      <header className="topbar">
        <a href="#inicio" className="wordmark" aria-label={t.homeLink}><span className="wordmark-dot" />{profile.initials}<span className="wordmark-slash">/</span></a>
        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label={t.primaryNavigation}>
          {navItems.map(({ label, href }) => <a key={href} href={href} className="nav-link" onClick={() => setMenuOpen(false)}>{label}</a>)}
          <ExternalLink href={`${import.meta.env.BASE_URL}${profile.links.cv[language].slice(1)}`} className="cv-link" label={t.cvLinkLabel} pendingTitle={t.pendingLink} newTab testId="link-cv-header">{t.cv} <ArrowUpRight size={14} /></ExternalLink>
        </nav>
        <div className="language-switch" role="group" aria-label={t.languageSelector}>
          <button type="button" lang="es" aria-label={t.switchToSpanish} aria-pressed={language === 'es'} onClick={() => setLanguage('es')}>ES</button>
          <button type="button" lang="en" aria-label={t.switchToEnglish} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
        </div>
        <button className="menu-toggle" aria-label={menuOpen ? t.menuClose : t.menuOpen} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-topline reveal"><span className="eyebrow"><span className="status-dot" />{profile.availability[language]}</span><span className="eyebrow location">{profile.location}</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-intro reveal reveal-delay-1">{t.hero.greeting} <span>{profile.name}</span>.</p>
            <h1 className="reveal reveal-delay-1">{profile.headline[language].split('\n').map((line, i) => <span key={i} className={i === 1 ? 'headline-italic' : ''}>{line}{i < 2 && <br />}</span>)}</h1>
            <div className="hero-bottom reveal reveal-delay-2">
              <p>{profile.introduction[language]}</p>
              <a className="round-scroll" href="#sobre-mi" aria-label={t.hero.scrollLabel}><ArrowDown size={18} /></a>
            </div>
          </div>
          <div className="hero-art">
            <img
              className="hero-code-image"
              src={`${import.meta.env.BASE_URL}${language === 'es' ? 'html-example.svg' : 'html-example-en.svg'}`}
              alt={t.hero.codeImageAlt}
            />
          </div>
        </div>
        <div className="hero-footer"><span>{profile.role[language]}</span><span className="hero-footer-line" /><span>{t.hero.portfolio}</span></div>
      </section>

      <section className="about-section section-pad" id="sobre-mi">
        <div className="section-aside"><SectionLabel index="01">{t.about.sectionLabel}</SectionLabel></div>
        <div className="about-main">
          <p className="big-statement">{t.about.statement}<br /><em>{t.about.emphasis}</em></p>
          <div className="about-columns">
            <p className="body-large">{profile.about[language]}</p>
            <div className="aspiration-block"><span className="micro-label">{t.about.aspirationLabel}</span><p>{profile.aspiration[language]}</p><a href="#contacto" className="text-link">{t.about.talk} <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="principles">
            {profile.principles.map((item) => <article className="principle" key={item.number}><span className="principle-number">{item.number}</span><h3>{item.title[language]}</h3><p>{item.detail[language]}</p></article>)}
          </div>
        </div>
      </section>

      <section className="contribution-section section-pad">
        <SectionLabel index="02">{t.contribution.sectionLabel}</SectionLabel>
        <div className="contribution-layout">
          <h2>{t.contribution.titleFirst}<br />{t.contribution.titlePrefix && `${t.contribution.titlePrefix} `}<em>{t.contribution.titleEmphasis}</em>,<br />{t.contribution.titleLast}</h2>
          <div className="skills-area">
            <p className="skills-intro">{t.contribution.introduction}</p>
            <div className="skill-list">{profile.skills.map((skill, i) => <span className="skill-pill" key={`${skill.es}-${i}`}>{skill[language]}<span>↗</span></span>)}</div>
            <p className="skills-footnote">{t.contribution.footnote}</p>
          </div>
        </div>
        <div className="contribution-note"><span className="note-star">+</span><p>{t.contribution.note} <strong>{t.contribution.noteEmphasis}</strong>.</p><span className="note-tag">{t.contribution.chapter}</span></div>
      </section>

      <section className="journey-section section-pad" id="recorrido">
        <div className="journey-head"><SectionLabel index="03">{t.journey.sectionLabel}</SectionLabel><p>{journeyIntro[0]}<br />{journeyIntro[1]}</p></div>
        <div className="timeline">
          {profile.experience.map((item, i) => <article className="timeline-entry" key={`${item.period.es}-${i}`}><div className="timeline-period">{item.period[language]}</div><div className="timeline-marker"><span /></div><div className="timeline-content"><h3>{item.title}</h3><div className="timeline-org">{item.organization}</div><p>{item.description[language]}</p></div><div className="timeline-index">0{i + 1}</div></article>)}
        </div>
        <div className="journey-foot"><span>{t.journey.footerLeft}</span><span>{t.journey.footerRight}</span></div>
      </section>

      <section className="projects-section section-pad" id="proyectos">
        <div className="projects-heading"><div><SectionLabel index="04">{t.projects.sectionLabel}</SectionLabel><h2>{t.projects.titleFirst}<br /><em>{t.projects.titleEmphasis}</em></h2></div><p>{projectIntro[0]}<br />{projectIntro[1]}</p></div>
        {profile.projects.length > 0 ? (
          <div className="project-list">
            {profile.projects.map((project) => <article className={`project-card ${project.art}`} key={project.number} aria-labelledby={`project-${project.number}`}>
              <div className="project-visual"><span className="project-visual-number">{project.mark}</span><span className="project-visual-shape" /><span className="project-visual-caption">{t.projects.study} / {project.number}</span></div>
              <div className="project-details"><div className="project-meta"><span>{project.type[language]}</span><span>{t.projects.project} {project.number}</span></div><h3 id={`project-${project.number}`}>{project.title}</h3><p>{project.description[language]}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.details && (
                <details className="project-disclosure">
                  <summary aria-describedby={`project-${project.number}`}><span className="details-closed">{t.projects.viewDetails}</span><span className="details-open">{t.projects.hideDetails}</span></summary>
                  <div className="project-expanded">
                    <h4>{t.projects.objective}</h4><p>{project.details.objective[language]}</p>
                    <h4>{t.projects.activities}</h4><ul>{project.details.activities.map((activity) => <li key={activity.en}>{activity[language]}</li>)}</ul>
                    <h4>{t.projects.results}</h4><p>{project.details.result[language]}</p>
                    <h4>{t.projects.skills}</h4><ul>{project.details.skills.map((skill) => <li key={skill.en}>{skill[language]}</li>)}</ul>
                    <h4>{t.projects.scope}</h4><p>{project.details.scope[language]}</p>
                  </div>
                </details>
              )}
              {project.url && (<ExternalLink href={project.url} className="project-open" label={`${t.projects.openProjectLabel} ${project.title}`} pendingTitle={t.pendingLink}><span>{t.projects.openProject}</span><ArrowUpRight className="project-arrow" size={17} /></ExternalLink>)}</div>
            </article>)}
          </div>
        ) : (
          <div className="projects-empty">
            <p>{t.projects.empty}</p>
            <ExternalLink href={profile.links.github} className="text-link" label={t.projects.githubLinkLabel} pendingTitle={t.pendingLink}>{t.projects.github} <ArrowUpRight size={16} /></ExternalLink>
          </div>
        )}
      </section>

      <section className="reflection-section section-pad">
        <div className="reflection-index"><SectionLabel index="05">{t.reflection.sectionLabel}</SectionLabel></div>
        <div className="reflection-content"><span className="quote-mark">“</span><blockquote>{profile.note.title[language]}</blockquote><p>{profile.note.body[language]}</p><div className="reflection-signature"><span className="signature-rule" />{profile.name}</div></div>
        <div className="reflection-stamp">{t.reflection.stamp.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}</div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-top"><SectionLabel index="06">{t.contact.sectionLabel}</SectionLabel><span>{t.contact.invitation}</span></div>
        <h2>{t.contact.titleFirst}<br /><em>{t.contact.titleEmphasis}</em></h2>
        <p className="contact-copy">{t.contact.introduction}</p>
        <div className="contact-actions">
          <ExternalLink href={profile.links.email ? `mailto:${profile.links.email}` : ''} className="contact-email" label={t.contact.emailLinkLabel} pendingTitle={t.pendingLink}><span>{profile.links.email || t.contact.emailFallback}</span><ArrowUpRight size={20} /></ExternalLink>
          <button className="copy-button" onClick={copyEmail} disabled={!profile.links.email} aria-label={t.contact.copyEmailLabel}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? t.contact.copied : t.contact.copyEmail}</button>
        </div>
        <div className="social-links">
          <ExternalLink href={profile.links.linkedin} className="social-link" label={t.contact.linkedinLabel} pendingTitle={t.pendingLink}>LinkedIn <ArrowUpRight size={14} /></ExternalLink>
          <ExternalLink href={profile.links.github} className="social-link" label={t.contact.githubLabel} pendingTitle={t.pendingLink}>GitHub <ArrowUpRight size={14} /></ExternalLink>
          <ExternalLink href={`${import.meta.env.BASE_URL}${profile.links.cv[language].slice(1)}`} className="social-link" label={t.cvLinkLabel} pendingTitle={t.pendingLink} newTab testId="link-cv-contact">{t.contact.cv} <ArrowUpRight size={14} /></ExternalLink>
        </div>
      </section>
      <footer className="site-footer"><a href="#inicio" className="footer-mark" aria-label={t.homeLink}>{profile.initials}<span>/</span></a><span>{profile.footerLine[language]}</span><a className="back-top" href="#inicio">{t.footer.backToTop} ↑</a><span className="footer-year">© {new Date().getFullYear()}</span></footer>
    </main>
  );
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;

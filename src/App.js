import React, { useState, useEffect } from 'react';
import './App.css';
import { Mail, Phone, Code, Database, Smartphone } from 'lucide-react';

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    Lenguajes: ['JavaScript', 'Java', 'Dart'],
    Frameworks: ['React', 'Flutter', 'Spring Boot'],
    Herramientas: ['Git', 'Docker', 'MySQL'],
    Cloud: ['Firebase', 'Azure'],
  };

  const projects = [
    {
      title: 'Hogarya - App Móvil',
      icon: <Smartphone />,
      description: 'App Flutter para organización de tareas domésticas.',
      link: 'https://github.com/alexnama759/HogArya',
      tech: ['Flutter', 'Firebase'],
    },
    {
      title: 'Base de Datos IMSS',
      icon: <Database />,
      description: 'Diseño académico de BD del IMSS con MySQL.',
      link: 'https://github.com/alexnama759/IMSS-Database',
      tech: ['MySQL', 'Modelado ER'],
    },
    {
      title: 'Clon de Kickstarter - API REST',
      icon: <Code />,
      description:
        'API con C# y .NET con pagos simulados por Mercado Pago.',
      link: 'https://github.com/alexnama759/API-desarrollo-de-aplicaciones',
      tech: ['.NET', 'JWT', 'Mercado Pago'],
    },
  ];

  return (
    <div className="App">
      <nav className="nav">
        <h1>Alexis Nava</h1>
        <ul>
          {sections.map((s) => (
            <li key={s} onClick={() => scrollTo(s)} className={activeSection === s ? 'active' : ''}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      <section id="home" className="section">
        <h2>¡Hola! Soy Alexis Nava</h2>
        <p>Apasionado por el desarrollo backend, DevOps y tecnologías en la nube.</p>
      </section>

      <section id="about" className="section">
        <h2>Sobre mí</h2>
        <p>
          Soy estudiante de Ingeniería de Software en la Universidad Veracruzana. Me enfoco en backend con Java y
          Spring Boot y me apasiona automatizar despliegues usando GitHub Actions.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Habilidades</h2>
        <div className="skills">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3>{group}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Proyectos</h2>
        <div className="projects">
          {projects.map((p, i) => (
            <div key={i} className="project">
              <div className="icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                Ver código
              </a>
              <div className="tags">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contacto</h2>
        <p>¿Te gustaría colaborar conmigo? ¡Hablemos!</p>
        <div className="contact">
          <a href="mailto:alexnavamoya@gmail.com">
            <Mail /> alexnavamoya@gmail.com
          </a>
          <a href="tel:9222092893">
            <Phone /> 922 209 2893
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;


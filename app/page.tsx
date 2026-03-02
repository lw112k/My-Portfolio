//Import Pages
import Hero from '@/components/hero';
import About from '@/components/about';
import Service from '@/components/service';
import Project from '@/components/project';
import Contact from '@/components/contact';
import Experience from '@/components/experience';

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id='experience'>
        <Experience />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

import { ThemeProvider } from './ThemeContext.tsx'
import { Apps } from './components/Apps.tsx'
import { Contact } from './components/Contact.tsx'
import { Footer } from './components/Footer.tsx'
import { Hero } from './components/Hero.tsx'
import { Nav } from './components/Nav.tsx'
import { Services } from './components/Services.tsx'
import { Work } from './components/Work.tsx'

export default function App() {
  return (
    <ThemeProvider>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Work />
        <Apps />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

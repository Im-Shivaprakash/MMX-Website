import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import StatsBar from './components/sections/StatsBar.jsx'
import ProgramsOffer from './components/sections/ProgramsOffer.jsx'
import FeaturedVideos from './components/sections/FeaturedVideos.jsx'
import FounderAbout from './components/sections/FounderAbout.jsx'
import CrewAchievements from './components/sections/CrewAchievements.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import StartsHereCta from './components/sections/StartsHereCta.jsx'
import SignupForm from './components/sections/SignupForm.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <ProgramsOffer />
        <FeaturedVideos />
        <FounderAbout />
        <CrewAchievements />
        <Testimonials />
        <StartsHereCta />
        <SignupForm />
      </main>
      <Footer />
    </>
  )
}

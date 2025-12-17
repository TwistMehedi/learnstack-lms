import FeaturedCourses from '../../components/Home/FeaturedCoureses'
import HeroSection from '../../components/Home/HeroSection'
import HomeCategory from '../../components/Home/HomeCategory'
import Testimonials from '../../components/Home/Testimonials'
import Cta from '../../components/Home/Cta'
import Footer from '../../components/Home/Footer'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HomeCategory />
      <FeaturedCourses />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}

export default Home

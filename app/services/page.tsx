'use client'
import Header from '../components/Header'
import ServiceSuite from '../components/ServiceSuite'
import WhyChooseUs from '../components/WhyChooseUs'
import Transform from '../components/Transform'
import Footer from '../components/Footer'

const ServicesPage = () => {
  // TODO: Replace with actual authentication check
  const isLoggedIn = false; // This should come from your auth context/state

  return (
    <>
      <Header />
      <ServiceSuite />
      <WhyChooseUs />
      <Transform isLoggedIn={isLoggedIn} />
      <Footer />
    </>
  )
}

export default ServicesPage

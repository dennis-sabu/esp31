'use client'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="pt-20">
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default ContactPage

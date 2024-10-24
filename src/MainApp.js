import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './components/header'
import AppHero from './components/banner';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppTeams from './components/team';
import AppTestimonials from './components/testimonial';
import AppPricing from './components/pricing';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';
const MainApp = () => {
  return (
    <div className="App">

      <header id="header">
        <BrowserRouter>
          <AppHeader />
        </BrowserRouter>

      </header>

      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
        <AppWorks />
        <AppTeams />
        <AppTestimonials />
        <AppPricing />
        <AppBlog />
        <AppContact />
      </main>

      <footer id='footer'>
        <AppFooter />
      </footer>

    </div>
  )
}

export default MainApp
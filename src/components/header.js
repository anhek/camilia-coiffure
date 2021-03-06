import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FiFacebook, FiInstagram } from "react-icons/fi"
import CamiliaLogo from "./camiliaLogo"

const Header = () => (
  <header id="header" className="bg-white">
    <div className="px-6 py-8 mx-auto sm:py-10 sm:px-8 max-w-8xl">
      <div className="flex flex-col justify-center md:flex-row md:justify-between">

        <div className="flex justify-center flex-1 mb-6 md:mb-0 md:justify-start">
          <CamiliaLogo className="flex justify-center w-56 h-full mx-auto md:w-48 lg:w-56 md:mx-0" color1="#e73a65" color2="#4b3f42"/>
        </div>

        <nav className="flex flex-wrap justify-center text-center md:px-6 md:mt-0 md:items-center text-1xl font-branbold text-brown" role="navigation" aria-label="Navigation Header">
          <AnchorLink href="#actus" title="Aller vers la section Actus" role="link" className="mr-6 lg:mr-8 hover:text-pink">
            Actus
          </AnchorLink>
          <AnchorLink href="#salon" title="Aller vers la section Salon" role="link" className="mr-6 lg:mr-8 hover:text-pink">
            Le salon
          </AnchorLink>
          <AnchorLink href="#contact" title="Aller vers la section Contact" role="link" className="hover:text-pink">
            Contact
          </AnchorLink>
        </nav>

        <div className="flex justify-center mt-4 md:mt-0 md:items-center">
          <a href="http://instagram.com/camilia_coiffure/" title="URL page Instagram" className="mr-3 picto-link">
            <span className="sr-only">Instagram</span>
            <FiInstagram className="picto-text" />
          </a>
          <a href="http://facebook.com/camiliacoiffure.lyon/" title="URL page Facebook" className="picto-link">
            <span className="sr-only">Facebook</span>
            <FiFacebook className="picto-text" />
          </a>
        </div>

      </div>
    </div>
  </header>
)

export default Header

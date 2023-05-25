import React from 'react'
import "../Css/Foot.css"
import IconoCorreo from "../assets/iconoCorreo.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter_PNG1.png"
import Instagram from "../assets/Instagram.png"


const Footer = () => {
  return (
    <div className='Foot'>
       <div className="img">
          <a href="https://www.instagram.com/luciano.azalot/?theme=dark" target="blank">
          <img className="img1" src={Instagram} alt="" height="80" width="60" />
          </a>
          <a href="https://www.linkedin.com/in/luciano-azalot-00a6b3249/" target="blank">
          <img className="img2" src={linkedin}alt="" height="80" width="60" />
          </a>
          <a href="https://twitter.com/home" target="blank"> 
          <img className="img3" src={twitter}alt="" height="80" width="80" />
          </a>
          <a href="https://outlook.live.com/mail/0/" target="blank"> 
          <img className="img4" src={IconoCorreo} alt="" height="80" width="80" />
          </a>
        </div>
    </div>
  )
}

export default Footer
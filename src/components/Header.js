import React, {useState, useLayoutEffect} from 'react'
import { Link } from 'react-router-dom'
import Logos from './Logos'


const Header = () => {
  const [ openMenu, setOpenMenu ] = useState(false)
  const [ positionY, setPositionY ] = useState(10)
  const handleMenu = () => setOpenMenu(!openMenu)

   useLayoutEffect(() => {
     const onScroll = () => {
       if (window.scrollY > 30 && window.innerWidth > 768) {
         setPositionY('50%')
       } else {
         setPositionY(10)
       }
     }

     window.addEventListener("scroll", onScroll);
     return () => window.removeEventListener("scroll", onScroll);
   }, []);

  return (
    <>
      <Link className="home" to="/" onClick={() => setOpenMenu(false)}><img src={require('../assets/mltl_white.png')} alt=''/></Link>
      <Link className="header" to="/" onClick={() => setOpenMenu(false)}><h1>MULTIK</h1></Link>
      <img
        className='header-icon'
        style={{top: positionY}}
        onClick={() => handleMenu()}
        src={require('../assets/menu-outline.svg')} alt='menu' />
      <div
        className="header-drop"
        style={{ transform: openMenu ? 'translateX(0)' : 'translateX(100%)', opacity: openMenu ? 1 : 0, zIndex: openMenu ? 18 : 0 }}
      >
        {Links.map(link =>
          <Link key={link} onClick={() => setOpenMenu(false)} to={link}>{link.toUpperCase().replace('_', ' ')}</Link>
        )}
        <Logos name='header'/>
      </div>
    </>
  )
}


export default Header


const Links = ["portrait", "conceptual", "still_life", "candid", "urban", "video", "about"]

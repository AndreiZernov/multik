import React, {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Logos from './Logos'
import gsap , { TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"
const controller = new ScrollMagic.Controller();
ScrollMagicPluginGsap(ScrollMagic, gsap);


const MainPage = ({name, data}) => {
  const slides = useRef(null)

  useEffect( () => {
    if (window.innerWidth > 768 && name !== 'links') {
      let tlHeroScroll1 = new TimelineMax({paused: true})
      .to(`.main-${name}1-img, .main-${name}3-img, .main-${name}4-img, .main-${name}5-img`, 1, { })
      .to(`.main-${name}1-img, .main-${name}3-img, .main-${name}4-img, .main-${name}5-img`, 1, { opacity: 0})
      .to(`.main-${name}1-img, .main-${name}3-img, .main-${name}4-img, .main-${name}5-img`, 5, { })

      let tlHeroScroll2 = new TimelineMax({paused: true})
      .to(`.main-${name}2-img`, 1, { })
      .to(`.main-${name}2-img`, 1, { transform: 'translate(-15%, 50%) scale(2)' })
      .to(`.main-${name}2-img`, 1, {scale: 3 })
      .to(`.main-${name}2-img`, 2, {opacity: 0})
      .to(`.main-${name}2-img`, 0.1, {scale: 1})

      new ScrollMagic.Scene({
        duration: 1000,
        triggerHook: 0,
        triggerElement: slides.current
      })
      .setTween( tlHeroScroll1.restart() )
      .setPin(slides.current)
      .addTo(controller)

      new ScrollMagic.Scene({
        duration: 1000,
        triggerHook: 0,
        triggerElement: slides.current
      })
      .setTween( tlHeroScroll2.restart() )
      .addTo(controller)

    }
    else if (window.innerWidth > 768 && name === 'links') {
      let tlHeroScroll3 = new TimelineMax({paused: true})
      .to(slides.current, 1, { justifyContent: 'center'})

      new ScrollMagic.Scene({
        duration: 1000,
        triggerHook: 0,
        triggerElement: slides.current
      })
      .setTween( tlHeroScroll3.restart() )
      .setPin(slides.current)
      .addTo(controller)
    }

  }, [slides, name])

  return (
    <div
      style={{ marginTop: window.innerWidth > 768 ? '-100vh' : '0' }}
      ref={slides}
      id={name}
    >
      <div className='main-slides'
        style={{
          overflow: name === "links" &&  window.innerWidth < 768 && "hidden",
          height: name === "links" && window.innerWidth < 768 && "300px",
          paddingTop:  name === "links" &&  window.innerWidth < 768  && '10vh',
          gridTemplateAreas:
          name === 'portrait' ? portraitGrid :
          name === 'conceptual' || name === 'urban' ? conceptualGrid :
          (name === 'candid' || name === 'still_life')  ? stillLifeCandidGrid :
          name === 'links' ? linksGrid : null
        }}
      >
        {name === 'links' ?
          <h1>{name.toUpperCase().replace('_', ' ')}</h1> :
          <Link id='h1' to={name}>{name.toUpperCase().replace('_', ' ')}</Link>
        }

        {
          name !== 'links' ?
            <>
              {[ 1, 2, 3, 4, 5 ].map(num =>
                <Link key={num} to={name} style={{backgroundImage: `url(${data[num-1]})`}} className={`main-${name}${num}-img`}></Link>
              )}
            </>
          :
          <>
            <Logos data={data} name="slides"/>
          </>
        }
      </div>
    </div>
  )
}

export default MainPage


const portraitGrid = `"h h h h h h h h h h"
                    "a a a ... b b b e e e"
                    "a a a ... b b b e e e"
                    "a a a ... b b b e e e"
                    "a a a d d d c c c c"
                    "a a a d d d c c c c"
                    "a a a d d d c c c c"`

const conceptualGrid = `"h h h h h h h h h h"
                    "a a a a b b b e e e"
                    "a a a a b b b e e e"
                    "a a a a b b b e e e"
                    "d d d d d c c c c c"
                    "d d d d d c c c c c"
                    "d d d d d c c c c c"`

const stillLifeCandidGrid = `"h h h h h h h h h h"
                    "d d d ... b b b e e e"
                    "d d d ... b b b e e e"
                    "d d d ... b b b e e e"
                    "d d d c c c c a a a"
                    "d d d c c c c a a a"
                    "... ... ... c c c c a a a"`

const linksGrid = `"h h h h h h h h h h"
                    "l l l l l l l l l l"
                    "l l l l l l l l l l"
                    "l l l l l l l l l l"
                    "l l l l l l l l l l"
                    "l l l l l l l l l l"
                    "...   ...   ...   ...   ...   ...   ...   ...   ...   ...  "`

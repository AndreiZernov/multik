import React from 'react'
import { useDataItems } from "../context/dataItems-context"
import Logos from '../components/Logos'


const AboutPage = () => {
  const { about } = useDataItems()

  return (
    <div className='about-page page'>
      <div className="face">
        <img id="profile" src={about.profileImg} alt="profile" />
        <Logos />
      </div>
      <div className='bio'>
        <h1>{about.name}</h1>
        <p>{about.bio}</p>
      </div>
    </div>
  )
}


export default AboutPage

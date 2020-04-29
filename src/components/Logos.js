import React from 'react'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


const Logos = ({name, data}) =>
  <div className="logos" style={{alignItems: name === 'header' && 'flex-end'}}>
    { name === 'slides' &&
      <video muted controls width="auto" height="400"
        onMouseOver={event => event.target.play()}
        onMouseOut={event => event.target.pause()}
      >
        <source poster={require('../assets/mltl_white.png')}
          src={data[0]} type="video/mp4" />
        <source poster={require('../assets/mltl_white.png')}
          src={data[0]} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    }
    <div className="logos-wrap">
      <div onClick={() => window.open( 'https://urlgeni.us/instagram/multik', '_blank' )}><img src={require('../assets/instagram.png')} alt="logo" /></div>
      <div onClick={() => window.open( 'mailto:zuevmultik@me.com', '_blank' )}><img src={require('../assets/mail.png')} alt="logo" /></div>
      <OverlayTrigger
        key='top'
        placement='top'
        overlay={
          <Popover id={`popover-positioned-'top'`}>
            <Popover.Content>
              <img style={{width: '15vh'}} src={require('../assets/qrcode.jpg')} alt="logo" />
            </Popover.Content>
          </Popover>
        }
      >
        <div><img src={require('../assets/wechat.png')} alt="logo" /></div>
      </OverlayTrigger>{' '}
      <div onClick={() => window.open( 'https://is.gd/Sebcnp', '_blank' )}><img src={require('../assets/whatsapp.png')} alt="logo" /></div>
    </div>
  </div>


export default Logos

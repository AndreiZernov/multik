import React from 'react'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


const Logos = ({name, data}) =>
  <div className="logos">
    <div className="logos-wrap">
      <img onClick={() => window.open( 'https://urlgeni.us/instagram/multik', '_blank' )} src={require('../assets/instagram.png')} alt="insagram" />
      <img onClick={() => window.open( 'mailto:zuevmultik@me.com', '_blank' )} src={require('../assets/mail.png')} alt="mail" />
      <OverlayTrigger
        key='top'
        placement='top'
        overlay={
          <Popover>
            <Popover.Content>
              <img style={{width: '15vh'}} src={require('../assets/qrcode.jpg')} alt="logo" />
            </Popover.Content>
          </Popover>
        }
      >
        <img src={require('../assets/wechat.png')} alt="wechat" />
      </OverlayTrigger>{' '}
      <img onClick={() => window.open( 'https://is.gd/Sebcnp', '_blank' )} src={require('../assets/whatsapp.png')} alt="whatsapp" />
    </div>
  </div>


export default Logos

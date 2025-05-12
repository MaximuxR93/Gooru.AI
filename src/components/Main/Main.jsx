import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>GooruAI</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Rayan</span></p>
                <p>how can i assist you ?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest some beautiful anime today </p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>tell me to get a gfx card recommendation </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>best games to play in summer </p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>assist me with this bug fixing</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='say it , and i will do my best'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src="assets.send_icon" alt="" />
                    </div>
                </div>
                <p className="bottom-info"></p>
                please check the privacy and policy of gooruAI.
            </div>
        </div>
        
    </div>
  )
}

export default Main
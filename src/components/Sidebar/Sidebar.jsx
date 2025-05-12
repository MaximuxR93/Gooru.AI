import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from "../../assets/assets"

const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    return (
        <div className={`sidebar ${extended ? 'extended' : ''}`}>
            <div className="top">
                <img
                    onClick={() => setExtended(prev => !prev)}
                    src={assets.menu_icon}
                    alt="Menu"
                    className="menu-icon"
                />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="New Chat" />
                    <p className="text-label">New Chat</p>
                </div>

                <div className="recent">
                    <p className='recent-titels text-label'>Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="Recent Chat" />
                        <p className="text-label">What's Social Dumping ....?</p>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Help" />
                    <p className="text-label">Help</p>
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="Activity" />
                    <p className="text-label">Activity</p>
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Setting" />
                    <p className="text-label">Setting</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

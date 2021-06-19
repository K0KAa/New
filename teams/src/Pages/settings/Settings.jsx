import React from 'react'
import "./settings.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import PersonIcon from '@material-ui/icons/Person';

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle"> Update your account</span>
                    <span className="settingsDeleteTitle"> Delete account</span>
                </div>
                <form  className="settingsForm">
                    <label >Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" alt="" />
                        <label htmlFor="fileInput"><PersonIcon className="settingsPPIcon"/></label>
                        <input type="file" id="fileInput" style={{display:'none'}}/>
                    </div>
                   <label>Username</label>
                   <input type="text" placeholder="Kokaa"/>
                   <label>Email</label>
                   <input type="email" placeholder="Kokaa@gmail.com"/>
                   <label>Password</label>
                   <input type="password" />
                   <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings

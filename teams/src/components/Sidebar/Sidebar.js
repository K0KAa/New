import React from 'react'
import "./sidebar.css"
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import Pinterest from '@material-ui/icons/Pinterest'
import Instagram from '@material-ui/icons/Instagram'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-title">about me</span>
                <img src="https://verilymag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTMwMjUzNDYyOTg1MzYxNDE4/modern-gentlemen.png" style={{width:"100%"}}alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia labore, quasi iste facere officiis unde atque ipsum, modi tenetur nobis, ipsam ducimus autem iusto placeat eius molestias! Voluptatibus, laudantium consectetur!</p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">Categories</span>
                <ul className="sidebarlist">
                    <li className="sidebarlist-item">Life</li>
                    <li className="sidebarlist-item">Style</li>
                    <li className="sidebarlist-item">Sports</li>
                    <li className="sidebarlist-item">Tech</li>
                    <li className="sidebarlist-item">Movies</li>
                    <li className="sidebarlist-item">Music</li>

                </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">Follow Us</span>
                <div className="sidebarSocial">
                    <Facebook  className="sidebar-icon" />
                    <Twitter  className="sidebar-icon"/>
                    <Pinterest  className="sidebar-icon"/>
                    <Instagram className="sidebar-icon" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar

import React from 'react'
import "./Topbar.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Avatar } from '@material-ui/core';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import {Link } from "react-router-dom"


const Topbar = () => {
    const user = false
    return (
        <div className="topbar">
            <div className="top-left">
                <FacebookIcon  className="top-icon" />
                <TwitterIcon  className="top-icon"/>
                <PinterestIcon  className="top-icon"/>
                <InstagramIcon className="top-icon" />
            </div>
            <div className="top-center">
                <ul className="toplist">
                    <li  className="toplist-item">
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li  className="toplist-item">
                        <Link to="/post/:postId" className="link">About</Link>
                    </li>
                    <li  className="toplist-item">
                        <Link to="settings" className="link">Contact</Link>
                    </li>
                    <li  className="toplist-item">
                        <Link to="/write" className="link">Write</Link> 
                    </li>
                    <li  className="toplist-item">
                        {user&&"Logout"}
                    </li>            
                 </ul>
            </div>
            <div className="top-right">
                { user?
                (<>
                <Avatar alt="Remy Sharp" src="https://timwestbrook.com/image/cache/catalog/how-to-be-a-gentleman-1140x570.jpg" className="right-icon"/>
                <YoutubeSearchedForIcon className="search-icon"/>
                </>
                ):(
                    <ul className="toplist">
                    <li className="toplist-item">
                        <Link to="/login" className="link">Login</Link>
                    </li>
                    <li className="topplist-item">
                        <Link to="/register" className="link">Register</Link>
                    </li>
                </ul>
                )
            }
            
            </div>
        </div>
    )
}

export default Topbar

import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header-titles">
                <span className="header-titleSm"> React Site Developed</span>
                <span className="header-titleLg">Blog</span>
            </div>
            <img src="https://www.travelanddestinations.com/wp-content/uploads/2019/03/Switzerland-landscape-px.jpg" alt="" className="header-img" />
        </div>
    )
}

export default Header

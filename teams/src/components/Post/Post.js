import React from 'react'
import "./post.css"

const Post = () => {
    return (
        <div className="post">
            <img src="https://www.planetware.com/wpimages/2019/12/nepal-in-pictures-beautiful-places-to-photograph-annapurna-range.jpg" className="postImg" alt="" />
            <div className="post-info">
                <div className="post-cats">
                    <span className="post-cat">
                        Music
                    </span>
                    <span className="post-cat">
                        Life
                    </span>
                </div>
                <span className="post-title">
                    Lorem ipsum dolor sit amet 
                </span>
                <hr />
                <span className="post-date">
                    5 hrs ago
                </span>
               
            </div>
            <p className="post-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi officiis commodi ex reprehenderit nihil libero deleniti eaque doloribus nobis esse necessitatibus soluta minima, optio explicabo aut quis cumque voluptas enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, fugiat!
                </p>
        </div>
    )
}

export default Post

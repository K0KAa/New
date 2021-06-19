import React from 'react'
import "./singlepost.css"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://www.dreamdictionary.org/wp-content/uploads/2019/11/falling_snow_effect.jpeg" style={{width:"100%"}} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem, ipsum dolor sit amet adipisicing.
                    <div className="singlePostEditContainer">
                        <EditIcon className="singlePostIcon"/>
                        <DeleteIcon className="singlePostIcon"/>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Kokaa</b></span>
                    <span className="singlePostDate">Date: 1hr ago</span>
                    <p className="singlePostDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ipsum quod libero, illum temporibus facere voluptatum nam nesciunt aperiam vel earum consequuntur eius expedita amet tenetur! Maiores, qui consequuntur. Earum quibusdam ullam quo eius veniam ipsum laborum doloribus deserunt debitis odio, minus, atque eveniet doloremque veritatis vero perferendis fugit, dicta maxime vitae sapiente? Optio, officiis 
                        reprehenderit. Perferendis quae assumenda facilis? Maiores, iusto? Dolores laborum ullam temporibus quisquam aperiam, possimus odit.</p>
                </div>

            </div>
        </div>
    )
}

export default SinglePost

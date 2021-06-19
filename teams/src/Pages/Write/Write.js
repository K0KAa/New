import React from 'react'
import "./write.css"
import AddIcon from '@material-ui/icons/Add';
const Write = () => {
    return (
        <div className="write">
            <img className="writeImg"  src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg" alt="" />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput"><AddIcon className="writeIcon"/></label>
                    <input type="file" id="fileInput" style={{display:'none', padding:"10px", margin:"10px"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>

                <div className="writeFormGroup">
                    <textarea  type="text" cols="40" rows="10" placeholder="Tell youy story" style={{border:"none"}}></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write

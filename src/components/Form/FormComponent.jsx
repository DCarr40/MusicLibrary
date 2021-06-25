import React from 'react';
import "./Form.css";


function Form(props){
    return(
        <div className="form-box">
            <form id="myform" >
                <div className="user-box">
                    <input type="text" name="title" value=""></input>
                    <label>Title</label>
                </div>
                <div className="user-box">
                    <input type="text" name="album" value=""></input>
                    <label>Album</label>
                </div>
                <div className="user-box">
                    <input type="text" name="artist" value=""></input>
                    <label>Artist</label>
                </div>
                <div className="user-box">
                    <input type="text" name="genre" value=""></input>
                    <label>Genre</label>
                </div>
                <div className="user-box">
                    <input type="text" name="releaseDate" value=""></input>
                    <label>Release Date</label>
                </div>
                <div className="user-box" >
                        <button type="submit" onClick={props.handleSubmit} >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Form;
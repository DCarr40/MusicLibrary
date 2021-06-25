import React from 'react';
import "./Form.css";


function Form(props){
    return(
        <div className="form-box">
            <form id="myform" >
                <div className="user-box">
                    <input type="text" name="title" defaultValue="" placeholder="Title"></input>
                    <label>Title</label>
                </div>
                <div className="user-box">
                    <input type="text" name="album" defaultValue="" placeholder="Album"></input>
                    <label>Album</label>
                </div>
                <div className="user-box">
                    <input type="text" name="artist" defaultValue="" placeholder="Artist"></input>
                    <label>Artist</label>
                </div>
                <div className="user-box">
                    <input type="text" name="genre" defaultValue="" placeholder="Genre"></input>
                    <label>Genre</label>
                </div>
                <div className="user-box">
                    <input type="text" name="releaseDate" defaultValue="" placeholder="Release Date"></input>
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
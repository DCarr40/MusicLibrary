import React from 'react';
import "./Form.css";

function Form(props){
    return(
        <div className="form-box">
            <form>
                <div className="user-box">
                    <input></input>
                    <label>Title</label>
                </div>
                <div className="user-box">
                    <input></input>
                    <label>Album</label>
                </div>
                <div className="user-box">
                    <input></input>
                    <label>Artist</label>
                </div>
                <div className="user-box">
                    <input></input>
                    <label>Genre</label>
                </div>
                <div className="user-box">
                    <input></input>
                    <label>Release Date</label>
                </div>
            </form>
        </div>
    )
}
export default Form;
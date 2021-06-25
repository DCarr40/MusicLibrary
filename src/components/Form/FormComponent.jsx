import React from 'react';
import "./Form.css";


function Form(props){
    return(
        <div className="form-box">
            <form id="myform">
                <div className="user-box">
                    <input type="text" ></input>
                    <label>Title</label>
                </div>
                <div className="user-box">
                    <input type="text" ></input>
                    <label>Album</label>
                </div>
                <div className="user-box">
                    <input type="text" ></input>
                    <label>Artist</label>
                </div>
                <div className="user-box">
                    <input type="text" ></input>
                    <label>Genre</label>
                </div>
                <div className="user-box">
                    <input type="text" ></input>
                    <label>Release Date</label>
                </div>
                <div className="user-box">
                        <button type="submit" >
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
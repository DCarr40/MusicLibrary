import React from 'react';
import "./Form.css";

function TheForm(props){
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
export default TheForm;
//     return (<div>

//     </div>)
   


//     //     <div className="form-box">
//     //         <form>
//     //             <div className="user-box">
//     //                 <input></input>
//     //                 <label>Username</label>         
//     //                 <input></input>
//     //                 <label>Password</label>
//     //             </div>
//     //         </form>
//     //   </div>
// }
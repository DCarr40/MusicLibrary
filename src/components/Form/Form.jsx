import React from 'react';
import "./Form.css";

function TheForm() {
    return(
        <div>
            <body>
                <form>
                    <input name="title" type="title"></input>
                    <input name="album" type="album"></input>
                    <input name="artist" type="artist"></input>
                    <input name="genre" type="genre"></input>
                    <input name="releaseDate" type="releaseDate"></input>

                    <input type="Submit" value="Submit"></input>
                </form>
            </body>
        </div>
    )
 
}

export default TheForm;
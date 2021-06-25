import React from 'react';
import "./MusicTable.css";


const MusicTable = ({ music }) => {
     let renderedMusic = music.map((song) => {
         return (

                        <tbody>
                            <tr>
                                <td key={song.title}>{song.title}</td>
                                <td key={song.album}>{song.album}</td>
                                <td key={song.artist}>{song.artist}</td>
                                <td key={song.genre}>{song.genre}</td>
                                <td key={song.releaseDate}>{song.releaseDate}</td>
                            </tr>
                        </tbody>

        );
     });

    return (
       
        <div className = "table-wrapper">
            <table className = "fl-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                {renderedMusic}
            </table>
               
            
        </div>);
    };




export default MusicTable;
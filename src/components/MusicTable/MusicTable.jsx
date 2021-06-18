import React from 'react';
import "./MusicTable.css";


const MusicTable = ({ music }) => {
     let renderedMusic = music.map((song) => {
         return (
            <div >
                    <table className ="tbl-content "  cellpadding="0" cellspacing="0" border="0">
                        <tbody>
                            <tr>
                                <td key={song.title}>{song.title}</td>
                                <td key={song.album}>{song.album}</td>
                                <td key={song.artist}>{song.artist}</td>
                                <td key={song.genre}>{song.genre}</td>
                                <td key={song.releaseDate}>{song.releaseDate}</td>
                            </tr>
                        </tbody>
                    </table>   
            </div>
        );
     });

    return (
        <div>
            <table className = "tbl-header " cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
            </table>
            {renderedMusic}
        </div>);
    };




export default MusicTable;
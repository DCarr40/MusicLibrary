import React from 'react';


const MusicTable = ({ music }) => {
     let renderedMusic = music.map((song) => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
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
        );
    });
    return <div>{renderedMusic}</div>;
    };




export default MusicTable;
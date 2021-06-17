import React from 'react';


const MusicTable = ({ music }) => {
    let renderedMusic = music.map((song) => {
        return (
        <li key={song.title}>
            Title: {song.title} <br></br> Release Date: {song.releaseDate}
        </li>
        );
    });
    return <ul>{renderedMusic}</ul>;
    };




export default MusicTable;
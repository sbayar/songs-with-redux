import React from 'react'
import {connect} from 'react-redux';

const SongDetail = ({song}:any) => {

    if(!song) {
        return <div>Select a song</div>
    }

    
    return (
        <div> 
            <h3>Details for: </h3>
            <div>
                Title: {song.title}
            </div>
            <div>
                Duration: {song.duration}
            </div>
        
        </div>
    )
}

const mapToStateProps = (state: any) => {
    return {song: state.selectedSong}
}

export default connect(mapToStateProps)(SongDetail);
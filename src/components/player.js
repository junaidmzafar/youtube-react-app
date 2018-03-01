import React from 'react';

class Player extends React.Component {
    render() {
        return (
            <div id="player">
                <video width="320" height="240" controls>
                    <source src="movie.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}

export default Player;
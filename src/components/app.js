import React from 'react';
import Navigation from './navigation';
import Player from './player';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation />
                <Player />
            </div>
        )
    }
}

export default App;
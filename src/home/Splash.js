import React from 'react';
import Sidebar from '../site/Sidebar';

class Splash extends React.Component{

    render(){
        return (
            <div>
                <Sidebar token={this.props.sessionToken}/>
            </div>
        )
    }
}

export default Splash;
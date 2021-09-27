import React from 'react';
import {} from './Topbar.css';
import { NotificationsNone ,Language , Settings} from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="topleft">
                         <span className="logo">Myadmin</span>
                </div>
                <div className="topright">
                    <div className="topbaricons">
                        <NotificationsNone /> 
                        <span className="gol">2</span>       
                    </div>
                    <div className="topbaricons">
                        <Language /> 
                        <span className="gol">2</span>       
                    </div>
                    <div className="topbaricons">
                        <Settings />        
                    </div>
                    <img src="AA.jpg" alt="profile" className="topavtar"/>
                </div>
            </div>
            
        </div>
    )
}

export default Topbar;

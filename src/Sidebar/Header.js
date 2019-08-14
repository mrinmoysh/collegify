import React, { Component } from 'react';
import './Header.css';
import styled from 'styled-components';

import "bootstrap/dist/css/bootstrap.min.css";
import sideDrawer from '../components/SideDrawer/SideDrawer';


class Header extends Component {
    render() {
        return (
            <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <sideDrawer />
            </div>
            
            <div className="spacer" />
            <div className="toolbar_navigation-items">

                <ul>
                <div class="nav-course mr-3 mt-2">
                        <select id="switcher-web" class="custom-select strong">
                            <option value="0">SAT</option><option value="1">ACT</option>
                        </select>
                    </div>
                    <div class="nav-notifications">
    <div class="nav-item dropdown">
        <a class="nav-link mobile-custom-notification dropdown-toggle notifications-animate-shake pointer mt-2" href="/" id="notificationsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-bell"></i>
            <div class="sonar-wrapper d-none"><div class="sonar-emitter"><div class="sonar-wave"></div></div></div>
        </a>
        
        <div class="dropdown-menu notification-panel" aria-labelledby="navbarDropdown">
            <div>

                <span class="pointer"><h5 class="text-grey ml-2 mr-2" >Unread Mails.</h5></span>

                
                
            </div>


            <div class="dropdown-divider mt-1"></div>
            <a class="dropdown-item text-center" href="/"><h5 class="text-primary text-uppercase">All Mails</h5></a>
            
        </div>
    </div>
</div>
                    <div class="nav-profile">
                        <div class="nav-item dropdown show">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                                <img src={"./img/avatar2.png"} class="rounded circle" alt="avatar2" width="40" heght="40"></img></a>
                            <drop class="dropdown-menu  mr-2" aria-labelledby="navbarDropdown" x-placement="bottom-start" >
                                <a class="dropdown-item" href="/"><h5><i class="fas fa-cog mr-2"></i>Login</h5></a>
                                
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item pointer" href="/"><h5><i class="fas fa-power-off mr-2"></i>Logout</h5></a>
                            </drop>
                        </div>
                    </div>
    
 
                    
                    
                    
                </ul>
            </div>
        </nav>
    </header>
        );
    }
}

export default Header;
const drop= styled.nav`
position: "absolute";
transform: translate3d(-36px, 70px, 0px);
top: 0px; 
left: 0px; 
will-change: transform;
`
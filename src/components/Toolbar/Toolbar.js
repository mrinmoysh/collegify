import React from 'react';
import './Toolbar.css';


const toolbar=props=> (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                
            </div>
            <div className="toolbar_logo"><a href="/"><img src={"./img/logo.png"} alt="logo" className="brand-logo"></img> </a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">

                <ul>
                    <li><a href="/">
                    <select id="switcher-web" class="custom-select">
                            <option value="0">SAT</option><option value="1">ACT</option>
                        </select>
                        </a></li>
                    <li><a href="/">
                    <i class="fas fa-bell"></i>
                    </a></li>
                    <li><a href="/">users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default  toolbar;
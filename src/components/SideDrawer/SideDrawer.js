import React, { Component } from 'react';
import './SideDrawer.css'

class Sidebar extends Component {
    render() {
        return (
                <div>  
                            
                    <div class="sidebar">
                        <div className="sidebar-nav-item logo">
                            <a href="/"><img src={"./img/logo.png"} alt="logo" class="brand-logo"></img>
                            </a>
                        </div>
                                            
                        <a href="/" class="v-link-active">
                            <div class="sidebar-nav-item active">
                                <i class="fas fa-inbox mr-2"></i>
                                Dashboard
                            </div>
                        </a>
                        <a href="/">
                            <div class="sidebar-nav-item">
                                <i class="fas fa-book-open mr-2"></i>
                                Course
                            </div>
                        </a>                           
                        <a href="/">
                            <div class="sidebar-nav-item">
                                <i class="fas fa-calculator mr-2"></i>
                                Exams
                            </div>
                        </a>
                        <a href="/">
                            <div class="sidebar-nav-item">
                                <i class="fas fa-chart-line mr-2"></i>
                                Reports
                            </div>
                        </a>
                                
                        <a href="/">
                            <div class="sidebar-nav-item">
                                <i class="fas fa-cog mr-2"></i>
                                My Account
                            </div>
                        </a>                   
                    </div>
                 </div>
            
            );
        } 
    }

export default Sidebar;
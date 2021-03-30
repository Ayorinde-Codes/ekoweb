import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

export default function Sidenav(props) {

    return (
        <div>
            <div className="dashboard-sidebar">
		<div className="dashboard-sidebar-inner" data-simplebar>
			<div className="dashboard-nav-container">

				<a href="#" className="dashboard-responsive-nav-trigger">
					<span className="hamburger hamburger--collapse" >
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</span>
					<span className="trigger-title">Dashboard Navigation</span>
				</a>

            <div className="dashboard-nav">
                <div className="dashboard-nav-inner">

                    <ul data-submenu-title="Start">
                        <li className="active"><Link to="/" style={{ textDecoration: 'none' }}><i className="icon-material-outline-dashboard"></i> Dashboard</Link></li>
                        
                    </ul>
                    
                    <ul data-submenu-title="Profile Organize and Manage">
                        
                        <li><Link to="/health" style={{ textDecoration: 'none' }}><i className="icon-line-awesome-users"></i> Health </Link></li>

                        <li><Link to="/transport" style={{ textDecoration: 'none' }}><i className="icon-line-awesome-users"></i> Transport </Link></li>
                        
                        {/* <li><Link to="/kyc" style={{ textDecoration: 'none' }}><i className="icon-line-awesome-users"></i> Citizen </Link></li> */}
                    </ul>

                    {/* <ul data-submenu-title="Account">
                        

                        {currentUser.is_admin ? (<li><Link to="/users" style={{ textDecoration: 'none' }}><i className="icon-line-awesome-group"></i> Users</Link></li>) : '' }

                        {!currentUser.is_artisan ? (<li><Link to="/client/settings" style={{ textDecoration: 'none' }}><i className="icon-material-outline-settings"></i> Settings</Link></li>) : '' }

                        {currentUser.is_artisan ? (<li><Link to="/artisan/settings" style={{ textDecoration: 'none' }}><i className="icon-material-outline-settings"></i> Settings</Link></li>) : '' }
                     
                        {currentUser.is_admin ? (<li><Link to="/send_broadcast" style={{ textDecoration: 'none' }}><i className="icon-material-outline-email"></i> Send Broadcast Messages</Link></li>) : '' }

                        
                        <li><Link to={"/login"} style={{ textDecoration: 'none' }} onClick={logOut}><i className="icon-material-outline-power-settings-new"></i> Logout</Link></li>
                    </ul> */}
                    
                </div>
            </div>

            
			</div>
		</div>
	</div>
        </div>
    )
}

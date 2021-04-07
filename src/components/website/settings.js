import React, {useEffect, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import DashboardFooter from './dashboardfooter';
import Sidenav from './sidenav';

//Artisan
export default function Settings() {

    useEffect(() => {
        let scripts = [
            { src: "/assets/js/custom.js" },
        ]

        scripts.map(item => { 
            const script = document.createElement("script")
            script.src = item.src
            script.async = true
            document.body.appendChild(script)
        })    
      }, []);
	  


      return (
        <div>
            
            <div className="dashboard-container">

			<Sidenav />

            <div className="dashboard-content-container" data-simplebar>
				<div className="dashboard-content-inner" >
					
					<div className="dashboard-headline">
						<h3>Settings</h3>

						<nav id="breadcrumbs" className="dark">
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">Dashboard</a></li>
								<li>Settings</li>
							</ul>
						</nav>
					</div>
	

			<div className="row">

				<div className="col-xl-12">
					<div className="dashboard-box margin-top-0">

						<div className="headline">
							<h3><i className="icon-material-outline-account-circle"></i> My Account</h3>
						</div>

						<div className="content with-padding padding-bottom-0">

							<div className="row">

							{/* <form onSubmit={updateArtisan}>
                <div className="col">
                    <div className="row">

                        <div className="col-xl-6">
                            <div className="submit-field">
                                <h5>First Name</h5>
                                <input type="text" name="firstname" value={firstname} onChange={e => {setFirstname(e.target.value);}}  className="with-border" placeholder="first name" />
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="submit-field">
                                <h5>Last Name</h5>
                                <input type="text" name="lastname" value={lastname} onChange={e => {setLastname(e.target.value);}} className="with-border" placeholder="last name" />
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="submit-field">
                                <h5>State</h5>
                                <div className="input-with-icon">
                                    <select  value={state} onChange={e => {setState(e.target.value);}}>
                                        {selectedState}
                                    </select>
                                <i className="icon-material-outline-location-on"></i>
                                 </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
								<div className="submit-field">
											<h5>Location</h5>
                                    <div className="input-with-icon">
                                        <select value={location} onChange={e => {setLocation(e.target.value);}}>
                                            {selectLocation}
                                        </select>
                                        <i className="icon-material-outline-location-on"></i>
                                    </div>
                                </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="submit-field">
                                <h5>Age</h5>
                                <input name="age" value={age} onChange={e => {setAge(e.target.value);}}  className="with-border" type="number" placeholder="Your Age" />
                            </div>
                        </div>

                        <div className="col-xl-6">
								<div className="submit-field">
                                        <h5>Handwork</h5>
                                    <div className="input-with-icon">
                                        <select value={handwork} onChange={e => {setHandwork(e.target.value);}} placeholder="Handworks">
                                            {selectedHandiworks}
                                        </select>
                                        <i className="icon-material-outline-business-center"></i>
                                    </div>
                                </div>
                        </div>
                                                            

                        <div className="col-xl-6">
                            <div className="submit-field">
                                <h5>Skill Description</h5>
                                <div className="submit-field">
                                <textarea cols="30" value={skilldescription} onChange={e => {setSkilldescription(e.target.value);}}  rows="5" className="with-border"></textarea>
                            </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="submit-field">
                                <h5>Address</h5>
                                <div className="submit-field">
                                <textarea cols="30" value={address} onChange={e => {setAddress(e.target.value);}}  rows="5" name="skill_decription" className="with-border"></textarea>
                            </div>
                            </div>
                        </div>


                        <div className="col-xl-6">
                            <button type="submit" className="button ripple-effect big margin-top-30" disabled={disabled} >Update Changes</button>
                        </div>
                    </div>

                    <br />

                </div>
            </form> */}
								
							</div>

						</div>
					</div>
				</div>


				</div>


					<div className="row">


						<div className="col-xl-12">

							{/* <PasswordUpdate /> */}

						</div>

				
					<div className="row">

						<div className="col-xl-12">

							{/* <SocialUpdate /> */}

						</div>
					</div>

			</div>
   
   			<DashboardFooter />

		</div>
	</div>
    </div>


        
        </div>
    )
}
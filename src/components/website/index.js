import React, {useEffect, useState} from 'react'
import Header from './header'
import { Link } from 'react-router-dom'
import Sidenav from './sidenav'
import DashboardFooter from './dashboardfooter'



export default function Index() {

      
      return (
        <div>

            <div className="dashboard-container">

            <Sidenav />


<div className="dashboard-content-container" data-simplebar>
    <div className="dashboard-content-inner" >
        
        {/* <!-- Dashboard Headline --> */}
        <div className="dashboard-headline">
           
            <h3>Howdy</h3>
            <span>We are glad to see you again!</span>

            {/* <!-- Breadcrumbs --> */}
            <nav id="breadcrumbs" className="dark">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Dashboard</li>
                </ul>
            </nav>
        </div>

        {/* <!-- Fun Facts Container --> */}

        
        <div className="row">

            

        <div className="col-xl-12">
					<div className="dashboard-box margin-top-0">

						<div className="headline">
						</div>

						<div className="content with-padding padding-bottom-0">

							<div className="row">
                                <div className="fullwidth-carousel-container margin-top-70 margin-bottom-70">

                                    <h1 align="center"> WELCOME TO EKO WEB APP </h1>

                                </div>
							</div>

						</div>
					</div>
				</div>
        </div>

        <div className="row">

        </div>
        
        <DashboardFooter />

    </div>
</div>

</div>

<div id="small-dialog" className="zoom-anim-dialog mfp-hide dialog-with-tabs">

	<div className="sign-in-form">

		<ul className="popup-tabs-nav">
			<li><a href="#tab">Add Note</a></li>
		</ul>

		<div className="popup-tabs-container">

			<div className="popup-tab-content" id="tab">
				
				<div className="welcome-text">
					<h3>Do Not Forget 😎</h3>
				</div>
					
				<form method="post" id="add-note">

					<select className="selectpicker with-border default margin-bottom-20" data-size="7" title="Priority">
						<option>Low Priority</option>
						<option>Medium Priority</option>
						<option>High Priority</option>
					</select>

					<textarea name="textarea" cols="10" placeholder="Note" className="with-border"></textarea>

				</form>
				
				<button className="button full-width button-sliding-icon ripple-effect" type="submit" form="add-note">Add Note <i className="icon-material-outline-arrow-right-alt"></i></button>

			</div>

		</div>
	</div>
</div>
        </div>
    )
}

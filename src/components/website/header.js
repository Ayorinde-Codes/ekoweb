import React, {useEffect} from 'react';
import { Link } from "react-router-dom";


function Header(props){

    return (
        <div>


<header id="header-container" className="fullwidth">

	{/* <!-- Header --> */}
	<div id="header">
		<div className="container">
			
			{/* <!-- Left Side Content --> */}
			<div className="left-side">
				
				{/* <!-- Logo --> */}
				<div id="logo">
					<Link to="/"><img src="/assets/images/ocx_logo.png" alt="" className="img-fluid" /></Link>
				</div>

				{/* <!-- Main Navigation --> */}
                
				<nav id="navigation">
					<ul id="responsive" >
					<div style={{ margin:'0px, 0px, 0px, 50px' }}>
						<li  style={{ margin:'0px, 0px, 0px, 50px' }}><Link to="/" className="current">Home</Link> </li>

                        <li><Link to="/health"> Health </Link></li>

						<li><Link to="/transport"> Transport </Link></li>

</div>
					</ul>
                    
					
				</nav>
				
				<div className="clearfix"></div>
				
			</div>

			{/* <!-- Right Side Content / End --> */}
			<div className="right-side">

				{/* <!--  User Notifications --> */}
				<div className="header-widget">
					{/* <!-- Notifications --> */}
                    
					{/* {loginButtons} */}

				</div>
				
				{/* <!-- Mobile Navigation Button --> */}
				<span className="mmenu-trigger">
					<button className="hamburger hamburger--collapse" type="button">
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</button>
				</span>

			</div>
			{/* <!-- Right Side Content / End --> */}

		</div>
	</div>
	{/* <!-- Header / End --> */}

</header>
<div className="clearfix"></div>


      </div>
    )
}

export default Header;
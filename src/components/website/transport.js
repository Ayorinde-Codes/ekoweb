import React, {useEffect, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import DashboardFooter from './dashboardfooter';
import Sidenav from './sidenav';
import axios from 'axios'


export default function Transport() {

    const [roads, setRoads]= useState([]);
    const [cameras, setCameras]= useState([]);
    const [isError, setIsError] = useState(false);
	const [isSucess, setIsSucess] = useState(false);
    const [message, setMessage] = useState(false);

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

        getRoads();

        getCameras();

      }, []);
	  

      const getRoads = () => {

            axios.get('/public/custom_data/transport/roads.json')
            .then(result => {

                    console.log(result.data.road)
                    setRoads(result.data.road)
                    
            }).catch(err =>{
                // setMessage(err.response.data.message)
                console.log(err.response.statusText);
            })
      }

      const getCameras = () => {

            axios.get('/public/custom_data/transport/cameras.json')
            .then(result => {
                    console.log(result.data.cameras)
                    setCameras(result.data.cameras)
                    
            }).catch(err =>{
                // setMessage(err.response.data.message)
                console.log(err.response.statusText);
            })
        }

        const roadsGrid = () => {
            return roads && roads.map(({ condition, distance, created_at, last_maintained_at, lga, name, number_of_lanes }) => {
                return (
                        <article key={name}>
                            <div align="center"> <img src="/assets/images/road.png" alt="tshirt photo" style={{height : "150px", width : "150px"}}/> </div>
                            <div className="text">
                                <h3> {name} </h3>
                                <p> Condition: {condition} </p>
                                <p> Lga: {lga} </p>
                                <p> Distance: {distance} </p>
                                <p> Last Maintained Date: {last_maintained_at} </p>
                                <p> Number Of Lanes: {number_of_lanes} </p>
                                <p> Created Date: {created_at} </p>

                            </div>
                        </article>
                )
            })
        }

        const cameraGrid = () => {
            return cameras && cameras.map(({ camera_type, location }) => {
                return (
                        <article key={location}>
                            <div align="center"> <img src="/assets/images/camera.png" alt="tshirt photo" style={{height : "150px", width : "150px"}}/> </div>
                            <div className="text">
                                <p> <b> Camera Type: </b> {camera_type} </p>
                                <p> <b> Location: </b> {location} </p>
                            </div>
                        </article>
                )
            })
        }


      return (
        <div>
            
            <div className="dashboard-container">

			<Sidenav />

            <div className="dashboard-content-container" data-simplebar>
				<div className="dashboard-content-inner" >
					
					<div className="dashboard-headline">
						<h3>Transport Data</h3>

						<nav id="breadcrumbs" className="dark">
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">Transport</a></li>
							</ul>
						</nav>
					</div>
	
			<div className="row">

				<div className="col-xl-12">
					<div className="dashboard-box margin-top-0">

						<div className="headline">
							<h3><i className="icon-material-outline-account-circle"></i> Transport </h3>
						</div>

						<div className="content with-padding padding-bottom-0">

							<div className="row">

								
							</div>

						</div>
					</div>
				</div>


				</div>


					<div className="row">


						<div className="col-xl-12">

                        <div id="test1" className="dashboard-box">

                            <div className="headline">
                                <h3><i className="icon-line-awesome-hospital-o"></i> Roads </h3>
                            </div>

						<div className="content with-padding padding-bottom-0">

                        <div className="container"> 

                            <main className="grid">

                                { roadsGrid() }

                            </main>
                        </div> 
                        </div>

                        <br />
                        

 
                        </div>

						</div>
                    </div>


                        <div className="row">
						    <div className="col-xl-12">

                                <div id="test1" className="dashboard-box">

                                    <div className="headline">
                                        <h3><i className="icon-line-awesome-hospital-o"></i> Camera </h3>
                                    </div>

                                    <div className="content with-padding padding-bottom-0">

                                    <div className="container"> 

                                        <main className="grid">

                                            { cameraGrid() }

                                        </main>
                                    </div> 
                                    </div>

                                    <br />

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
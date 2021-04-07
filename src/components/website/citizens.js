import React, {useEffect, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import DashboardFooter from './dashboardfooter';
import Sidenav from './sidenav';
import axios from 'axios'

export default function Citizen() {

    const [citizens, setCitizens]= useState([]);
    const [residents, setResidents]= useState([]);
    const [isError, setIsError] = useState(false);
	const [isSucess, setIsSucess] = useState(false);
    const [message, setMessage] = useState(false);


    useEffect(() => {
        let scripts = [
            { src: "/assets/js/custom.js" },
        ]
        // http://api.citizens.staging.ekoopenbuild.com/citizens
        scripts.map(item => { 
            const script = document.createElement("script")
            script.src = item.src
            script.async = true
            document.body.appendChild(script)
        }) 

        getCitizens();

        getResidents();
      }, []);
	  

      const getCitizens = () => {
            axios.get('https://api.citizens.staging.ekoopenbuild.com/citizens')
            .then(result => {

                    console.log(result.data.OCXPayload.data.data)
                    setCitizens(result.data.OCXPayload.data.data)
                    
            }).catch(err =>{
                // setMessage(err.response.data.message)
                console.log(err.response.statusText);
            })
      }

      const getResidents = () => {
            axios.get('https://api.citizens.staging.ekoopenbuild.com/residents')
            .then(result => {
                    console.log(result.data.OCXPayload.data.data)
                    setResidents(result.data.OCXPayload.data.data)
                    
            }).catch(err =>{
                // setMessage(err.response.data.message)
                console.log(err.response.statusText);
            })
        }

        const citizensGrid = () => {
            return citizens && citizens.map(({ id, lastname, firstname, bvn, address, employment_address, employment_status, relationship_status, spouses_fullname, state_of_origin  }) => {
                return (
                        <article key={id}>
                            <div align="center"> <img src="/assets/images/user-avatar-placeholder.jpeg" alt="tshirt photo" style={{height : "150px", width : "150px"}}/> </div>
                            <div className="text">
                                <h3>Citizens </h3>
                                <p> Firstname: {firstname} </p>
                                <p> Lastname: {lastname} </p>
                                <p> bvn: {bvn} </p>
                                <p> Address: {address} </p>
                                <p> Employment Address: {employment_address} </p>
                                <p> Employment Status: {employment_status} </p>
                                <p> Relationship Status: {relationship_status} </p>
                                <p> Spouses Fullname: {spouses_fullname} </p>
                                <p> State Of Origin: {state_of_origin} </p>

                            </div>
                        </article>
                )
            })
        }



        const residentsGrid = () => {
            return residents && residents.map(({ id, firstname, lastname, house_number, street }) => {
                return (
                        <article key={id}>
                            <div align="center"> <img src="/assets/images/house.png" alt="tshirt photo" style={{height : "150px", width : "150px"}}/> </div>
                            <div className="text">
                                <h3> Resident </h3>
                                <p> <b> First Name: </b> {firstname} </p>
                                <p> <b> Last Name: </b> {lastname} </p>
                                <p> <b> House Number: </b> {house_number} </p>
                                <p> <b> Street: </b> {street} </p>
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
						<h3>Health Data</h3>

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
							<h3><i className="icon-material-outline-account-circle"></i> Citizens</h3>
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
                                <h3><i className="icon-line-awesome-hospital-o"></i> Citizens </h3>
                            </div>

						<div className="content with-padding padding-bottom-0">

                        <div className="container"> 

                            <main className="grid">

                                { citizensGrid() }

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
                                        <h3><i className="icon-line-awesome-hospital-o"></i> Residents </h3>
                                    </div>

                                    <div className="content with-padding padding-bottom-0">

                                    <div className="container"> 

                                        <main className="grid">

                                            { residentsGrid() }

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
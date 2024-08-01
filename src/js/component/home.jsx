import React from "react";
import Navbar from "../component/navbar";
import Card from "../component/card";
import Jumbotron from "../component/jumbotron";
import Footer from "../component/footer";
//include images into your bundle


//create your first component
const Home = () => { 
	return (
		<div className="principal">
			<Navbar />
			<div className="secundario-container ">
				<Jumbotron />
				<div className="row d-flex justify-content-between">
				<Card 
					image="https://i.pinimg.com/originals/09/74/72/097472efee176075f11c88a8a8d4c49e.jpg"
					text= "perritos sonriendo"

				/>
				<Card
				image="https://i.pinimg.com/originals/09/74/72/097472efee176075f11c88a8a8d4c49e.jpg"
				text= "perritos sonriendo"
				/>
				<Card
				image="https://i.pinimg.com/originals/09/74/72/097472efee176075f11c88a8a8d4c49e.jpg"
				text= "perritos sonriendo"
				/>
				</div>
				
			</div>
			

		</div>

	)

};

export default Home;

import React from "react";
import Navbar from "../component/navbar";
import Card from "../component/card";
import Jumbotron from "../component/jumbotron";
import Footer from "../component/footer";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="principal ">
			<Navbar />
			<div className="contenedor">
				<Jumbotron />
				<div className="row ">
					<Card
						image="https://th.bing.com/th/id/R.c88cee43103b39d8fea2cd9883f43a61?rik=GzNA6N69COn1DQ&pid=ImgRaw&r=0"
						titulo="San Andrés"
						text=" ¡¡Prepárate para explorar playas preciosas que tienen un color único! Además, en San Andrés podrás bañarte en el mar de los siete colores, descubrir la fauna y flora marina que alberga y disfrutar de algunas de las mejores playas de Colombia. "
						link="https://lostraveleros.com/que-hacer-en-san-andres/#:~:text=Al%20suroeste%20de%EE%80%80%20la%20isla%EE%80%81"
						buttonText="Visitalo"
					/>
					<Card
						image="https://th.bing.com/th/id/R.efe722167a0714d7bbe17fb9ec771920?rik=ekI94T21VZkULA&pid=ImgRaw&r=0"
						titulo="Caño Cristales"
						text="Entre los Andes y el Amazonas se encuentran las llanuras tropicales del centro de Colombia, con sus millones de cabezas de ganado, sus praderas inundadas estacionalmente y el río más llamativo del mundo: Caño Cristales. "
						link="https://colombia.travel/es/la-macarena/cano-cristales-una-maravilla-natural"
						buttonText="Visitalo"
					/>
					<Card
						image="https://th.bing.com/th/id/R.1a497d63b2507f3db81791f6c21b2739?rik=V0I9dMnv9WVW5g&pid=ImgRaw&r=0"
						titulo="Guatapé"
						text="Es el parque natural con las palmas de cera más altas del mundo, se encuentra en el Eje Cafetero.  "
						link="https://blog.redbus.co/wp-content/uploads/2018/03/Valle-de-Cocora-colombia.jpg"
						buttonText="Visitalo"
					/>
				</div>
			</div>
			<Footer/>
		</div>






	)

};

export default Home;

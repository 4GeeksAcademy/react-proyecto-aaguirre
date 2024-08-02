import React from "react";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary  ">
            <div className="container-fluid justify-content-around ">
            <a className="navbar-brand" href="#">Colombia travel</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ">
                    <a className="nav-item nav-link active" href="https://tipsparatuviaje.com/platillos-tipicos-de-colombia/"> <span className="sr-only">(current)</span>Comida</a>
                    <a className="nav-item nav-link" href="https://tipsparatuviaje.com/paisajes-naturales-de-colombia/">Paisajes</a>
                    <a className="nav-item nav-link" href="https://www.ecologiaverde.com/flora-y-fauna-de-colombia-2582.html">Fauna</a>
                    <a className="nav-item nav-link " href="https://encolombia.com/educacion-cultura/geografia-colombiana/colombia/flora-en-colombia/">Flora</a>
                </div>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
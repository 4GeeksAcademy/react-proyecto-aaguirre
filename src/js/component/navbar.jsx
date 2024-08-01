import React from "react";



const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-primary bg-primary  ">
            <div className="container-fluid ">
            <a class="navbar-brand" href="#">Colombia travel</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ">
                    <a class="nav-item nav-link active" href="https://tipsparatuviaje.com/platillos-tipicos-de-colombia/"> <span class="sr-only">(current)</span>Comida</a>
                    <a class="nav-item nav-link" href="https://tipsparatuviaje.com/paisajes-naturales-de-colombia/">Paisajes</a>
                    <a class="nav-item nav-link" href="https://www.ecologiaverde.com/flora-y-fauna-de-colombia-2582.html">Fauna</a>
                    <a class="nav-item nav-link " href="https://encolombia.com/educacion-cultura/geografia-colombiana/colombia/flora-en-colombia/">Flora</a>
                    
                </div>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
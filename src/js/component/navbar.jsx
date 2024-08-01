import React from "react";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
            <div className="navbar __secundary container-fluid ">
                <a class="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Servicies</a>
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
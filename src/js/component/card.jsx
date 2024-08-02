import React from "react";

const Card = ({ image, text, titulo, buttonText, link }) => {
    return (

            <div className="card col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <img className="cart-img  " src={image} />
                <div className="cart-body ">
                    <h4 className="titulos">{titulo}</h4>
                    <p className="cart-text ">{text}</p>
                    <a href={link} className="mb-4 btn btn-light">{buttonText}</a>
                   
                </div>
            </div>
    



    );
}

export default Card; 
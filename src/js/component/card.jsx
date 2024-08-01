import React from "react";

const Card = ({ image, text, buttonText, link }) => {
    return (
        <div className="cart-container col-sm-10 col-md-6 col-lg-3 " >
            <img className="cart-img  "src={image} />
            <div className="cart-body ">
                <p className="cart-text ">{text}</p>
                <div className="botn d-flex justify-content-center">
                    <a href={link} className="mb-4 btn btn-light">{buttonText}</a>
                </div>
            </div>

        </div>



    );
}

export default Card; 
import React from "react";

const Card = ({ image, text, buttonText, link }) => {
    return (
        <div className="cart container col-sm-12 col-md-6 col-lg-3" >
            <img className="cart-img-top pt-3 "src={image} />
            <div className="cart-body p-4">
                <p className="cart-text p-4">{text}</p>
                <div className="d-flex justify-content-center">
                    <a href={link} className="mb-4 btn btn-light">{buttonText}</a>
                </div>
            </div>

        </div>



    );
}

export default Card; 
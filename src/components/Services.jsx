import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpeg";
import img2 from "../assets/4.jpeg";

export const Services = () => {
    return (
        <div className="services">
            <Carousel>
                <div>
                    <img src={img1} alt="Item1" />
                    <p>Full stack</p>
                </div>

                <div>
                    <img src={img2} alt="Item3" />
                    <p>Peer-to-peer Support</p>
                </div>
            </Carousel>
        </div>
    );
};

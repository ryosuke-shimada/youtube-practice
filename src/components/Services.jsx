import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpeg";
import img2 from "../assets/4.jpeg";

export const Services = () => {
    return (
        <div className="services">
            <Carousel
                infiniteLoop
                autoPlay
                showStatus={false}
                showArrows={false}
                showThumbs={false}
                // showIndicators={false} 下部のインジケーターを表示しない
                interval={1000}
            >
                {/* infiniteLoopはカルーセルで囲んだ要素のスライド時のアイコンの加工 */}
                <div>
                    <img src={img1} alt="Item1" />
                    <p className="legend">Full stack</p>
                    {/* {legendはカルーセルの要素の説明文（Pタグ等）をテンプレの加工が出来る} */}
                </div>

                <div>
                    <img src={img2} alt="Item3" />
                    <p className="legend">Peer-to-peer Support</p>
                </div>
            </Carousel>
        </div>
    );
};

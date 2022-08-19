import React from 'react';
import slider1 from '../../../assets/images/home/slider/slider1.png';
import slider2 from '../../../assets/images/home/slider/slider2.png';
import slider3 from '../../../assets/images/home/slider/slider3.png';

const Slider = () => {
    return (
        <>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={slider1} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={slider2} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={slider3} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            
        </>
    );
};

export default Slider;
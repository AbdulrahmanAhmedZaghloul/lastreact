import React from 'react';
import imageSilder1 from '../../assets/images/slider-image-1.jpeg';
import imageSilder2 from '../../assets/images/slider-image-2.jpeg';
import imageSilder3 from '../../assets/images/slider-image-3.jpeg';
import Slider from "react-slick";
// one silder Home page
export default function MainSilder() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: true,
        arrows:false,
    };
    return (<React.Fragment>
        <div className='py-2 mx-auto'>
            <div className='flex justify-center py-5 flex-wrap mx-auto'>
                <div className='w-2/4'>
                    <Slider className='rounded-none p-0' {...settings}>
                        <img className='w-full h-[26.1rem] rounded-none' src={imageSilder3} alt="imageSilder3" />
                        <img className='w-full h-[26.1rem] rounded-none' src={imageSilder2} alt="imageSilder3" />
                        <img className='w-full h-[26.1rem] rounded-none' src={imageSilder1} alt="imageSilder3" />
                    </Slider>
                </div>
                <div className='w-1/4'>
                    <img className='w-full rounded-none' src={imageSilder2} alt="imageSilder3" />
                    <img className='w-full rounded-none' src={imageSilder3} alt="imageSilder3" />
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}

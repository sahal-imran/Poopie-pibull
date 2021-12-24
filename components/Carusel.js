import React, {useRef} from "react";
import Slider from "react-slick";

const Carusel = () => {
    const slider = useRef();

    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };
    const sliderSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false
    };
    return (
        <div className="relative">
            <button className=" absolute left-3 top-[50%] slider-btn z-50 md:block" onClick={previous}>
                <img src="/images/leftArrow.png" alt=""/>
            </button>

            <Slider ref={c => (slider.current = c)} {...sliderSettings}>
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.sliderImage} alt="" className='w-full'/>
                        </div>
                    );
                })}
            </Slider>

            <button className=" absolute right-3 slider-btn top-[50%] z-50 md:block" onClick={next}>
                <img src="/images/rightArrow.png" alt=""/>
            </button>
        </div>
    );
};

export default Carusel;

const data = [
    {
        sliderImage: "/images/slider-bg2.png"
    },
    {
        sliderImage: "/images/slider-bg.png"
    },
    {
        sliderImage: "/images/slider-bg3.png"
    }
];

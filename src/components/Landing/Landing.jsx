import React, { useContext, useEffect, useState } from 'react'
import "./Landing.css"
import Slider from "react-slick";

import { img } from '../../utl/api';
import { MainContext } from '../../Context/MainContext';
import Loading from '../Loading/Loading';

export default function Landing() {

    let { getMovies } = useContext(MainContext)

    const [Movies, setMovies] = useState([])

    async function handleMovies(catego, callback) {
        let data = await getMovies(catego, callback)
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        focusOnSelect: true,
        initialSlide: 8,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        handleMovies("movie", setMovies)
    }, [])
    return (
        <>
            {Movies.length ? <section className='w-full landing'>
                <div className="container mx-auto px-3 flex flex-col justify-end h-full ">
                    <div className="">
                        <h2 className='capitalize sm:text-4xl md:text-5xl  font-bold'>our latest movies</h2>
                        <div className="slide my-5 mb-10 overflow-hidden">
                            <Slider {...settings}>
                                {Movies.map((Movie, index) => (
                                    <div key={index}>
                                        <div>
                                            <img className='cursor-pointer md:w-full' src={`${img}${Movie.poster_path}`} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section> : <Loading />}
        </>
    )
}

import React, { useContext, useEffect, useState } from 'react'
import "./TrendingTvShow.css"
import { MainContext } from '../../Context/MainContext'
import { Fragment } from 'react'
import { img } from '../../utl/api'
import Loading from '../Loading/Loading'

export default function TrendingMovies() {
    const { getMovies } = useContext(MainContext)
    const [tv, settv] = useState([])
    async function handleMovies(catego, callback) {
        let data = await getMovies(catego, callback)
    }
    useEffect(() => {
        handleMovies("tv", settv)
    }, [])

    return (
        <>
            {tv.length ? <div className="container mx-auto px-10">
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-5 gap-y-10 gap-x-3 my-20'>
                    <div className='col-span-2 flex flex-col'>
                        {/* <div className="badge absolute top-1 start-1 bg-blue-500 p-2 font-bold text-lg">
                            <span className='cursor-pointer'>Next Page</span>
                        </div> */}
                        <div id='line' className="bg-slate-600 w-1/4 mb-3"></div>
                        <h2 className='text-4xl pb-4'>Trending <br /> Tv Show To <br /> Watch Right Now</h2>
                        <p>Most Watched Movies By Days</p>
                        <div id='line' className="bg-slate-600 w-3/4 mt-3"></div>
                    </div>
                    {
                        tv.slice(0, 10).map(Movie => (<Fragment key={Movie.id}>
                            <div id={Movie.id} className='cursor-pointer hover:scale-105 transition-all relative '>
                                <div className="badge absolute top-0 end-0 bg-blue-500 p-2 font-bold text-lg">
                                    <span>{Movie.vote_average.toString().split("").slice(0, 3).join("")}</span>
                                </div>
                                <img src={`${img}${Movie.backdrop_path}`} alt="" />
                                <p className='text-center pt-2 text-xl'>{Movie.title}{Movie.name}</p>
                            </div>
                        </Fragment>))
                    }
                </div>
            </div> : <Loading />}

        </>
    )
}

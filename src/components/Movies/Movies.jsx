import React from 'react'
import "./Movies.css"
import TrendingMovies from '../TrendingMovies/TrendingMovies'
import TrendingTvShow from '../TrendingTvShow/TrendingTvShow'
import People from "../Poeple/Poeple"

export default function Movies() {



    return (
        <section className='movies__list py-28'>
            <div className="container mx-auto px-10">
                <TrendingMovies />
                <TrendingTvShow />
                <People />
            </div>
        </section>
    )
}

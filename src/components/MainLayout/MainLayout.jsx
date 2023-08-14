import React from 'react'
import "./MainLayout.css"
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { animated, useSpring } from '@react-spring/web'

export default function MainLayout() {
    const fade = useSpring({
        from: {
            opacity: 0,

        },
        to: {
            opacity: 1,
        },
    })
    return (
        <animated.div style={fade} className='duration-300 mainlayout'>
            <Navbar />
            <div className='outlet'>
                <Outlet />
            </div>
        </animated.div>
    )
}

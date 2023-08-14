import React from 'react'
import "./Loading.css"
import { Audio } from "react-loader-spinner"

export default function Loading() {
    return (
        <>
            <div className="loading flex justify-center items-center h-screen">
                <div className="content h-screen flex justify-center items-center">
                    <Audio
                        height={100}
                        width={100}
                        color='#fff'
                        ariaLabel='three-dots-loading'
                    />
                </div>
            </div>
        </>
    )
}

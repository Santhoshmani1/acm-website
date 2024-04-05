import React from 'react'

const PastEvent = ({ Event }) => {
    const { title, date, venue, highlights, attended } = Event;
    return (
        <div className='md:p-12 p-10 border-black border-2 m-10 rounded-xl w-5/6 mx-auto' style={{ fontFamily: "Poppins,Ariel" }}>
            <h3 className='text-2xl text-center p-2 text-blue-500 font-bold'>{title}</h3>
            <div className='text-red-600 flex justify-center items-center py-1 text-xl text-center p-2'>
                <span className="material-icons">event</span>
                <span>{date}</span></div>
            <div className='flex justify-center items-center py-1'>
                <div className='text-green-500 first-letter:flex justify-center items-center px-4  text-xl'>
                    <span className="material-icons">location_on</span>
                    <span>{venue}</span>
                </div>
                <div className='flex justify-start items-center py-1 px-4 text-xl text-yellow-400'>
                    <span className="material-icons">person</span>
                    <span>{attended}</span>
                </div>
            </div>
            <ul>
                {highlights.map((highlight, index) => {
                    return <li className='leading-relaxed text-xl text-gray-700' key={index}>{highlight}</li>
                })}
            </ul>
        </div>
    )
}

export default PastEvent
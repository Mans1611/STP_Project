import React, { useEffect, useState } from 'react'

const CountDown = ({days,hours,minutes,seconds}) => {

        

  return (
    <div className='CountDown-Container'>
        <h1>CountDown</h1>
        <div className="timeContainer">
            <div className="time">
                <h4 className="label">Days</h4>
                <h2 className="value">{days}</h2>
            </div>
            <div className="time">
                <h4 className="label">Hours</h4>
                <h2 className="value">{`${hours>=10? hours : `0${hours}` }`}</h2>
            </div>
            <div className="time">
                <h4 className="label">Minutes</h4>
                <h2 className="value">{`${minutes>=10? minutes : `0${minutes}` }`}</h2>
            </div>
            <div className="time">
                <h4 className="label">Seconds</h4>
                <h2 className="value">{`${seconds>=10? seconds : `0${seconds}` }`}</h2>
            </div>
        </div>
    </div>
  )
}

export default CountDown
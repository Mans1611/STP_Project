import React, { useState,useEffect } from 'react'
import { ColorStore } from '../../Context';
import CountDown from '../CountDown/CountDown';

const TimeCounter = () => {
    // time constants 
    const ONE_DAY = 1000 * 60 * 60 * 24 ; // one day in milleseconds
    const ONE_Hour = 1000 * 60 * 60  ; // one hour in milleseconds
    const ONE_Minute = 1000 * 60   ; // one minute in milleseconds
    const ONE_Second = 1000   ; // one second in milleseconds

    // component states.
    const [showCountDown, setShowCountDown] = useState(false);
    const [msg, setMsg] = useState(null);
    const [showMsg,setShowMsg] = useState(false);
    const [ending,setEnding] = useState(0)
    const [starting,setStarting] = useState(0)
    const [days,setDays] = useState(0)
    const [hours,setHours] = useState(0)
    const [minutes,setMinutes] = useState(0)
    const [seconds,setSeconds] = useState(0)
    const [checkDateFormate,setCheckDateFormate] = useState(false)

  
    const {color} = ColorStore();
    // this function will be called when the start button is clicked
    const handleCountDown = ()=>{
        const start_time = document.getElementById('starttime').value;
        const start_date = document.getElementById('startdate').value.split("-");
        const end_time = document.getElementById('endtime').value;
        const end_date = document.getElementById('enddate').value.split("-");
        const start = new Date(`${start_time} ${start_date[1]}-${start_date[2]}-${start_date[0]}`).getTime();
       
        const end = new Date(`${end_time} ${end_date[1]}-${end_date[2]}-${end_date[0]}`).getTime() 
        const now = new Date().getTime();
        
        console.log(end-start);

        if(!start_time || !start_date || !end_time || !end_date){
            setShowCountDown(false)
            setShowMsg(true);
            setMsg("Please Provide The Full start and end date");

        } 
        else if((end-start) <= 0){
            setShowCountDown(false);
            setShowMsg(true)
            setMsg("Invalid Date")
        }        
        else{
            setStarting(start);
            setEnding(end);
            setShowMsg(false);
            setCheckDateFormate(true);
        }
    }


   

    useEffect(()=>{
        if(checkDateFormate){

            const now = new Date().getTime();
            const timeLeft = ending - now;
            
            const interval = setInterval(() => {
                setDays(Math.floor(timeLeft/ONE_DAY))
                setHours(Math.floor( (timeLeft % ONE_DAY) / ONE_Hour));
                setMinutes(Math.floor( (timeLeft % ONE_Hour) / ONE_Minute));
                setSeconds(Math.floor(( timeLeft% ONE_Minute ) / 1000 ));
                
            }, ONE_Second);
           
            if( (ending - now) < 0){
                setShowCountDown(false);
                setMsg("Time is Up");
                setShowMsg(true)
            }
            else if((now - starting) < 0){
                setShowCountDown(false);
                setShowMsg(true);
                setMsg(`The Counter will start soon`)
            }else if ((now - starting) > 0) {
                setShowCountDown(true);
                setShowMsg(false)
            }
            
            return () => clearInterval(interval);
            
        }

    },[seconds,checkDateFormate])
    

  return (
    <div style={{color}} className='timeCounter page'>
        <div className="headline">
            <h1>Time Counter</h1>
        </div>
            <div className="inputContainer">
                <div className="dateWrapper">
                    <h4>Enter Start Date</h4>
                    <input id='startdate' type="date" />
                    <h4>Enter Start Time</h4>
                    <input id='starttime' type="time" />
                </div>
                <div className="dateWrapper">
                    <h4>Enter End Date</h4>
                    <input id='enddate'  type="date" />
                    <h4>Enter End Time</h4>
                    <input id='endtime'  type="time" />
                </div>
            </div>
            <div className="buttonWrapper">
                <button onClick={handleCountDown}>Start Count Down</button>
            </div>
            {
                showCountDown  && 
                <CountDown days = {days}
                           hours = {hours}
                           minutes = {minutes}
                           seconds = {seconds} 
                            /> 
                
            }
            {
                showMsg && 
                <div className="countdownNotworking">
                    {msg}
                </div>
            }
    </div>
  )
}

export default TimeCounter
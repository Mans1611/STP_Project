import React from 'react'
import { ColorStore } from '../../Context'
import ChangeColor from '../BackgroundColor.js/BackgroundColor'

const Vision = () => {
    const {color} = ColorStore();
   
  return (
    <div className='visionPage page'>
        <div style={{color}}  className="vision-content">
            <div className="titleWrapper">
                <h1>S T P</h1>
            </div>
            <div className="cards-container">

                <div className="vision box">
                    <img className='icon'  src="https://cdn-icons-png.flaticon.com/512/553/553363.png" />
                    <h3>VISION:</h3>
                    <div className="content">
                        <p>To be a Leading organization working on developing youth who will lead positive changes.</p>
                    </div>
                </div>
                <div className="mission box">
                <img className='icon' src="https://cdn-icons-png.flaticon.com/512/102/102349.png" />
                    <h3>MISSION:</h3>
                    <div className="content">
                        <p>To develop youth in various fields personally and technically through academic programs, projects, and events in a values oriented system, to take our part in providing a generation capable of playing its roles effictively towards itself, community and country.</p>
                    </div>
                </div>
                <div className="overview box">
                <img className='icon' src="https://icon-library.com/images/overview-icon-png/overview-icon-png-0.jpg" />
                    <h3>OVERVIEW:</h3>
                    <div className="content">
                        <p>STP "Steps Towards Progress" is a student activity which was held for the first time in the academic year 2005/2006. The idea was raised to provide students with the skills needed by the supplementary skills needed in the labor market.</p>
                    </div>
                </div>
            
            </div>
            <ChangeColor/>
        </div> 
    </div>

  )
}

export default Vision